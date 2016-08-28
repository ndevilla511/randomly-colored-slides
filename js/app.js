
var slidesCollection = $(".slide");
var numberOfSlides = slidesCollection.length;

//create container div for slide progress dots list and dots
var $progressDotContainer = $("<div id='progressDotContainer'></div>");
var $progressDotNavList = $("<ul id='progressDotNav'></ul>");

//function that highlights the dots depending on the position of the scrollbar
function highLightDots() {
    for (var j = 0; j < numberOfSlides; j++) {
        if ($(window).scrollTop() >= $(".slide:eq(" + j + ")").offset().top) {
            $(".progressDot").removeClass("currentDot");
            $(".progressDot:eq(" + j + ")").addClass("currentDot");
        }
    }
}

//random color generator function
function getRandColor(brightness){
    //6 levels of brightness from 0 to 5, 0 being the darkest
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
    return "rgb(" + mixedrgb.join(",") + ")";
}

$progressDotContainer.append($progressDotNavList);


//create progress dot for each slide div in the slide container div and append to the progress Dot container
//also assigns random colors to each slide background
for (var i = 0; i < numberOfSlides; i++) {
    $progressDotNavList.append($("<li><div class='progressDotLink'><div class='progressDot'></div></div></li>"));
    $(".slide:eq(" + i + ")").css("background-color", getRandColor(5));
    }

console.log($progressDotContainer.children()[0]);

//append the progress dot container to the body
$('body').append($progressDotContainer);

//when any of the progress dots are clicked, the document will scroll to the slide corresponding to the dot
$(".progressDotLink").click(function(){


    //get the index of the dot you click
    var slideIndex = $(".progressDotLink").index(this);


    console.log("you are clicking dot index number " + slideIndex);

    //scrolls smoothly to the slide
    $('html, body').animate({
        //this calculates where the top of the slide that we want to go to is in relation to the page
        scrollTop: $(".slide:eq(" + slideIndex + ")").offset().top
    }, 900);
});

//when scrolling or refreshing the dots will highlight depending on which slide the scroller is currently at
$(window).scroll(function() {
    highLightDots();
});

$(window).load(function() {
    highLightDots();
});



