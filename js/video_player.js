// Get the video element
const video = document.getElementById('project1-video');

// Get the second project element
const project = document.getElementById('slide1');

// Add event listeners for mouseover and mouseout
project.addEventListener('mouseover', () => {
  // Play the video when mouse is over the project element
  video.play();
});

project.addEventListener('mouseout', () => {
  // Pause the video when mouse is out of the project element
  video.pause();
});

// Get the video element
const video2 = document.getElementById('project2-video');

// Get the second project element
const project2 = document.getElementById('slide2');

// Add event listeners for mouseover and mouseout
project2.addEventListener('mouseover', () => {
  // Play the video when mouse is over the project element
  video2.play();
});

project2.addEventListener('mouseout', () => {
  // Pause the video when mouse is out of the project element
  video2.pause();
});