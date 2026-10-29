const images =  
[
    "assets/images/lifeculture.jpeg",
    "assets/images/ancientgreekslide.jpg",
    "assets/images/classicgreekslide.jpg",
    "assets/images/deathofsocrates.jpg",
    "assets/images/phryne.jpg"
];

let index = 0;
let timer;

function showNextSlide() {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];

}

function startSlides() {
    if (!timer) {
        timer = setInterval(showNextSlide, 3000);
    }
}

function stopSlides() {
    clearInterval(timer);
    timer = undefined;
}