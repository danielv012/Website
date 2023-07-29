const headshotImage = document.querySelector('#introduction .imageContainer');
let isFlipped = false;

function removeFlipClassH(){
    headshotImage.classList.remove('flip-animation');
}


headshotImage.addEventListener('click', function(){
    if(isFlipped){
        isFlipped = false;
        removeFlipClassH();
    }
    else{
        isFlipped = true;
        headshotImage.classList.add('flip-animation');
    }
});

const aboutImage = document.querySelector('#about .imageContainer');
let isFlippedB = false;

function removeFlipClassA(){
    aboutImage.classList.remove('flip-animation');
}

aboutImage.addEventListener('click', function(){
    if(isFlippedB){
        isFlippedB = false;
        removeFlipClassA();
    }
    else{
        isFlippedB = true;
        aboutImage.classList.add('flip-animation');
    }
});