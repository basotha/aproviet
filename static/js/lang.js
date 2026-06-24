// 1. TỪ ĐIỂN ĐA NGÔN NGỮ TOÀN TRANG (ĐẦY ĐỦ CÁC KHỐI TRÊN INDEX.HTML)
const languages = {
    vi: {
        top_market: "Thị trường: Toàn quốc & Xuất khẩu Quốc tế",
        top_hours: "Giờ làm việc: 08:00 - 17:00",
        top_hotline: "Hotline: 0972 320 357",

        menu_home: "Trang Chủ",
        menu_capability: "Năng Lực",
        menu_products: "Sản Phẩm",
        menu_factory: "Nhà Xưởng",
        menu_contact: "Liên Hệ",
        btn_quote: "Liên Hệ Báo Giá",
        
        hero_sub: "Hơn 10 Năm Đồng Hành Cùng Nông Nghiệp Việt",
        hero_title: "Cung Cấp & Xuất Khẩu Nông Sản Số Lượng Lớn",
        hero_desc: "APRO VIỆT tự hào là chuỗi cung ứng nông sản thô và sơ chế đạt chuẩn khắt khe cho các thị trường lớn trên thế giới như Nhật Bản, Hàn Quốc, các quốc gia Trung Đông và hệ thống phân phối nội địa hàng đầu.",
        hero_btn: "Xem Danh Mục Nông Sản",

        cap_main_title: "Năng Lực Sản Xuất Khép Kín",
        cap_main_sub: "Chúng tôi đảm bảo chất lượng từ vùng nguyên liệu đến kho bảo quản thành phẩm đầu ra",
        cap_card1_title: "Vùng Nguyên Liệu Lớn",
        cap_card1_desc: "Nguồn nông sản dồi dào thu hoạch trực tiếp tại các vùng liên kết địa phương, đảm bảo sản lượng lớn, ổn định quanh năm.",
        cap_card2_title: "Sơ Chế Tự Động",
        cap_card2_desc: "Nhà xưởng sơ chế hiện đại vận hành máy móc tự động hóa cao, đóng gói tối ưu theo quy chuẩn xuất khẩu của từng nước.",
        cap_card3_title: "Kho Lạnh 1.000 Tấn",
        cap_card3_desc: "Hệ thống kho lạnh bảo quản khép kín quy mô lớn giúp giữ trọn vẹn độ tươi ngon, chất lượng dinh dưỡng của nông sản đạt mức cao nhất.",

        prod_main_title: "Danh Mục Nông Sản Xuất Khẩu",
        prod_main_sub: "Sản phẩm đạt chuẩn kiểm định, quy cách đóng gói đa dạng theo yêu cầu đối tác",
        tab_all: "Tất Cả Nông Sản",
        tab_spices: "Nông Sản Gia Vị (Gừng, Tỏi, Ớt)",
        tab_roots: "Củ Quả (Cà rốt, Khoai lang...)",
        tab_fruits: "Trái Cây Tươi (Chanh dây, Ổi...)",

        fac_main_title: "Hình Ảnh Nhà Xưởng & Quy Trình",
        fac_main_sub: "Trực quan quy trình đóng gói và hệ thống máy móc phân loại tự động tại Hải Dương",
        fac_caption1: "Dây chuyền máy rửa và sơ chế tự động",
        fac_caption2: "Phân loại nông sản xuất khẩu nghiêm ngặt",
        fac_caption3: "Hệ thống kho lạnh thông minh khép kín",

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
        top_market: "Market: Nationwide & International Export",
        top_hours: "Working hours: 08:00 - 17:00",
        top_hotline: "Hotline: +84 972 320 357",

        menu_home: "Home",
        menu_capability: "Capabilities",
        menu_products: "Products",
        menu_factory: "Factory",
        menu_contact: "Contact",
        btn_quote: "Get A Quote",
        
        hero_sub: "Over 10 Years Accompanying Vietnamese Agriculture",
        hero_title: "High-Quality Agricultural Supply & Export",
        hero_desc: "APRO VIETNAM is proud to be a raw and semi-processed agricultural supply chain meeting strict standards for major global markets such as Japan, South Korea, Middle East countries, and leading domestic distribution systems.",
        hero_btn: "View Product Catalog",

        cap_main_title: "Closed Production Capacity",
        cap_main_sub: "We guarantee quality from raw material regions to output finished product storage",
        cap_card1_title: "Large Material Source",
        cap_card1_desc: "Abundant agricultural source harvested directly from local linked regions, ensuring large and stable production all year round.",
        cap_card2_title: "Automated Processing",
        cap_card2_desc: "Modern processing factory operating highly automated machinery, optimizing packaging according to export standards of each country.",
        cap_card3_title: "1,000-Ton Cold Storage",
        cap_card3_desc: "Large-scale closed preservation cold storage system helps keep the ultimate freshness and nutritional quality of agricultural products.",

        prod_main_title: "Export Agricultural Product Catalog",
        prod_main_sub: "Products meet international inspection standards, diverse packaging specifications upon request",
        tab_all: "All Agriculture Products",
        tab_spices: "Spices (Ginger, Garlic, Chili)",
        tab_roots: "Root Vegetables (Carrot, Sweet Potato...)",
        tab_fruits: "Fresh Fruits (Passion Fruit, Guava...)",

        fac_main_title: "Factory Images & Processing Flow",
        fac_main_sub: "Visual packaging process and automated sorting machinery system in Hai Duong",
        fac_caption1: "Automated washing and processing line",
        fac_caption2: "Strict sorting process for export agricultural products",
        fac_caption3: "Smart closed cold storage system",

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
    ko: {
        // Top Bar
        top_market: "시장: 전국 공급 및 국제 수출",
        top_hours: "근무 시간: 08:00 - 17:00",
        top_hotline: "핫라인: +84 972 320 357",

        // Menu & Buttons
        menu_home: "홈페이지",
        menu_capability: "생산 능력",
        menu_products: "농산물",
        menu_factory: "공장 현황",
        menu_contact: "문의하기",
        btn_quote: "견적 요청",
        
        // Hero Banner
        hero_sub: "베트남 농업과 함께한 10여 년",
        hero_title: "대량 우수 농산물 공급 및 수출",
        hero_desc: "APRO VIETNAM은 일본, 한국, 중동 국가 등 글로벌 주요 시장과 국내 유수의 유통 시스템의 엄격한 기준을 충족하는 최상급 농산물 공급망임을 자랑스럽게 생각합니다.",
        hero_btn: "농산물 카탈로그 보기",

        // Capabilities
        cap_main_title: "원스톱 생산 능력",
        cap_main_sub: "원재료 산지부터 완제품 보관까지 철저한 품질을 보장합니다",
        cap_card1_title: "대규모 원자재 기지",
        cap_card1_desc: "지역 연계 농가에서 풍부한 농산물을 직접 수확하여 연중 안정적이고 대량의 물량을 확보합니다.",
        cap_card2_title: "자동화 1차 가공",
        cap_card2_desc: "최첨단 자동화 설비를 갖춘 현대식 가공 공장에서 각국의 수출 규격에 맞게 포장을 최적화합니다.",
        cap_card3_title: "1,000톤급 냉동 창고",
        cap_card3_desc: "대규모 밀폐형 신선 냉동 보관 시스템을 통해 농산물의 신선도와 영양 가치를 최고 수준으로 유지합니다.",

        // Products & Tabs
        prod_main_title: "수출 농산물 카탈로그",
        prod_main_sub: "국제 검사 기준을 충족한 제품으로, 바이어의 요청에 따라 다양한 포장 규격을 제공합니다",
        tab_all: "전체 농산물",
        tab_spices: "양념류 농산물 (생강, 마늘, 고추)",
        tab_roots: "구근류 채소 (당근, 고구마...)",
        tab_fruits: "신선 과일 (백향과, 구아바...)",

        // Factory Gallery
        fac_main_title: "공장 전경 및 공정 프로세스",
        fac_main_sub: "하이즈엉 공장의 자동화 분류 시스템 및 포장 공정을 직관적으로 보여드립니다",
        fac_caption1: "자동 세척 및 1차 가공 라인",
        fac_caption2: "수출 농산물의 엄격한 분류 작업",
        fac_caption3: "지능형 밀폐 냉동 창고 시스템",

        // Features & Map
        feat_map_title: "수출 지도",
        feat_map_desc: "APRO VIETNAM의 농산물은 일본, 한국, 두바이, 카타르, 방글라데시, 말레이시아 등 기준이 엄격한 시장에 성공적으로 진출했습니다.",
        feat_item1_title: "Global GAP / ISO 표준",
        feat_item1_desc: "잔류 농약을 철저히 통제하여 국제 수출 검사 기준을 통과했습니다.",
        feat_item2_title: "안정적인 대량 생산",
        feat_item2_desc: "대규모 컨테이너 주문을 지속적으로 충족하여 공급망 중단이 없습니다.",
        feat_item3_title: "2016년부터 신뢰받는 파트너",
        feat_item3_desc: "B2B 농산물 수출 무역 분야에서 약 10년의 풍부한 경험을 보유하고 있습니다.",
        feat_item4_title: "공장 직판 가격",
        feat_item4_desc: "현지 산지에서 원재료를 직접 공급받아 중간 유통 비용을 완벽하게 절감합니다.",

        // Footer
        foot_company: "APRO VIET COMPANY LIMITED",
        foot_tax: "사업자 등록 번호:",
        foot_date: "설립일:",
        foot_address: "사무실 / 공장: 베트남 하이즈엉성 깜장현 깜반사",
        foot_hotline_title: "고객 센터",
        foot_hl1: "핫라인 1: 0972 320 357",
        foot_hl2: "핫라인 2: 0901 525 345",
        foot_links_title: "빠른 링크",
        foot_link_top: "맨 위로",
        foot_link_cap: "생산 능력",
        foot_link_prod: "제품 카탈로그",
        foot_map_title: "지도 위치",
        foot_map_placeholder: "[APRO VIETNAM 구글 지도 위치]",
        foot_copyright: "© 2026 APROVIET.COM. 친환경 수출 농산물 브랜드로서 모든 권리를 보유합니다."
    }
};

let currentLanguage = 'vi';

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('apro_selected_lang', lang);

    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`);
    if (activeBtn) activeBtn.classList.add('active');

    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (languages[lang] && languages[lang][key]) {
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

    if (typeof productsData !== 'undefined' && productsData.length > 0) {
        displayProducts(productsData);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const savedLang = localStorage.getItem('apro_selected_lang') || 'vi';
    changeLanguage(savedLang);
});
