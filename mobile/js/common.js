(function($){
$(document).ready(function(){
// !! code start !!

// 상단 네비게이션
var $navitem = $('.main_nav_ul .main_nav_item');
var $navbar = $('.fixnav_bar');

var navClick = function(){
  var itemW =  (100 / $(window).width()) * $navitem.width();
  var index = $(this).index();
  $navbar.css('width', itemW + '%');
  $('.main_nav_ul .main_nav_item').removeClass('select');
  $(this).addClass('select');
  if(index < 0){index = 0;}
  $navbar.animate({
    'left': index * itemW + '%'
  },300,'easeInOutCubic');
}
$navitem.on('click', navClick);

// 하단 네비게이션
var $under = $('.underbox');
var $underItem = $('.underbox .underbar_list li div');

$underItem.on('click', function(){
  console.log('123');
  $underItem.removeClass('select');
  $(this).addClass('select');
})

$('a').on('click',function(evt){
  evt.preventDefault();
})

// document
navClick();
});//ready
})(jQuery);
