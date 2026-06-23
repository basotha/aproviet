// 1. TỪ ĐIỂN ĐA NGÔN NGỮ TOÀN TRANG (ĐẦY ĐỦ CÁC KHỐI TRÊN INDEX.HTML)
const languages = {
    vi: {
        // Thanh thông tin trên cùng (Top Bar)
        top_market: "Thị trường: Toàn quốc & Xuất khẩu Quốc tế",
        top_hours: "Giờ làm việc: 08:00 - 17:00",
        top_hotline: "Hotline: 0972 320 357",

        // Menu & Buttons hành động
        menu_home: "Trang Chủ",
        menu_capability: "Năng Lực",
        menu_products: "Sản Phẩm",
        menu_factory: "Nhà Xưởng",
        menu_contact: "Liên Hệ",
        btn_quote: "Liên Hệ Báo Giá",
        
        // Khối Hero Banner chính
        hero_sub: "Hơn 10 Năm Đồng Hành Cùng Nông Nghiệp Việt",
        hero_title: "Cung Cấp & Xuất Khẩu Nông Sản Số Lượng Lớn",
        hero_desc: "APRO VIỆT tự hào là chuỗi cung ứng nông sản thô và sơ chế đạt chuẩn khắt khe cho các thị trường lớn trên thế giới như Nhật Bản, Hàn Quốc, các quốc gia Trung Đông và hệ thống phân phối nội địa hàng đầu.",
        hero_btn: "Xem Danh Mục Nông Sản",

        // Khối Năng lực Sản xuất (Capabilities)
        cap_main_title: "Năng Lực Sản Xuất Khép Kín",
        cap_main_sub: "Chúng tôi đảm bảo chất lượng từ vùng nguyên liệu đến kho bảo quản thành phẩm đầu ra",
        cap_card1_title: "Vùng Nguyên Liệu Lớn",
        cap_card1_desc: "Nguồn nông sản dồi dào thu hoạch trực tiếp tại các vùng liên kết địa phương, đảm bảo sản lượng lớn, ổn định quanh năm.",
        cap_card2_title: "Sơ Chế Tự Động",
        cap_card2_desc: "Nhà xưởng sơ chế hiện đại vận hành máy móc tự động hóa cao, đóng gói tối ưu theo quy chuẩn xuất khẩu của từng nước.",
        cap_card3_title: "Kho Lạnh 1.000 Tấn",
        cap_card3_desc: "Hệ thống kho lạnh bảo quản khép kín quy mô lớn giúp giữ trọn vẹn độ tươi ngon, chất lượng dinh dưỡng của nông sản đạt mức cao nhất.",

        // Khối Sản phẩm & Các Tab danh mục
        prod_main_title: "Danh Mục Nông Sản Xuất Khẩu",
        prod_main_sub: "Sản phẩm đạt chuẩn kiểm định, quy cách đóng gói đa dạng theo yêu cầu đối tác",
        tab_all: "Tất Cả Nông Sản",
        tab_spices: "Nông Sản Gia Vị (Gừng, Tỏi, Ớt)",
        tab_roots: "Củ Quả (Cà rốt, Khoai lang...)",
        tab_fruits: "Trái Cây Tươi (Chanh dây, Ổi...)",

        // Khối Hình ảnh Nhà xưởng (Gallery)
        fac_main_title: "Hình Ảnh Nhà Xưởng & Quy Trình",
        fac_main_sub: "Trực quan quy trình đóng gói và hệ thống máy móc phân loại tự động tại Hải Dương",
        fac_caption1: "Dây chuyền máy rửa và sơ chế tự động",
        fac_caption2: "Phân loại nông sản xuất khẩu nghiêm ngặt",
        fac_caption3: "Hệ thống kho lạnh thông minh khép kín",

        // Khối Tính năng & Bản đồ xuất khẩu
        feat_map_title: "Bản Đồ Xuất Khẩu",
        feat_map_desc: "Nông sản của APRO VIỆT đã chinh phục thành công các thị trường yêu cầu tiêu chí cao: Nhật Bản, Hàn Quốc, Dubai, Quata, Bangladesh, Malaysia...",
        feat_item1_title: "Chuẩn Global Gap / ISO",
        feat_item1_desc: "Kiểm soát chặt chẽ dư lượng thuốc bảo vệ thực vật, đạt kiểm định quốc tế đầu ra.",
        feat_item2_title: "Sản Lượng Lớn & Ổn Định",
        feat_item2_desc: "Đáp ứng liên tục các đơn hàng đóng container số lượng lớn, không đứt gãy chuỗi cung ứng.",
        feat_item3_title: "Đối Tác Uy Tín Từ 2016",
        feat_item3_desc: "Gần 10 năm kinh nghiệm trên thương trường xuất nhập khẩu nông sản B2B.",
        feat_item4_title: "Giá Gốc Tại Nhà Xưởng",
        feat_item4_desc: "Nguồn cung trực tiếp từ vùng nguyên liệu tại chỗ, tối ưu chi phí trung gian tốt nhất.",

        // Chân trang (Footer)
        foot_company: "CÔNG TY TNHH APRO VIỆT",
        foot_tax: "Mã số thuế:",
        foot_date: "Ngày hoạt động:",
        foot_address: "Văn phòng / Nhà xưởng: Cẩm Văn, huyện Cẩm Giàng, tỉnh Hải Dương",
        foot_hotline_title: "Đường Dây Nóng",
        foot_hl1: "Hotline 1: 0972 320 357",
        foot_hl2: "Hotline 2: 0901 525 345",
        foot_links_title: "Hệ Thống Link",
        foot_link_top: "Về đầu trang",
        foot_link_cap: "Năng lực sản xuất",
        foot_link_prod: "Danh mục nông sản",
        foot_map_title: "Vị Trí Trên Bản Đồ",
        foot_map_placeholder: "[Bản đồ Google Maps Vị Trí APRO VIỆT]",
        foot_copyright: "© 2026 APROVIET.COM. Bảo lưu mọi quyền thương hiệu nông sản xuất khẩu sạch."
    },
    en: {
        // Top Bar
        top_market: "Market: Nationwide & International Export",
        top_hours: "Working hours: 08:00 - 17:00",
        top_hotline: "Hotline: +84 972 320 357",

        // Menu & Buttons
        menu_home: "Home",
        menu_capability: "Capabilities",
        menu_products: "Products",
        menu_factory: "Factory",
        menu_contact: "Contact",
        btn_quote: "Get A Quote",
        
        // Hero Banner
        hero_sub: "Over 10 Years Accompanying Vietnamese Agriculture",
        hero_title: "High-Quality Agricultural Supply & Export",
        hero_desc: "APRO VIETNAM is proud to be a raw and semi-processed agricultural supply chain meeting strict standards for major global markets such as Japan, South Korea, Middle East countries, and leading domestic distribution systems.",
        hero_btn: "View Product Catalog",

        // Capabilities
        cap_main_title: "Closed Production Capacity",
        cap_main_sub: "We guarantee quality from raw material regions to output finished product storage",
        cap_card1_title: "Large Material Source",
        cap_card1_desc: "Abundant agricultural source harvested directly from local linked regions, ensuring large and stable production all year round.",
        cap_card2_title: "Automated Processing",
        cap_card2_desc: "Modern processing factory operating highly automated machinery, optimizing packaging according to export standards of each country.",
        cap_card3_title: "1,000-Ton Cold Storage",
        cap_card3_desc: "Large-scale closed preservation cold storage system helps keep the ultimate freshness and nutritional quality of agricultural products.",

        // Products & Tabs
        prod_main_title: "Export Agricultural Product Catalog",
        prod_main_sub: "Products meet international inspection standards, diverse packaging specifications upon request",
        tab_all: "All Agriculture Products",
        tab_spices: "Spices (Ginger, Garlic, Chili)",
        tab_roots: "Root Vegetables (Carrot, Sweet Potato...)",
        tab_fruits: "Fresh Fruits (Passion Fruit, Guava...)",

        // Factory Gallery
        fac_main_title: "Factory Images & Processing Flow",
        fac_main_sub: "Visual packaging process and automated sorting machinery system in Hai Duong",
        fac_caption1: "Automated washing and processing line",
        fac_caption2: "Strict sorting process for export agricultural products",
        fac_caption3: "Smart closed cold storage system",

        // Features & Map
        feat_map_title: "Export Map",
        feat_map_desc: "APRO VIETNAM agricultural products have successfully conquered strict high-standard markets: Japan, South Korea, Dubai, Qatar, Bangladesh, Malaysia...",
        feat_item1_title: "Global Gap / ISO Standards",
        feat_item1_desc: "Strictly control pesticide residues, achieving certified international export standards.",
        feat_item2_title: "Large & Stable Volume",
        feat_item2_desc: "Continuously fulfill large container orders, ensuring an uninterrupted supply chain.",
        feat_item3_title: "Trusted Partner Since 2016",
        feat_item3_desc: "Nearly 10 years of experience in the B2B agricultural export market.",
        feat_item4_title: "Factory-Direct Price",
        feat_item4_desc: "Direct supply from local raw material areas, optimizing middleman costs perfectly.",

        // Footer
        foot_company: "APRO VIET COMPANY LIMITED",
        foot_tax: "Tax code:",
        foot_date: "Active date:",
        foot_address: "Office / Factory: Cam Van, Cam Giang district, Hai Duong province",
        foot_hotline_title: "Hotline Support",
        foot_hl1: "Hotline 1: 0972 320 357",
        foot_hl2: "Hotline 2: 0901 525 345",
        foot_links_title: "Quick Links",
        foot_link_top: "Back to top",
        foot_link_cap: "Production capacity",
        foot_link_prod: "Product catalog",
        foot_map_title: "Location On Map",
        foot_map_placeholder: "[Google Maps Location of APRO VIETNAM]",
        foot_copyright: "© 2026 APROVIET.COM. All rights reserved for clean export agricultural brand."
    },
    zh: {
        // Top Bar
        top_market: "市场：全国供应与国际出口",
        top_hours: "工作时间：08:00 - 17:00",
        top_hotline: "服务热线：+84 972 320 357",

        // Menu & Buttons
        menu_home: "首页",
        menu_capability: "核心能力",
        menu_products: "农产品",
        menu_factory: "厂房实景",
        menu_contact: "联系我们",
        btn_quote: "获取报价",
        
        // Hero Banner
        hero_sub: "深耕越南农业 10 余年",
        hero_title: "大宗优质农产品供应与出口",
        hero_desc: "APRO VIETNAM 骄傲地成为满足日本、韩国、中东国家等全球主要市场以及国内领先分销系统严格标准的初加工农产品供应链。",
        hero_btn: "查看产品目录",

        // Capabilities
        cap_main_title: "闭环生产能力",
        cap_main_sub: "我们确保从原材料产地到成品储存的出厂质量",
        cap_card1_title: "大型原料基地",
        cap_card1_desc: "直接从地方联营区域采收丰富的农业资源，确保全年产量大、稳定。",
        cap_card2_title: "自动化初加工",
        cap_card2_desc: "现代化的初加工厂，运行高度自动化的机械设备，根据各国的出口标准优化包装。",
        cap_card3_title: "1000吨冷库系统",
        cap_card3_desc: "大规模闭环保鲜冷库系统，有助于保持农产品最高鲜度和营养质量。",

        // Products & Tabs
        prod_main_title: "出口农产品目录",
        prod_main_sub: "产品达到国际检验标准，可根据客户要求提供多样化包装规格",
        tab_all: "全部农产品",
        tab_spices: "调 vị 农产品 (生姜、大蒜、辣椒)",
        tab_roots: "根茎类蔬菜 (胡萝卜、红薯...)",
        tab_fruits: "新鲜水果 (百香果、番石榴...)",

        // Factory Gallery
        fac_main_title: "厂房实景与工艺流程",
        fac_main_sub: "海阳自动化分拣机械系统及包装流程直观展示",
        fac_caption1: "全自动清洗及初加工流水线",
        fac_caption2: "出口农产品严格分拣流程",
        fac_caption3: "智能闭环冷库系统",

        // Features & Map
        feat_map_title: "出口版图",
        feat_map_desc: "APRO VIETNAM 农产品已成功征服高标准要求的市场：日本、韩国、迪拜、卡塔尔、孟加拉国、马来西亚等...",
        feat_item1_title: "Global Gap / ISO 标准",
        feat_item1_desc: "严格控制农药残留，达到国际出口检验标准。",
        feat_item2_title: "大宗且稳定的产量",
        feat_item2_desc: "持续满足大宗集装箱订单需求，确保供应链不中断。",
        feat_item3_title: "自2016年起值得信赖的合作伙伴",
        feat_item3_desc: "在B2B农产品出口贸易领域拥有近10年的丰富经验。",
        feat_item4_title: "源头工厂价格",
        feat_item4_desc: "原料直接由本地产地供应，实现完美的中间商成本优化。",

        // Footer
        foot_company: "APRO 越南有限责任公司",
        foot_tax: "税号：",
        foot_date: "开业日期：",
        foot_address: "办公室/厂房：越南海阳省锦江县锦文社",
        foot_hotline_title: "服务热线",
        foot_hl1: "热线 1: 0972 320 357",
        foot_hl2: "热线 2: 0901 525 345",
        foot_links_title: "快捷链接",
        foot_link_top: "返回顶部",
        foot_link_cap: "生产能力",
        foot_link_prod: "产品目录",
        foot_map_title: "地图位置",
        foot_map_placeholder: "[APRO VIETNAM 谷歌地图位置]",
        foot_copyright: "© 2026 APROVIET.COM. 绿色出口农产品品牌版权所有。"
    }
};

