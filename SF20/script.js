const imagePaths = [
     "myImage/image2.png", // Replace with actual image paths
     "myImage/image3.png",
     "myImage/image4.png",
     "myImage/image5.png",
     "myImage/image6.png",
     "myImage/image7.png",
     "myImage/image8.png",
     "myImage/image9.png",
     "myImage/image10.png",
     "myImage/image11.png",
     "myImage/image12.png",
     "myImage/image13.png",
     "myImage/image14.png",
     "myImage/image15.png",
     "myImage/image16.png",
     "myImage/image17.png",
     "myImage/image18.png",
     "myImage/image19.png",
     "myImage/image20.png",
     "myImage/image21.png",
     "myImage/image22.png",
     "myImage/image23.png",
    "myImage/image24.png",
    "myImage/image25.png",
    "myImage/image26.png",
    "myImage/image27.png",
    "myImage/image28.png",
    "myImage/image29.png",
    "myImage/image30.png",
    "myImage/image31.png",
    "myImage/image32.png",
    "myImage/image33.png",
    "myImage/image34.png",
    "myImage/image35.png",
    "myImage/image36.png",
    "myImage/image37.png",
    "myImage/image38.png",
    
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
