$(document).ready(function () {
    $('.aside_open').on('click', function () {
        const wrapHei = $('#wrap').outerHeight();
        $('html, body').css({height: wrapHei, overflow: 'hidden'});

        $(this).next().stop().fadeIn('fast');
        $('.aside_wrap').css('visibility', 'visible');

        $('.aside_close').on('click', function () {
            $('html, body').removeAttr('style');
            $(this).parent().parent().prev().stop().fadeOut('fast');
            $('.aside_wrap').css('visibility', 'hidden');
        });
        $('#dim2').on('click', function () {
            $('.aside_close').trigger('click');
        });
    });


    // $('.btn_green').click(function (){
    //         $(this).css({'background-color' : '#9AC31C', 'color' : '#FFFFFF'});
    // });
    
    $('.btn_close, .bd_close').click(function () {
        $(this).parent('.file_img').css('display', 'none');
        $(this).parent('.area_wrap').css({'display':'none'});
        $(this).parent('li').css('display', 'none');
    });

    $('.top_btn').on('click', function () {
        $('html, body').stop().animate({scrollTop: 0});
		return false;
	});

    var fileTarget = $('#file'); 
    fileTarget.on('change', function(){ // 값이 변경되면
        var cur=$('.form_wrap input[type=file]').val();
        $(".upload-name").val(cur);
    }); 


    // 체크박스
    $( '#allow_all' ).click( function() {
        var checked = $(this).is(':checked');
        if(checked){
            $(this).parent().next().find('input').prop('checked', true);
            $('.btn_green').css({'background-color' : '#9AC31C', 'color' : '#FFFFFF'});
        } else {
            $(this).parent().next().find('input').prop('checked', false);
            $('.btn_green').removeAttr('style');
        }
    } );

    $('.ckbox').click( function() {
        var checked = $(this).is(':checked');
        if (!checked) {
            $('#allow_all').prop('checked', false);
            $('.btn_green').removeAttr('style');
        } else {
            var is_checked = true;
            $('.ckbox').each(function(){
                is_checked = is_checked && $(this).is(':checked');
            });
            $('#allow_all').prop('checked', is_checked);
        }
        var must = $('.must');
        if(must.length == must.filter(':checked').length){
            $('.btn_green').css({'background-color' : '#9AC31C', 'color' : '#FFFFFF'});
        }else{
            $('.btn_green').removeAttr('style');
        }
    });


 
    //input 입력시 버튼 show
    $('.btn_close2').hide();
    $('input').on('input', function () {
        $(this).siblings('.btn_close2').show();
    });
    $('.btn_close2').click(function (){
        $(this).hide();
    });
    //닫기버튼클릭시 입력한 글자제거
    $('.btn_close2').click(function () {
        var inputtext = $(this).siblings('input').val("");
        $(inputtext).text("");
    });


    //count기능
    $('.count').hide();
    $('#modal1 button, #modal5 button').click(function () {
        $('.count').show();
    });



    // $('input').on('input', function () {
    //     if($('input').val() == ''){
    //         $(this).siblings('.wid97').removeAttr('style');
    //         $('.btn_green').removeAttr('style');
    //     }else{
    //         $(this).siblings('.wid97').css({'background-color' : '#9AC31C', 'color' : '#FFFFFF'});
    //         $('.btn_green').css({'background-color' : '#9AC31C', 'color' : '#FFFFFF'});
    //     }
    // });
    // $('textarea').on('input', function () {
    //     if($('textarea').val() == ''){
    //         $('.btn_green').removeAttr('style');
    //     }else{
    //         $('.btn_green').css({'background-color' : '#9AC31C', 'color' : '#FFFFFF'});
    //     }
    // });


    //하트 
    $(document).on('click', '.loves', function () {
        $(this).toggleClass('on');
    });


    $('.filter_wrap ul li').click(function () {
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on').siblings().removeClass('on');
        }
    });
    $('.filter_wrap2 ul li').click(function () {
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on');
        }
    });

    $('.filter_wrap2 ul li').click(function () {
        
        if($('.filter_wrap2 ul li').hasClass('on')){
            $(this).parent().parent().next().css('background-color', '#9AC31C');
        }else{
            $(this).parent().parent().next().removeAttr('style');
        }
    });




    $('.select_btn').on('click', function () {
        $(this).parent().addClass('on');
        $('html, body').css('overflow', 'hidden');
        $(this).next().next().stop().fadeIn('fast');
        $('.select_wrap').css('visibility', 'visible');

        var $close = $('.select_wrap ul li');
        $close.click(function () {
            $('.select').removeClass('on');
            $('html, body').removeAttr('style');
            $(this).parent().parent().prev().stop().fadeOut('fast');
            $('.select_wrap').css('visibility', 'hidden');

            $text = $(this).text();
            $('.select_btn').text($text);
        });
        $('#dim_op15').on('click', function () {
            $('html, body').removeAttr('style');
            $(this).fadeOut('fast');
            $('.select_wrap').css('visibility', 'hidden');

            $text2 = $('.select_btn').text();
            $('.select_btn').text($text2);
            $(this).parent().removeClass('on');
        });
        

        $('.select_wrap ul li').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
        });
    });


    $('.mypet > p').on('click', function () {  //2)뎁스2 ul도 있는 경우
        $('.profile_bottom').toggleClass('on');
            if ($(this).hasClass('on')) { //2-1) 현재 ul이 열려진 경우
              $(this).removeClass('on').next('ul').stop().animate({maxHeight: 0}, function () {
                $(this).css({visibility: 'hidden'});
              });
            } else { //2-2) 현재 ul이 닫겨진 경우
              $(this).next('ul').css({visibility: 'visible'}).stop().animate({maxHeight: 1000}).prev().addClass('on');
            }
        return false;    
    });


    $('.review_detail .writer_cnt2').click(function () {
        if($(this).hasClass('on')){
            $(this).removeClass('on').next('.review_box').stop().animate({maxHeight: 0}, function () {
                $(this).css({visibility: 'hidden', margin: '0px'});
            });
        } else {
            $(this).next('.review_box').css({visibility: 'visible'}).stop().animate({maxHeight: 1000}, function () {
                $(this).prev().addClass('on');
            });
        }
    });
    $('.writer_cnt2').click(function () {
        if($(this).hasClass('on')){
            $(this).removeClass('on').next('.walk_wrap').stop().animate({maxHeight: 0}, function () {
                $(this).css({visibility: 'hidden', margin: '0px'});
            });
        } else {
            $(this).next('.walk_wrap').css('visibility', 'visible').stop().animate({maxHeight: 1000}, function () {
                $(this).prev().addClass('on');
            });
        }
    });


  

    setDateBox();
    function setDateBox(){
        var dt = new Date();
        var year = "";
        var com_year = dt.getFullYear();
        // 발행 뿌려주기
        $(".year").append("<option value=''>년도</option>");
        // 올해 기준으로 -1년부터 +5년을 보여준다.
        for(var y = (com_year-50); y <= (com_year+50); y++){
            $("#year").append("<option value='"+ y +"'>"+ y +"</option>");
        }
        // 월 뿌려주기(1월부터 12월)
        var month;
        $(".month").append("<option value=''>월</option>");
        for(var i = 1; i <= 12; i++){
            $("#month").append("<option value='"+ i +"'>"+ i + "</option>");
        }
        // 일 뿌려주기(1일부터 31일)
        var day;
        $(".day").append("<option value=''>일</option>");
         for (var i = 1; i <= 31; i++) {
            $("#day").append("<option value='" + i + "'>" + i +  "</option>");
        }
    }


    
  
    

});