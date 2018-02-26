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