$(document).ready(function(){
    $('.clicks').on('click', function() {
        $('#box').toggleClass('show');
    });
    $('.submission').on('click',function(){
        $('#box').removeClass('show')
    });

    $('.cross').on('click',function(){
        $('#box').removeClass('show')
    });

});
