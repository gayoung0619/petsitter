$(document).ready(function() {
 $('.md_open_btn, .toggle_btn1, .toggle_btn2').on('click', function () {
    const $openBtn = $(this);
    const $mdCnt = $($(this).attr('data-href'));
    const $closeBtn = $mdCnt.find('.md_close_btn');

    const wrapHei = $('#wrap').outerHeight();
    $('html, body').css({height: wrapHei, overflow: 'hidden'});

    $mdCnt.siblings().attr({'aria-hidden': true, inert: ''});

    $mdCnt.before('<div id="dim"></div>');
    const $dim = $('#dim');
    $dim.stop().fadeIn().next().css('visibility', 'visible').find('[data-link="first"]').focus();


    $closeBtn.on('click', function () {
      // 1) html, body에게 준 높이를 제거 -> removeAttr('style')
      $('html, body').removeAttr('style');

      
      // 2) dim 보이지 않게 숨기고 -> 삭제
      $dim.stop().fadeOut(function () {
        $(this).remove();
      });
      
      // 3-1) 열려진 모달도 숨기기
      // 3-2) 열려진 모달을 제외한 나머지에 스크린리더 접근 허용: aria-hidden, inert을 제거
      $mdCnt.css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');

      // 4) 모달열기 버튼에 포커스 강제 이동
      $openBtn.focus();
   });

    //  esc , #dim 클릭시 닫기버튼과 동일하게 처리
    $dim.on('click', function () {
      $closeBtn.trigger('click');
    });
 });



//  약관동의의 확인 클릭시 필수사항 자동체크
$('#modal .md_close_btn').click(function () {
  var is_checked = true;
  $('.must').prop('checked', is_checked);
});

// other_num 클릭시 #modal8 처리
$('.other_num').click(function () {
  $('#modal2').css('visibility', 'hidden');
  $('#modal8').css('visibility', 'visible');

  $('.md_close_btn').on('click', function () {
    $('html, body').removeAttr('style');

    $('#dim').stop().fadeOut(function () {
      $(this).remove();
    });

    $('#modal8').css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');

 });

});





$('.select_date .start_date').click(function () {
    $(this).parent().siblings('.select_dim').css('display', 'block');

    $('.modal_start').css('visibility', 'visible');
});
$('.select_date .end_date').click(function () {
    $(this).parent().siblings('.select_dim').css('display', 'block');

    $('.modal_end').css('visibility', 'visible');
});

let now = new Date();      
const year = now.getFullYear();
const month = now.getMonth()+1;
const date = now.getDate();
console.log(year, month, date);
$('.year .modal_txt').text(year);
$('.month .modal_txt').text(month);
$('.day .modal_txt').text(date);

$('.modal_select').children('.btn_wrap').children('button:first-of-type').click(function () {
  $('.modal_select').css('visibility', 'hidden');
  $('.select_dim').css('display', 'none');
});
$('.select_dim').click(function () {
  $('.modal_select').css('visibility','hidden');
  $('.select_dim').css('display', 'none');
  $('.year .modal_txt').text(year);
  $('.month .modal_txt').text(month);
  $('.day .modal_txt').text(date);
  $('.modal_selected ').removeClass('active');
  $('.start_date').text('시작일 선택').removeClass('on');
  $('.end_date').text('종료일 선택').removeClass('on');
  $('.search').removeClass('on');

});

$('.modal_selectbox').mouseenter(function () {
  $(this).children('.modal_selected').addClass('on');
});
$('.modal_selectbox').mouseleave(function () {
  $(this).children('.modal_selected').removeClass('on');
});

$('.modal_start .btn_wrap button:nth-of-type(2)').click(function () {
  $('.modal_select').css('visibility','hidden');
  $('.select_dim').css('display', 'none');
  const year = $('.modal_start .year').children('.modal_txt').text();
  const month = $('.modal_start .month').children('.modal_txt').text();
  const day = $('.modal_start .day').children('.modal_txt').text();
  $('.start_date').text('시작일 : ' + year + '.' + month + '.' + day).addClass('on');
  
  $('.modal_end .btn_wrap button:nth-of-type(2)').click(function () {
    $('.modal_select').css('visibility','hidden');
    $('.select_dim').css('display', 'none');
    const year = $('.modal_end .year').children('.modal_txt').text();
    const month = $('.modal_end .month').children('.modal_txt').text();
    const day = $('.modal_end .day').children('.modal_txt').text();
    $('.end_date').text('종료일 : ' + year + '.' + month + '.' + day).addClass('on');
    $('.search').addClass('on');
  });

});

$('.modal_start .btn_wrap button:nth-of-type(1)').click(function () {
  $('.start_date').text('시작일 선택').removeClass('on');
  $('.end_date').text('종료일 선택').removeClass('on');
  $('.modal_selected').removeClass('active');
  $('.year .modal_txt').text(year);
  $('.month .modal_txt').text(month);
  $('.day .modal_txt').text(date);
});

$('.modal_end .btn_wrap button:nth-of-type(1)').click(function () {
  $('.modal_selected').removeClass('active');
  $('.end_date').text('종료일 선택').removeClass('on');
  $('.start_date').text('시작일 선택').removeClass('on');
  $('.start_date').removeClass('on');
  $('.search').removeClass('on');
});



});