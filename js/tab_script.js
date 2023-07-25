var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var iconsTab = document.querySelector('.icons');

function opentab(tabname){

    showIcons(tabname)
    
    for(tablink of tabLinks){
    tablink.classList.remove("active-link");
    }

    for(tabcontent of tabContents){
    tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function showIcons(tabname)
{
    if(tabname == 'experience') {
        iconsTab.style.display = 'flex';
    }
    else {
        iconsTab.style.display = 'none';
    }
}