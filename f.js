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
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.hidden');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // يمكنك تعديل هذا الرقم لتغيير وقت الظهور

        if (elementPosition <= screenPosition) {
            element.classList.add('visible');
        }
    });
});

window.onload = function() {
    const elements = document.querySelectorAll('.hidden-top');
    
    elements.forEach(element => {
        element.classList.add('visible-top');
    });
};
