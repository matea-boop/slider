"use strict";

jQuery(document).ready(function ($) {
  var speed = 1000;
  $('.prev').click(function () {
    if (!$('.gallery').is(':animated') && !$('.item').is(':animated')) if (!$('.gallery1').is(':animated') && !$('.item1').is(':animated')) moveLeft();
  });
  $('.next').click(function () {
    if (!$('.gallery').is(':animated') && !$('.item').is(':animated')) if (!$('.gallery1').is(':animated') && !$('.item1').is(':animated')) moveRight();
  });

  function moveRight() {
    var lastItemWidth = $('.item:last-child').outerWidth();
    var lastItemWidth1 = $('.item1:last-child').outerWidth();
    /* first row */

    $('.item:last-child').prev().css({
      'box-shadow': '0 0 10px #808080',
      'transform': 'scale(1.2) translateY(-8%)',
      'transition': 'all 0.4s'
    });
    $('.item:last-child').css('opacity', '0');
    $('.gallery').animate({
      left: +lastItemWidth
    }, speed, function () {
      $('.item:last-child').prependTo('.gallery');
      $('.item:last-child').css({
        'box-shadow': 'none',
        'transform': 'scale(1)'
      });
      $('.item:first-child').animate({
        opacity: 1
      }, 500);
      $(this).css('left', '');
    });
    /* second row */

    $('.item1:last-child').prev().css({
      'box-shadow': '0 0 10px #808080',
      'transform': 'scale(1.2) translateY(-8%)',
      'transition': 'all 0.4s'
    });
    $('.item1:last-child').css('opacity', '0');
    $('.gallery1').animate({
      left: +lastItemWidth1
    }, speed, function () {
      $('.item1:last-child').prependTo('.gallery1');
      $('.item1:last-child').css({
        'box-shadow': 'none',
        'transform': 'scale(1)'
      });
      $('.item1:first-child').animate({
        opacity: 1
      }, 500);
      $(this).css('left', '');
    });
  }

  function moveLeft() {
    var firstItemWidth = $('.item:first-child').outerWidth();
    var firstItemWidth1 = $('.item1:first-child').outerWidth();
    /* first row */

    $('.item:last-child').css({
      'box-shadow': '0 0 10px #808080',
      'transform': 'scale(1.2) translateY(-8%)',
      'transition': 'all 0.4s'
    });
    $('.gallery').animate({
      left: -firstItemWidth
    }, speed, function () {
      $('.item:first-child').appendTo('.gallery').css('opacity', '0');
      $('.item:last-child').prev().css({
        'box-shadow': 'none',
        'transform': 'scale(1)'
      });
      $('.item:last-child').animate({
        opacity: 1
      }, 500);
      $(this).css('left', '');
    });
    /* second row */

    $('.item1:last-child').css({
      'box-shadow': '0 0 10px #808080',
      'transform': 'scale(1.2) translateY(8%)',
      'transition': 'all 0.4s'
    });
    $('.gallery1').animate({
      left: -firstItemWidth1
    }, speed, function () {
      $('.item1:first-child').appendTo('.gallery1').css('opacity', '0');
      $('.item1:last-child').prev().css({
        'box-shadow': 'none',
        'transform': 'scale(1)'
      });
      $('.item1:last-child').animate({
        opacity: 1
      }, 500);
      $(this).css('left', '');
    });
  }
});