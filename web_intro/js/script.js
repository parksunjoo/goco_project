(function($){
$(document).ready(function(){
// !! code start !!

// 네비게이션
var naviInteraction = function(){
  var $item = $('.nav_item');

  // var $navSensor
  $item.on('click',function(){
    var thisindex = $(this).index();
    var scrollPosition = $($(this).attr("data-target")).offset().top -20;
    $('html, body').stop().animate({
      'scrollTop': scrollPosition
    },700);
    console.log(scrollPosition);
  });
};

var naviScroll = function(){
  var $item = $('.nav_item');
  var sct = $(window).scrollTop();
  // if(sct < 283){
  //   if(!($item.eq(0).hasClass('active'))){
  //     $item.removeClass('active');
  //     $item.eq(0).addClass('active');
  //   }
  // }else if(sct >= 283 && sct < 1190){
  //   if(!($item.eq(1).hasClass('active'))){
  //     $item.removeClass('active');
  //     $item.eq(1).addClass('active');
  //   }
  // }else if(sct >= 1190 && sct < 1920){
  //   if(!($item.eq(2).hasClass('active'))){
  //     $item.removeClass('active');
  //     $item.eq(2).addClass('active');
  //   }
  // }else if(sct >= 1920 && sct < 3010){
  //   if(!($item.eq(3).hasClass('active'))){
  //     $item.removeClass('active');
  //     $item.eq(3).addClass('active');
  //   }
  // }else if(sct >= 3010 && sct < 4657){
  //   if(!($item.eq(4).hasClass('active'))){
  //     $item.removeClass('active');
  //     $item.eq(4).addClass('active');
  //   }
  // }else if(sct >= 4657){
  //   if(!($item.eq(5).hasClass('active'))){
  //     $item.removeClass('active');
  //     $item.eq(5).addClass('active');
  //   }
  // }

  console.log(sct);
};

var sliderInteraction = function(){
  var $item = $('.slider_item'),
      $ul = $('.slider_ul'),
      $darkItem = $('.slider_dark_item'),
      $darkItemV = $('.slider_dark_item.view'),
      $darkItemH = $('.slider_dark_item.hide'),
      $darkUl = $('.slider_dark_ul'),
      $itemSensor = $('.slider_sensor_item');

  var winW = $(window).width(),
      itemW = winW / 3;

  var sliderSize = function(){
    $item.width(itemW).height(itemW);
    $darkUl.width(itemW*5);
    $darkItemV.width(itemW);
    $darkItemH.width(itemW*2);
  };
  sliderSize();

  var sliderMouseEnter = function(thisindex){
    console.log(thisindex);
    $darkUl.stop().animate({
      'right': '-' + itemW * thisindex
    })
  };

  $itemSensor.on('mouseenter', function(){
    sliderMouseEnter($(this).index());
  });

  $darkUl.stop().animate({
    'right': 0
  });
};// sliderInteraction



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
    var whatTimerset = function(){
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

  var $have4ul = $('.have4_ul ul');
      $item = $('.have4_item'),
      $cont =  $('.have4_content');
      $conItem = $('.have4_content_item'),
      $closeBtn = $('.have4_content_close');

  var itemClickFunc = function(thisindex){
    $conItem.removeClass('active');
    $conItem.eq(thisindex).addClass('active');
    var $conItemAct = $('.have4_content_item.active');
    var itemH = $conItemAct.height() / 2;
    $conItem.css({
      'top':'50%',
      'margin-top': '-'+ itemH + 'px'
    });
  };

  var clickPhase = function(){
    var thisIndex = $(this).index(),
        itemW = $item.outerWidth(true,true)+4,
        contW = $have4ul.width() - 500;
    itemClickFunc(thisIndex);
    $item.removeClass('active').css({'opacity':'0'});
    $(this).addClass('active').css({'opacity':'1'});
    $(this).stop().animate({
       'right': thisIndex * itemW + 'px'
    },500,'easeInOutCubic');
    $cont.stop().animate({
      'opacity':'1',
      'width': contW + 'px'
    },800,'easeInOutCubic');
    $conItem.fadeOut();
    $conItem.eq(thisIndex).fadeIn();
  };

  var closePhase = function(){
    $item.removeClass('active').css({'opacity':'1'});
    $item.stop().animate({
      'right':'0'
    },500,'easeInOutCubic');
    $cont.stop().animate({
      'opacity':'0',
      'width':'0'
    },300,'easeInOutCubic');
  }

  $item.on('click',clickPhase);
  $closeBtn.on('click',closePhase);

}; // function have4Interation;


console.log()

// document
var scrollFunc = function(){
  naviScroll();
}
var resizeFunc = function(){
  sliderInteraction();
};
var docReady = function(){
  $(window).resize(resizeFunc);
  $(window).scroll(scrollFunc)
  naviInteraction();
  sliderInteraction();
  bracketAnimate();
  have4Interation();
};
docReady();
});//ready
})(jQuery);