// 2. BIẾN THEO DÕI NGÔN NGỮ HIỆN TẠI (Mặc định là 'vi')
let currentLanguage = 'vi';

// 3. HÀM THỰC HIỆN ĐỔI NGÔN NGỮ ĐỒNG BỘ TOÀN TRANG
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('apro_selected_lang', lang);

    // Cập nhật trạng thái viền sáng hoạt động cho các nút lá cờ
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`);
    if (activeBtn) activeBtn.classList.add('active');

    // Quét toàn bộ phần tử có thuộc tính "data-lang" để chuyển đổi chữ văn bản tĩnh
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (languages[lang] && languages[lang][key]) {
            // Trường hợp đặc biệt nếu thẻ có chứa icon (thẻ <i>) thì giữ lại icon, chỉ đổi văn bản sau đó
            const icon = el.querySelector('i');
            if (icon) {
                el.innerHTML = '';
                el.appendChild(icon);
                el.appendChild(document.createTextNode(' ' + languages[lang][key]));
            } else {
                el.innerText = languages[lang][key];
            }
        }
    });

    // Gọi hàm hiển thị lại danh sách nông sản động từ file JSON theo ngôn ngữ mới
    if (typeof productsData !== 'undefined' && productsData.length > 0) {
        displayProducts(productsData);
    }
}

// 4. SỰ KIỆN TỰ ĐỘNG NHẬN DIỆN NGÔN NGỮ CŨ KHI KHÁCH TRUY CẬP LẠI TRANG WEB
document.addEventListener("DOMContentLoaded", function() {
    const savedLang = localStorage.getItem('apro_selected_lang') || 'vi';
    changeLanguage(savedLang);
});