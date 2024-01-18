const imagePaths = [
    "myImage/image2.png", // Replace with actual image paths
    "myImage/image3.png",
    "myImage/image4.png",
];


let currentImageIndex = 0;
let imageElement = document.getElementById("myImage");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");

function changeImage() {
    imageElement.src = imagePaths[currentImageIndex];
}

// Initial image display
//changeImage();

// Automatic image cycling
//setInterval(function () {
//     currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
//     changeImage();
// }, 2000); // Change image every 2 seconds

// Button click events
prevButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
    changeImage();
});

nextButton.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    changeImage();
});