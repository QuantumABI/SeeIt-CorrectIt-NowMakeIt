$('.card').on({
    mouseenter: function () {

        $(this).addClass('flipped');

        $('.card').removeClass('animate__animated animate__slow animate__zoomIn');
        $('.card div').removeClass('animate__zoomIn');
    },

    mouseleave: function () {
        $(this).removeClass('flipped');
    }
});


    flipped = false;

    $('.card').on('click',function(){
        console.log('initial ' + flipped);
        if(flipped == false) {
            $('.back ul li a').on('click',function(e){
                e.preventDefault();

                setTimeout(function(){
                    flipped = true;
                    console.log('timeout ' + flipped)
                },2000)
            })
        } else{$(this).find('a').unbind();}
    })

    $('.flipped .back ul li a').on('click',function(){
        $(this).unbind();
    })
else {
    $('degree-drop').on('change',function() {
        window.open(this.value)
    })
}