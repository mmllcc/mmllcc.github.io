
$(function() {
  var showFlug = false;
  var topBtn = $('#page-top');
  topBtn.css('bottom', '-100px');
  var showFlug = false;
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (showFlug == false) {
        showFlug = true;
        topBtn.stop().animate({'bottom' : '20px'}, 200);
      }
    } else {
      if (showFlug) {
        showFlug = false;
        topBtn.stop().animate({'bottom' : '-100px'}, 200);
      }
    }
  });
  //スクロールしてトップ
    topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
    });
});





$(function() {
    var nav = $('.nav');
    //navの位置
    var navTop = nav.offset().top;
    //スクロールするたびに実行
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        //スクロール位置がnavの位置より下だったらクラスfixedを追加
        if (winTop >= navTop) {
            nav.addClass('fixed')
        } else if (winTop <= navTop) {
            nav.removeClass('fixed')
        }
    });
});
