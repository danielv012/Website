const flipImage = document.getElementById('flipImage2');
let isFlipped = false;

function removeFlipClass(){
    flipImage.classList.remove('flip-animation');
}

flipImage.addEventListener('click', function(){
    flipImage.classList.add('flip-animation');
    setTimeout(removeFlipClass, 1000);
});