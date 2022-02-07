jQuery(document).ready(function ($) {

  var speed = 500;
  var sliderWidth = $('.gallery-box').outerWidth();
  var slideItem = $('.item').length;

  var sliderWidth1 = $('.gallery-box').outerWidth();
  var slideItem1 = $('.item1').length;

  console.log(slideItem);
  $('.prev').click(function () {
    moveLeft();
  });

  $('.next').click(function () {
    moveRight();
  });

  function moveRight () {
      /* prvi red */
    $('.gallery').animate({
        left: + sliderWidth / slideItem
      }, speed, function () {
        $('.item:last-child').prependTo('.gallery');
        $('.gallery').css('left', '');   
    });

      /* drugi red */
    $('.gallery1').animate({
      left: + sliderWidth1 / slideItem1
      }, speed, function () {
        $('.item1:last-child').prependTo('.gallery1');
        $('.gallery1').css('left', '');
    });
  }
  
  function moveLeft () {
      /* prvi red */
    $('.gallery').animate({
        left: - sliderWidth / slideItem
      }, speed, function () {
        $('.item:first-child').appendTo('.gallery');
        $('.gallery').css('left', '');
      });

      /* drugi red */
      $('.gallery1').animate({
        left: - sliderWidth1 / slideItem1
      }, speed, function () {
        $('.item1:first-child').appendTo('.gallery1');
        $('.gallery1').css('left', '');
      });
  }
});    


