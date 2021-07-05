$(function(){

    // função de menu mobile

    $('.disable').click(function(){
        $(this).css('display','none');
        $('.active').css('display','block');
        $('.mobile-menu-hidden').css('opacity','1');
        $('.mobile-menu-hidden').css('display','block')
    });

    $('.active').click(function(){
        $(this).css('display','none');
        $('.disable').css('display','block');
        $('.mobile-menu-hidden').css('display','none')
    })



    // funções para verificação de imput com label

    $('#login_form_phone_input').focus(function(){
        var y = -9;
        $('.unlogged-label').css({top: y + "px"});
        $('.unlogged-label').css(
            'font-size','13px'
        );
    })


    $('#login_form_phone_input').blur(function(){
        var inputText = $('#login_form_phone_input').val();
        var y = 4;
        $('.unlogged-label').css({top: y + "px"});
        $('.unlogged-label').css(
            'font-size','17px'
        );
        if(inputText != ''){
            var y = -9;
            $('.unlogged-label').css({top: y + "px"});
            $('.unlogged-label').css(
                'font-size','13px'
            );
        }else{
            $('.unlogged-label').css({top: y + "px"});
            $('.unlogged-label').css(
            'font-size','17px'
            );
        }
    })
    

})