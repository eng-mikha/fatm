let menu = document.getElementById("menu");
let list = document.getElementById("list");

function toggleList() {
    list.classList.toggle('visible'); // تبديل فئة visible
}

// إضافة حدث النقر على الزر
menu.addEventListener('click', function(event) {
    event.stopPropagation(); // منع انتشار الحدث إلى document
    toggleList();
});

// إضافة حدث النقر على document لإخفاء القائمة عند النقر خارجها
document.addEventListener('click', function(event) {
    if (list.classList.contains('visible') && !list.contains(event.target) && event.target !== menu) {
        list.classList.remove('visible'); // إخفاء القائمة
    }
});