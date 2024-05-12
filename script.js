// JavaScript code for modal functionality
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var currentImageIndex = 0; // To keep track of the current image index
var currentSeriesIndex = 0; // To keep track of the current series index
var seriesData = [ // Define an array of series, each containing an array of image URLs

    ["IMAGES/Numero/232-1.jpg","IMAGES/Numero/232-2.jpg","IMAGES/Numero/232-3.jpg","IMAGES/Numero/232-4.jpg","IMAGES/Numero/232-5.jpg","IMAGES/Numero/232-6.jpg","IMAGES/Numero/232-7.jpg"],
    ["IMAGES/Issey_Miyake/ISSEY-1.jpg","IMAGES/Issey_Miyake/ISSEY-2.jpg","IMAGES/Issey_Miyake/ISSEY-3.jpg","IMAGES/Issey_Miyake/ISSEY-4.jpg"],

    

    // Add more series as needed
];

// Function to switch between images
function switchImage() {
    currentImageIndex = (currentImageIndex + 1) % seriesData[currentSeriesIndex].length; // Increment index, loop back to 0 if it exceeds the number of images in the series
    modalImg.src = seriesData[currentSeriesIndex][currentImageIndex]; // Set the src attribute of modalImg to the new image src
}

// Loop through each image and add click event listener
var images = document.querySelectorAll(".photo img"); // Select all images
images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block"; // Display the modal
        modalImg.src = this.src; // Set the src attribute of modalImg to the clicked image src
        currentImageIndex = Array.from(images).indexOf(this); // Update current image index
        currentSeriesIndex = parseInt(this.getAttribute("data-series-index")); // Get the series index of the clicked image
    });
});

// Get the close button
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none"; // Hide the modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal
    }
}

// Additional functionality to switch images when modal is open
modal.onclick = switchImage;
