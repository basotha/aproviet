import os
import re
import json
import requests
import pandas as pd

# 1. CẤU HÌNH THÔNG TIN
# Thay bằng ID file Google Sheets của anh
SHEET_ID = "14oTOc3NitNddUTidQsoMT3tpZddhxEUj72TuZWT-qsE"
SHEET_URL = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid=0"

IMAGE_FOLDER = "static/products"
JSON_OUTPUT_PATH = "static/products.json"

# Tạo thư mục chứa ảnh nếu chưa tồn tại
os.makedirs(IMAGE_FOLDER, exist_ok=True)

# Hàm bóc tách ID file từ các định dạng link Google Drive khác nhau
def extract_drive_id(url):
    if not url or not isinstance(url, str):
        return None
    # Các mẫu regex để tìm ID của file Google Drive
    patterns = [
        r"file/d/([a-zA-Z0-9_-]+)",
        r"id=([a-zA-Z0-9_-]+)",
        r"open\?id=([a-zA-Z0-9_-]+)",
        r"uc\?export=download&id=([a-zA-Z0-9_-]+)"
    ]
    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    return None

# Hàm tải ảnh từ Google Drive về thư mục local trên GitHub bẳng ID file
def download_file_from_google_drive(file_id, destination):
    URL = "https://docs.google.com/uc?export=download"
    session = requests.Session()
    
    # Gửi request lần đầu để kiểm tra cảnh báo virus của Google (nếu có)
    response = session.get(URL, params={'id': file_id}, stream=True)
    token = None
    for key, value in response.cookies.items():
        if key.startswith('download_warning'):
            token = value
            break

    if token:
        params = {'id': file_id, 'confirm': token}
        response = session.get(URL, params=params, stream=True)

    # Ghi dữ liệu vào file ảnh
    with open(destination, 'wb') as f:
        for chunk in response.iter_content(chunk_size=32768):
            if chunk:
                f.write(chunk)

print("🚀 Đang tiến hành đọc dữ liệu từ Google Sheets...")

try:
    # 2. ĐỌC FILE GOOGLE SHEETS (Ép kiểu dữ liệu về string và viết thường các cột)
    df = pd.read_csv(SHEET_URL)
    df.columns = df.columns.str.strip().str.lower() # Tự động chuyển tên cột sang chữ thường (id, category, name_vi...)

    products_list = []

    # 3. DUYỆT TỪNG DÒNG SẢN PHẨM
    for index, row in df.iterrows():
        # Kiểm tra nếu dòng trống hoặc không có ID thì bỏ qua
        if pd.isna(row.get('id')):
            continue
            
        p_id = int(row['id'])
        category = str(row.get('category', '')).strip()
        
        # Chuẩn hóa mã danh mục (Nếu khách gõ Tiếng Việt có dấu thì tự đổi về chuẩn slug)
        category_mapping = {
            "gia vị": "gia-vi", "gia vi": "gia-vi", "gia-vi": "gia-vi",
            "củ quả": "cu-qua", "cu qua": "cu-qua", "cu-qua": "cu-qua",
            "trái cây": "trai-cay", "trai cay": "trai-cay", "trai-cay": "trai-cay"
        }
        category_lower = category.lower()
        final_category = category_mapping.get(category_lower, category_lower)

        # Xử lý hình ảnh tự động
        drive_url = str(row.get('image', '')).strip()
        drive_id = extract_drive_id(drive_url)
        
        # Mặc định ban đầu nếu không tải được sẽ lấy link gốc hoặc placeholder
        image_json_path = "https://placehold.co/400x300?text=Apro+Viet+Nam"

        if drive_id:
            # Tự động đặt tên file ảnh trên GitHub theo ID sản phẩm (ví dụ: product_1.jpg)
            image_filename = f"product_{p_id}.jpg"
            local_image_path = os.path.join(IMAGE_FOLDER, image_filename)
            
            print(f"📸 Tìm thấy ảnh Drive cho sản phẩm ID {p_id}. Đang tiến hành tải về...")
            try:
                download_file_from_google_drive(drive_id, local_image_path)
                # Đường dẫn tương đối sẽ được ghi vào file JSON cho Web đọc
                image_json_path = f"static/products/{image_filename}"
                print(f"✅ Tải thành công! Lưu tại: {image_json_path}")
            except Exception as img_err:
                print(f"❌ Lỗi khi tải ảnh sản phẩm {p_id}: {img_err}")
                if os.path.exists(local_image_path):
                    image_json_path = f"static/products/{image_filename}"
        elif drive_url and drive_url != 'nan':
            # Nếu khách điền đường dẫn text sẵn hoặc link khác không phải Drive
            image_json_path = drive_url

        # Tạo cấu trúc object sản phẩm chuẩn đa ngôn ngữ
        product_item = {
            "id": p_id,
            "category": final_category,
            "name_vi": str(row.get('name_vi', '')).strip(),
            "name_en": str(row.get('name_en', '')).strip(),
            "name_zh": str(row.get('name_zh', '')).strip(),
            "description_vi": str(row.get('description_vi', '')).strip(),
            "description_en": str(row.get('description_en', '')).strip(),
            "description_zh": str(row.get('description_zh', '')).strip(),
            "price_vi": str(row.get('price_vi', '')).strip(),
            "price_en": str(row.get('price_en', '')).strip(),
            "price_zh": str(row.get('price_zh', '')).strip(),
            "image": image_json_path
        }
        products_list.append(product_item)

    # 4. XUẤT RA FILE JSON
    with open(JSON_OUTPUT_PATH, 'w', encoding='utf-8') as json_file:
        json.dump(products_list, json_file, ensure_ascii=False, indent=4)
        
    print(f"🎉 Hoàn thành cập nhật! Đã sinh file {JSON_OUTPUT_PATH} thành công.")

except Exception as e:
    print(f"❌ Lỗi hệ thống khi đồng bộ dữ liệu: {e}")
