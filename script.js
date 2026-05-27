document.addEventListener("DOMContentLoaded", function() {

    // 1. Chức năng bộ lọc (Tabs)
    const tabBtns = document.querySelectorAll(".tab-btn");
    const cards = document.querySelectorAll(".card");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Xóa active class ở tất cả nút
            tabBtns.forEach(b => b.classList.remove("active"));
            // Thêm active class vào nút được click
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            // Lọc các thẻ (cards)
            cards.forEach(card => {
                // Thu gọn lại thẻ nếu đang mở khi chuyển tab
                card.classList.remove("open"); 

                if (filterValue === "all") {
                    card.style.display = "block";
                } else {
                    if (card.getAttribute("data-category") === filterValue) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                }
            });
        });
    });

    // 2. Chức năng Accordion (Nhấp vào thẻ để hiện mô tả chi tiết)
    cards.forEach(card => {
        card.addEventListener("click", function() {
            // Đóng tất cả các thẻ khác trước khi mở thẻ này (tùy chọn)
            cards.forEach(c => {
                if(c !== this) c.classList.remove("open");
            });

            // Mở thẻ hiện tại
            this.classList.toggle("open");
        });
    });

    // 3. Ngăn chặn sự kiện click trên nút Đăng ký nổi bọt (khiến thẻ bị đóng/mở ngoài ý muốn)
    const buyBtns = document.querySelectorAll(".btn-buy");
    buyBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.stopPropagation();
        });
    });

});
