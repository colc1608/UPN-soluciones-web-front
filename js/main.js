$(document).ready(function(){
    //slider
    if(window.location.href.indexOf('index') > -1){
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1600,
        responsive: true,
        pager:true
      });
    }

});


