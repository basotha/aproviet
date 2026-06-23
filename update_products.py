import pandas as pd
import json
import re

# Link CSV xuất từ Google Sheet của anh
SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/14oTOc3NitNddUTidQsoMT3tpZddhxEUj72TuZWT-qsE/export?format=csv"

def clean_drive_url(url):
    # Nếu khách dán link Google Drive, tự động bẻ thành link ảnh trực tiếp
    if "drive.google.com" in url:
        match = re.search(r'/d/([a-zA-Z0-9-_]+)', url)
        if match:
            return f"https://docs.google.com/uc?export=download&id={match.group(1)}"
    return url # Nếu là đường dẫn static/ hoặc link khác thì giữ nguyên

def main():
    try:
        # 1. Đọc dữ liệu từ Google Sheet bằng mã CSV
        df = pd.read_csv(SHEET_CSV_URL)
        
        # 2. Tối ưu lại cột hình ảnh
        if 'image' in df.columns:
            df['image'] = df['image'].astype(str).apply(clean_drive_url)
            
        # 3. Chuyển thành danh sách Dictionary (JSON)
        products_list = df.to_dict(orient='records')
        
        # 4. Ghi đè vào file products.json trong thư mục dự án web
        with open('static/products.json', 'w', encoding='utf-8') as f:
            json.dump(products_list, f, ensure_ascii=False, indent=4)
            
        print("Cập nhật file products.json thành công từ Google Sheets!")
    except Exception as e:
        print(f"Có lỗi xảy ra: {e}")

if __name__ == "__main__":
    main()