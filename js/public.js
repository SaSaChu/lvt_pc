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
  $('#top_btn').click (function () {
      $('html, body').animate ({ scrollTop: 0 }, 'slow');
  });
  $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('span').click (function () {
      $(this).toggleClass ('s');
    });
  });

  // $('#top_btn').click (function () {
  //   if ($(this).index () === 0) {
      
  //     $('html, body').animate ({ scrollTop: 100 }, 'slow');
  //   } else if ($(this).index () === 1) {
  //     $('html, body').animate ({ scrollTop: '-=500px' },'slow');
  //   } else {
  //     $('html, body').animate ({ scrollTop: '+=500px' },'slow');
  //   }
  // });


});