(function($){
$(document).ready(function(){
// !! code start !!

// 네비게이션
var naviInteraction = function(){
  var $item = $('.nav_item');

  $item.on('click',function(){
    // var thisindex = $(this).index();
    var scrollPosition = $($(this).attr("data-target")).offset().top-20;
    $('html, body').stop().animate({
      'scrollTop': scrollPosition
    },700,'easeOutCubic');
  });
};

var naviScroll = function(){

  var sectionArr = [
    $('.section_slider'),
    $('.section_what'),
    $('.section_have4'),
    $('.section_howto'),
    $('.section_video'),
    $('.section_footer')
  ];

  var $item = $('.nav_item');
  var sct = $(window).scrollTop();

  for(var i=0; i<sectionArr.length;++i){
    var offTop = sectionArr[i].offset().top-22;
    if(sct >= offTop){
      $item.removeClass('active');
      $item.eq(i).addClass('active');
      // if(sct >= sectionArr[0].offset().top){
      //   bracketInteraction();
      // }
    }
  }
};

var sliderInteraction = function(){
  var $item = $('.slider_item'),
      $ul = $('.slider_ul'),
      $darkItem = $('.slider_dark_item'),
      $darkItemV = $('.slider_dark_item.view'),
      $darkItemH = $('.slider_dark_item.hide'),
      $darkUl = $('.slider_dark_ul'),
      $itemSensor = $('.slider_sensor_item'),
      $itemSensorUl = $('.slider_sensor_ul');

  var winW = $(window).width(),
      itemW = winW / 3;

  var sliderSize = function(){
    $item.width(itemW).height(itemW);
    $darkUl.width(itemW*5);
    $darkItemV.width(itemW);
    $darkItemH.width(itemW*2);
  };
  sliderSize();

  var sliderMouseEnter = function(sti){
    // console.log(sti);
    $darkUl.stop().animate({
      'right': '-' + itemW * sti
    },500,'easeOutCubic');
    // $item.css({
    //   'filter': 'blur(5px)'
    // });
    // $item.eq(sti).css({
    //   'filter': 'blur(0px)'
    // })
  };
  // var sliderMouseOut = function(sti){
  //   $item.css({
  //     'filter': 'blur(0px)'
  //   });
  // };


  $itemSensor.on('mouseenter', function(){
    sliderMouseEnter($(this).index());
  });
  // .on('mouseout', function(){
  //   sliderMouseOut($(this).index());
  // });

  $darkUl.stop().animate({'right': 0});
};// sliderInteraction


// what, what_bracket
var bracketInteraction = function(){
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
        if(_cuId >= $contItem.length){
          _cuId = 0;
        }
        whatAnimate();
        // console.log(_cuId);
      },3000);
    };
    whatTimerset();
  };

  $cont.animate({
    'width':'600px'
  },1300,'easeOutBack',contentInterval);
};//function  bracketInteraction;

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

var howtoInteraction = function(){
  var $monitor = $('.howto_monitor_box'),
      $ul = $('.howto_monitor_view_ul'),
      $item = $('.howto_monitor_view_item');
      $arrows = $('.howto_arrowbox > a'),
      $prev = $('.arrow_prev'),
      $next = $('.arrow_next');

  var _cuId = 0;

  var monitorW = $monitor.width(),
      monitorH = monitorW*0.65;

  $monitor.height(monitorH);
  $item.width(monitorW);
  $ul.width(monitorW * $item.length);
  $item.height(monitorH - 72);
  $arrows.css({
    'top': (monitorH /2) -22 + 'px'
  });

  $arrows.on('click', function(evt){
    evt.preventDefault();
    if($(this).hasClass('arrow_next')){
      $prev.fadeIn();
      if(_cuId < $item.length-1){
        ++_cuId;
        if(_cuId == $item.length -1){
          $next.fadeOut();
        }
      }
    }else if($(this).hasClass('arrow_prev')){
      $next.fadeIn();
      if(_cuId > 0){
        --_cuId;
        if(_cuId == 0){
          $prev.fadeOut();
        }
      }
    };
    $ul.stop().animate({
      'left' : _cuId * monitorW * -1
    },500,'easeInOutCubic');
  });
  $ul.stop().animate({'left' : 0},500,'easeInCubic');
};// function howtoInteraction

var videoScroll = function(){
  var $bg = $('.section_video .video_bg');

  var viewPosition = $('.section_howto').offset().top-20,
      nowScroll = $(window).scrollTop();
  if(viewPosition < nowScroll){
    $bg.css({'opacity':'1'});
  }else{
    $bg.css({'opacity':'0'});
  }
};
// console.log()

// document
var scrollFunc = function(){
  naviScroll();
  videoScroll();
}
var resizeFunc = function(){
  sliderInteraction();
  howtoInteraction();
};
var docReady = function(){
  $(window).resize(resizeFunc);
  $(window).scroll(scrollFunc)
  naviInteraction();
  sliderInteraction();
  bracketInteraction();
  have4Interation();
  howtoInteraction();
  videoScroll();
};
docReady();
});//ready
})(jQuery);
