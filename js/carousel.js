// Get all the slides and the radio inputs
var slides = document.querySelectorAll('.project-list label');
var radios = document.querySelectorAll('#projects input');

// Variable to store the index of the previously checked radio input
var prevCheckedIndex = Array.from(radios).findIndex(radio => radio.checked);

// Function to update the z-index of the slides
function updateZIndex() {
    // Get the index of the currently checked radio input
    var currCheckedIndex = Array.from(radios).findIndex(radio => radio.checked);

    // Check if the carousel is rotating to the right or to the left
    var isRotatingRight = (currCheckedIndex - prevCheckedIndex + radios.length) % radios.length === 1;

    // Update the z-index of each slide
    for (var i = 0; i < slides.length; i++) {
        if (i === currCheckedIndex) {
            slides[i].style.zIndex = '50'; // Bring the checked slide to the front
        } else if (i === (currCheckedIndex + 1) % slides.length) {
            slides[i].style.zIndex = isRotatingRight ? '1' : '2'; // Update the next slide based on the direction of rotation
        } else {
            slides[i].style.zIndex = isRotatingRight ? '2' : '1'; // Update the remaining slide based on the direction of rotation
        }
    }

    // Update the index of the previously checked radio input
    prevCheckedIndex = currCheckedIndex;
}

// Add a "change" event listener to each radio input
for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', updateZIndex);
}