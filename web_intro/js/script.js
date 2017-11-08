(function($){
$(document).ready(function(){
// !! code start !!


// 네비게이션
$('.nav_item > *').on('click',function(){
  console.log($(this).parent('.nav_item').index());
});


// slider크기 자동조절
var sliderSize = function(){
  var $item = $('.slider_item');
  var $ul = $('.slider_ul');
  var winW = $(window).width();
  var itemW = winW / 3;
  // var ulW = itemW * ($item.length-1);
  $item.width(itemW).height(itemW);
  // $ul.width(ulW);
};
// document

$(window).resize(sliderSize);
sliderSize();

});//ready
})(jQuery);
