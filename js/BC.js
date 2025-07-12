document.addEventListener("DOMContentLoaded", function () {
    const images = ["../imgs/board/BCLOGO.png", "../imgs/board/BUGCHESS.PNG", "../imgs/board/board03.png" ]; 
    let currentIndex = 0;
    const imgElement = document.getElementById("slideshow");
    const nextButton = document.getElementById("nextImage");
    const prevButton = document.getElementById("prevImage");

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    });

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        imgElement.src = images[currentIndex];
    });
});
