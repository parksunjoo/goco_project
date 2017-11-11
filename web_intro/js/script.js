(function($){
$(document).ready(function(){
// !! code start !!


// 네비게이션
$('.nav_item > *').on('click',function(){
  console.log($(this).parent('.nav_item').index());
});




// section slider크기 자동조절
var sliderSize = function(){
  var $item = $('.slider_item'),
      $ul = $('.slider_ul'),
      winW = $(window).width(),
      itemW = winW / 3;

  // var ulW = itemW * ($item.length-1);
  $item.width(itemW).height(itemW);
  // $ul.width(ulW);
};




// what, what_bracket 등등
var bracketAnimate = function(){
  var $box = $('.what_bracketbox'),
      $bracket = $('.what_bracket'),
      $cont = $('.what_content'),
      $contUl = $('.what_content_ul');
  var timer;
  var _cuId = 0;
  var contentInterval = function(){
    timer = setInterval(function(){
      ++_cuId;
      if(_cuId > $contUl.length){
        _cuId = 0 ;
      }
      console.log(_cuId);
    },500);
  }
  $cont.animate({
    'width':'600px'
  },1300,'easeOutBack',contentInterval);
  // console.log('sad');
}



// document
var docReady = function(){
  $(window).resize(sliderSize);
  sliderSize();
  bracketAnimate();
};
docReady();
});//ready
})(jQuery);
