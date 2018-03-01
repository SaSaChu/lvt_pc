/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2017 OA Wu Design
 * @license     http://creativecommons.org/licenses/by-nc/2.0/tw/
 */

$(function () {


  // 漢堡變換 + menu滑出
  $(document).ready(function() {
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');

      $('#r_menu_boxs').toggleClass('s_menu');
      $('#menu_back').toggleClass('s_menu_b');
    });
  });


  $('.se_menu').click(function() {
    $(this).toggleClass('s_open');
    $('.se_div_box').toggleClass('show_div');

    $('.se_menu').eq (0).click();
  });


  $('.select').click(function() {
    $('.select_open').toggleClass('select_show');

    $('.select_open').eq (0).click();
  });

  $('.banner4').each (function () {
    var $that = $(this);
    var $news_boxs = $that.find ('.news_boxs').attr ('data-n', 0);
    $that.find ('.new_tag').click (function () {
      $news_boxs.attr ('data-n', $(this).parent ().index ());
      $that.find ('.new_tag').removeClass ('in_ac');
      $(this).addClass ('in_ac');
    });
  });

  $('.banner3').each (function () {
    var $that = $(this);
    var $logos = $that.find ('.logos').attr ('data-n', 0);
    var $div = $logos.find (' > div');

    $that.find ('.logo_l').click (function () {
      var n = parseInt ($logos.attr ('data-n'), 10);
      $logos.attr ('data-n', --n < 0 ? $div.length - 1 : n);
    });
    $that.find ('.logo_r').click (function () {
      var n = parseInt ($logos.attr ('data-n'), 10);
      $logos.attr ('data-n', ++n >= $div.length ? 0 : n);
    });
  });
  $('.banner2').each (function () {
    var $that = $(this);
    var $video_boxs = $that.find ('.video_boxs').attr ('data-n', 0);
    var $div = $video_boxs.find (' > div');
    // var $video_d = $that.find ('.video_boxs').attr ('data-n', 0);

    $that.find ('.video_d').empty ().append (Array.apply (null, Array ($div.length)).map (function () {
      return $('<p />').click (function () { $video_boxs.attr ('data-n', $(this).index ()); });
    }));
  });
  $('.banner1').each (function () {
    var $that = $(this);
    var $banner_pic = $that.find ('.banner_pic').attr ('data-n', 0);
    var $div = $banner_pic.find ('> div').imgLiquid ({ verticalAlign:'center' });

    $that.find ('.b_l').click (function () {
      var n = parseInt ($banner_pic.attr ('data-n'), 10);
      $banner_pic.attr ('data-n', --n < 0 ? $div.length - 1 : n);
    });
    $that.find ('.b_r').click (function () {
      var n = parseInt ($banner_pic.attr ('data-n'), 10);
      $banner_pic.attr ('data-n', ++n >= $div.length ? 0 : n);
    });
    $that.find ('.b_d').empty ().append (Array.apply (null, Array ($div.length)).map (function () {
      return $('<p />').click (function () { $banner_pic.attr ('data-n', $(this).index ()); });
    }));
  });

  // 回到上面按鈕
  $('#top_btn').click (function () {
      $('html, body').animate ({ scrollTop: 0 }, 'slow');
  });

  // $('.pro_list.oper>div[data-pc][data-mobile]').click (function () {
  //   $(this).parents ('.ct').find ('')
  // });

  $('.pts').each (function () {
    var $that = $(this);

    if ($that.next ().hasClass ('pro_list')) {

      $that.next ().find ('> div > a').click (function () {

        $(this).addClass ('pro_ac').parent ().siblings ().find ('> a').removeClass ('pro_ac');
        $that.find ('img').attr ('src', $(this).find ('img').attr ('src'));
        console.error ('x');
        
      });
    }
  });
  $('.ct').each (function () {
    var $that = $(this);
    $that.find ('.pro_list.oper>div[data-pc][data-mobile]').click (function () {
      var $t = $that.find ('.pro_boxs .pro_pic.oper_b');
      $t.find ('.i1').attr ('src', $(this).data ('pc'));
      $t.find ('.i2').attr ('src', $(this).data ('mobile'));
    });
  });

  $('.cts').each (function () {
    var $that = $(this).attr ('data-n', 0);
    $(this).find ('.pro_tab_boxs > div > a').click (function () {
      $that.attr ('data-n', $(this).parent ().index ());
      $(this).addClass ('oper_ac').parent ().siblings ().find ('> a').removeClass ('oper_ac');
    });
    if ($that.next ().hasClass ('ct'))
      $that.next ().find ('.pro_list.oper').first ().find ('>div[data-pc][data-mobile]').first ().click ();
  });
  $('.main_tab').each (function () {
    var $that = $(this);
    $that.click (function () {
      $(this).addClass ('m_ac').siblings ().removeClass ('m_ac');
      $('.main_d2s > .main_d2').eq ($(this).index ()).addClass ('show').siblings ().removeClass ('show');
    });
  });
  $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('span').click (function () {
      $(this).toggleClass ('s');
    });
  });
  $('.itype').each (function () {
    $(this).find ('input').click (function () {
      $('.check_boxs').removeClass ('s');
      $(this).parents ('.check_boxs').addClass ('s');
    });
  });
  $('.main_d2s a[data-for]').click (function () {
    var $fb = $('#fboxs .fbox.' + $(this).data ('for'));
    if (!$fb.length) return;
    $('#fboxs').addClass ('show');
    $fb.addClass ('show');
  });
  $('#fboxs .close').click (function () {
    $('#fboxs, #fboxs .fbox').removeClass ('show');
  });


});