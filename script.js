// ฟังก์ชันในการแสดงและซ่อนเมนู
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // เพิ่มหรือลบคลาส show
});

// ฟังก์ชันสำหรับเปลี่ยนแปลง active class
const menuLinks = document.querySelectorAll('.menu a'); // เลือกลิงค์ทั้งหมดในเมนู

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // ลบคลาส active ออกจากทุกลิงค์
        menuLinks.forEach(item => item.classList.remove('active'));
        // เพิ่มคลาส active ให้กับลิงค์ที่ถูกคลิก
        this.classList.add('active');
        // ปิดเมนูหลังจากเลือก
        const menu = document.getElementById('menu');
        menu.classList.remove('show');
    });
});

// ฟังก์ชันสำหรับป๊อปอัพ
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const openPopupBtn = document.getElementById("see-more-button");

    // เปิดป๊อปอัพเมื่อคลิกปุ่ม "See More"
    openPopupBtn.onclick = function() {
        popup.style.display = "block";
    };

    // ปิดป๊อปอัพเมื่อคลิกนอกป๊อปอัพ
    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    };

    // ปิดป๊อปอัพเมื่อคลิกที่ปุ่มปิด
    const closePopupBtn = popup.querySelector(".close");
    closePopupBtn.onclick = function() {
        popup.style.display = "none";
    };
});
