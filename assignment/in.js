let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.slider .list');
let thumbnail = document.querySelector('.slider .thumbnail');
let thumbnailItems = thumbnail.querySelectorAll('.item');

thumbnail.appendChild(thumbnailItems[0]);

let autoSlideInterval = null;

nextBtn.onclick = function () {
    clearAutoSlide();
    moveSlider('next');
    startAutoSlide(); 
};

prevBtn.onclick = function () {
    clearAutoSlide();
    moveSlider('prev');
    startAutoSlide(); 
};

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]); 
        thumbnail.appendChild(thumbnailItems[0]); 
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]); 
        slider.classList.add('prev');
    }

   
    slider.addEventListener(
        'animationend',
        function () {
            if (direction === 'next') {
                slider.classList.remove('next');
            } else {
                slider.classList.remove('prev');
            }
        },
        { once: true }
    );
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveSlider('next');
    }, 3000); 
}


function clearAutoSlide() {
    clearInterval(autoSlideInterval);
}


startAutoSlide();



 const navLinks = document.querySelectorAll('header nav a');

 navLinks.forEach(link => {
     link.addEventListener('click', function() {
         
         navLinks.forEach(navLink => navLink.classList.remove('active'));
         
         
         this.classList.add('active');
     });
 });

   


const helpButton = document.getElementById("help-button");
const helpPopup = document.getElementById("help-popup");

helpButton.addEventListener("click", () => {
  helpPopup.classList.toggle("show-popup");
});

document.getElementById("help-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent. We’ll respond shortly!");
  helpPopup.classList.remove("show-popup");
});


