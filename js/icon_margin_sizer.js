function UpdateMarginTop() {
    // Get the height of the sidebar
    var titleHeight = $('.about-col-1 .sub-title').outerHeight(true);
    var pHeight = $('.about-col-1 p').outerHeight(true);
    var tabtitlesHeight = $('.about-col-1 .tab-titles').outerHeight(true);

    var totalHeight = titleHeight + pHeight + tabtitlesHeight + 10;
    
    // Apply the sidebar height as margin-top to the content
    $('.icons ul').css('margin-top', totalHeight + 'px');
}

$(document).ready(function() {
    UpdateMarginTop(); // Call it once to initialize the margin-top

    // Call the function every 500 milliseconds (adjust the interval as needed)
    setInterval(UpdateMarginTop, 20);
  });