(function($){
$(document).ready(function(){
// !! code start !!
var $navitem = $('.main_nav_ul .main_nav_item');
var $navbar = $('.main_nav > .fixnav_bar');

$navitem.on('click',function(){
  $('.main_nav_ul .main_nav_item').removeClass('select');
  $(this).addClass('select');
  // console.log($(this).index());
  // var thisW = $(this).find('a').width();
  // console.log(thisW);
  // var minusW = ($('.main_nav_item').width()) - thisW;
  $navbar.animate({
    // 'width': thisW,
    'left': ($(this).index() * 12.5) + '%'
  },300,'easeInOutCubic');
});

$('a').on('click',function(evt){
  evt.preventDefault();
})
// document
});//ready
})(jQuery);
