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
};// function sliderSize


// what, what_bracket  애니메이션
var bracketAnimate = function(){
  var $box = $('.what_bracketbox'),
      $bracket = $('.what_bracket'),
      $cont = $('.what_content'),
      $contUl = $('.what_content_ul'),
      $contItem = $('.what_item'),
      $dotItem = $('.what_dot_item'),
      $pItem = $('.what_p_item');

  var timer,
      delayTimer,
      _cuId = 0;

  var contentInterval = function(){
    var whatAnimate = function(){
      $contUl.stop().animate({
        'top':'-'+ _cuId * $('.what_item').height()
      },500,'easeInOutCubic');
      $dotItem.removeClass('active');
      $dotItem.eq(_cuId).addClass('active');
      $pItem.removeClass('active');
      $pItem.eq(_cuId).addClass('active');
    };
    $dotItem.on('click',function(){
      _cuId = $(this).index();
      whatAnimate();
      clearInterval(timer);
      clearTimeout(delayTimer);
      delayTimer = setTimeout(whatTimerset,4000);
    });
    var whatTimerset =  function(){
      timer = setInterval(function(){
        ++_cuId;
        if(_cuId >= $contItem.length){_cuId = 0;}
        whatAnimate();
      },3000);
    };
    whatTimerset();
  };

  $cont.animate({
    'width':'600px'
  },1300,'easeOutBack',contentInterval);
};//function  bracketAnimate;

// have4..

var have4Interation = function(){
  var $item = $('.have4_item'),
      $conItem = $('.have4_content_item');
      $conItemAct = $('.have4_content_item.active');
  $item.on('click',function(){
    // itemClickFunc();
    var thisIndex = $(this).index(),
        itemW = $item.outerWidth(true,true)+4;
    $item.removeClass('active').css({'opacity':'0'});
    $(this).addClass('active').css({'opacity':'1'});
    $(this).stop().animate({
       'right': thisIndex * itemW + 'px'
    });
  });
  var itemClickFunc = function(){
    var itemH = $conItemAct.height()/2;
    $conItem.css({
      'top':'50%',
      'margin-top': '-'+ itemH + 'px'
    });
    console.log(itemH);
  };
}; // function have4Interation;




// document
var resizeFunc = function(){
  sliderSize();
};
var docReady = function(){
  $(window).resize(resizeFunc);
  sliderSize();
  bracketAnimate();
  have4Interation();
};
docReady();
});//ready
})(jQuery);
