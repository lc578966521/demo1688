$(function () {
  // 请登录滑动显示
  $(".nav-bar-l ul li:nth-child(3)").on("mouseenter", function () {
    $(this).children(".nav-content").css("display", "block");
  });
  // 请登录离开关闭
  $(".nav-bar-l ul li:nth-child(3)").on("mouseleave", function () {
    $(this).children(".nav-content").css("display", "none");
  });

  //nav-bar右边滑动显示
  $(".nav-bar-r li").on("mouseenter", function () {
    $(this).children("div:last-child").css("display", "block");
  });
  //nav-bar右边离开隐藏
  $(".nav-bar-r li").on("mouseleave", function () {
    $(this).children("div:last-child").css("display", "none");
  });
  //搜索框左边鼠标滑动进入时
  $(".search-change ul").on("mouseenter", function () {
    $(this).addClass("active").children("li").slideDown(300);
  });
  //搜索框左边鼠标滑动离开时
  $(".search-change ul").on("mouseleave", function () {
    $(this).removeClass("active").children("li").not("li.first").css("display", "none");
  });
  //搜索框左边鼠标a链接点击时设置input的placeholder
  $(".search-change ul li a").on("click", function () {
    $(".ali-search form input[type=text]").attr("placeholder", $(this).parent().attr("data-config"));
    $(this).parent().prependTo(".search-change ul");
    // $(this).prependTo(".search-change ul");
    if (!$(this).parent().hasClass("first")) {
      $(this).parent().addClass("first").css("display", "inline").siblings("li").removeClass("first").css("display", "none");
    }
  });
  //搜索框当鼠标进入input时
  $(".nav-search .ali-search form input[type=text]").on("mouseenter", function () {
    // $(this);
    $(this).focus().next("span").find("em").first().css("display", "none").next().addClass("show");
    $(this).parent().siblings("div.recommend").slideDown(300);
    setTimeout(function () {
      $(".ali-search form > span").find("em").first().css("display", "inline").next().removeClass("show");
    }, 1000);
  });
  //当鼠标离开搜索框并且离开div时
  $(".nav-search .ali-search form input[type=text]").on("mouseleave", function () {
    var offsetTop = $(this).offset().top;
    var offsetLeft = $(this).offset().left;
    var offsetRight = offsetLeft + $(this).width();
    $(document.body).mousemove(function (e) {
      // console.log(e.pageY);
      if (e.clientY < offsetTop || e.clientX < offsetLeft || e.clientX > offsetRight) {
        $(".ali-search .recommend").css("display", "none");
      }
    });
    $(".ali-search .recommend").on("mouseleave", function () {
      $(this).css("display", "none");
    });
  });
  //fixed-search进入搜索框的交互
  $(".fixed-search form input").on("mouseenter",function(){
    $(this).parent().siblings("div.recommend").slideDown(300);
  });
  //fixed-search离开搜索框的交互
  $(".fixed-search form input").on("mouseleave",function(){
    // var fixedOffsetTop = $(this).offset().top;
    // var fixedOffsetLeft = $(this).offset().left;
    // var fixedOffsetRight = fixedOffsetLeft + $(this).width();
    // $(document.body).mousemove(function (e) {
    //   // console.log(e.pageY);
    //   if (e.clientY < fixedOffsetTop ) {
    //     $(".fixed-search .ali-search .recommend").css("display", "none");
    //   }
    // });
    var fixedIndex = false;
    $(".fixed-search .ali-search .recommend").on("mouseenter", function () {
      fixedIndex = true;
      // console.log(fixedIndex);
    });
    $(".fixed-search .ali-search .recommend").on("mouseleave", function () {
      $(this).css("display", "none");
    });
    setTimeout(function(){
      if(fixedIndex == false){
        $(".fixed-search .ali-search .recommend").css("display","none");
       }
    },100);
  });
  //添加scroll滚动条事件
  $(document).on("scroll",function(){
    //控制fixed-search块显示或隐藏
    if($(window).scrollTop()>200){
      $(".fixed-search > .fixed-main").slideDown(300);
    }else{
      $(".fixed-search > .fixed-main").hide();
    }
    //控制左侧fixed颜色对应的变化
    if($(window).scrollTop()>=600){
      $(".hp_elevator div:nth-child(2)").addClass("hovered");
    }else{
      $(".hp_elevator div:nth-child(2)").removeClass("hovered");
    }
  });
  //添加左侧fixed点击跳转对应区域
  $(".hp_elevator > div:nth-child(2)").on("click",function(){
    $('html,body').animate({scrollTop:600},200);
  });
  //当qr-code滑动进入时
  $(".qr-code").on("mouseenter", function () {
    $(this).find("a").css("display", "block");
  });
  //当qr-code滑动离开时
  $(".qr-code").on("mouseleave", function () {
    $(this).find("a").css("display", "none");
  });
  //当鼠标滑入words-6时
  $(".main-nav-body ul > li.words-6").on("mouseenter", function () {
    $(this).children("div").css("display", "block");
  });
  //当鼠标离开words-6时
  $(".main-nav-body ul > li.words-6").on("mouseleave", function () {
    $(this).children("div").css("display", "none");
  });
  // main-left第一屏左边交互效果
  var mainLeftIndex = 0;
  $(".left-menu-body > .sub-nav > li").on("mouseenter", function () {
    mainLeftIndex = $(this).index();
    $(".floatLayer").css("display", "block");
    $(".floatLayer > .floatLayer-text > div:nth-child(" + ($(this).index() + 1) + ")").show().siblings("div").hide();
    $(".floatLayer > .floatLayer-img > div:nth-child(" + ($(this).index() + 1) + ")").show().siblings("div").hide();
  });
  $(".left-menu-body > .sub-nav > li").on("mouseleave", function () {
    $(".floatLayer").on("mouseenter", function () {
      $(".left-menu-body > .sub-nav > li:nth-child(" + (mainLeftIndex + 1) + ")").addClass("hovered").siblings("li").removeClass("hovered");
    });
    $(".floatLayer").on("mouseleave", function () {
      $(".left-menu-body > .sub-nav").children("li").removeClass("hovered");
      $(".floatLayer").css("display", "none");
    });
    var mainLeftX = $(".left-menu").offset().left;
    var mainTopY = $(".left-menu").offset().top;
    console.log(mainTopY)
    var mainLeftH = $(".left-menu").height();
    $(document.body).mousemove(function (e) {
      // console.log(e.pageY);
      if (e.clientX < mainLeftX || e.pageY < mainTopY + 32 || e.pageY > mainTopY + mainLeftH - 12) {
        // console.log(111);
        $(".floatLayer").css("display", "none");
      }
    });
  });
  // main-top第一屏中间上部分交互效果
  //自动部分
  continueAnimate(1);
  var mainTopIndex = 1;
  $(".center-top").on("mouseenter", function () {
    $(".center-top > a").show();
    clearInterval(mainTopObj);
  });
  $(".center-top").on("mouseleave", function () {
    $(".center-top > a").hide();
    mainTopObj = setInterval(animateStart, 2000);
  });
  var mainTopObj = setInterval(animateStart, 2000);
  function animateStart() {
    if (mainTopIndex < $(".center-top > ul.tab-content > li:last").index() + 1) {
      mainTopIndex++;
    } else {
      mainTopIndex = 1;
    }
    mainAnimate(mainTopIndex);
  }
  function mainAnimate(mainTopIndex) {
    // if(mainTopIndex < $(".center-top > ul > li:last").index()+1){
    //   mainTopIndex++;
    // }else{
    //   mainTopIndex = 1;
    // }
    continueAnimate(mainTopIndex);
    $(".center-top > ul.tab-content > li:nth-child(" + mainTopIndex + ")").siblings("li").hide(0, function () {
      $(this).find(".left-img").css("left", "-800px").siblings(".right-img").css({ "opacity": 0, "left": "-30px" });
    });
  }
  function continueAnimate(mainTopIndex) {
    $(".center-top > ul.tab-content > li:nth-child(" + mainTopIndex + ")").show().find("img.main-img").show(0, function () {
      $(".center-top > ul.tab-title > li:nth-child(" + mainTopIndex + ")").toggleClass("active").siblings("li").removeClass("active");
      $(this).siblings(".left-img").show();
      $(this).siblings("img.left-img").animate({ left: 0 }, 500, function () {
        $(this).siblings(".right-img").show();
        $(this).siblings(".right-img").animate({ opacity: 1, left: 0 }, 500);
      });
    });
  }
  // 箭头点击交互
  $(".center-top > a.prev").on("click", function () {
    if (mainTopIndex == 1) {
      mainTopIndex = $(".center-top > ul.tab-content > li:last").index() + 1;
    } else {
      mainTopIndex--;
    }
    mainAnimate(mainTopIndex);
  });
  $(".center-top > a.next").on("click", function () {
    if (mainTopIndex == $(".center-top > ul.tab-content > li:last").index() + 1) {
      mainTopIndex = 1;
    } else {
      mainTopIndex++;
    }
    mainAnimate(mainTopIndex);
  });
  // 方块手动点击效果
  $(".center-top > ul.tab-title > li").on("click", function () {
    mainTopIndex = $(this).index() + 1;
    mainAnimate(mainTopIndex);
  });
  // main-bottom第一屏中间下部分交互效果
  var mainBottomIndex = 0;
  $(".center-bottom > div > a.prev").on("click", function () {
    if (mainBottomIndex == 0) {
      return;
    } else {
      $(".slider-content > ul").animate({ left: mainBottomIndex + 760 }, 300, "linear", function () {
        mainBottomIndex += 760;
        if (mainBottomIndex == 0) {
          $(".center-bottom > div > a.prev").addClass("disabled");
        } else {
          $(".center-bottom > div > a.next").hasClass("disabled") ? $(".center-bottom > div > a.next").removeClass("disabled") : false;
        }
      });
    }
  });
  $(".center-bottom > div > a.next").on("click", function () {
    if (mainBottomIndex < -760) {
      return;
    } else {
      $(".slider-content > ul").animate({ left: mainBottomIndex - 760 }, 300, "linear", function () {
        mainBottomIndex -= 760;
        console.log(mainBottomIndex);
        if (mainBottomIndex == -1520) {
          $(".center-bottom > div > a.next").addClass("disabled");
        } else {
          $(".center-bottom > div > a.prev").hasClass("disabled") ? $(".center-bottom > div > a.prev").removeClass("disabled") : false;
        }
      });
    }
  });
  // 第一屏右边right-top 服务列表交互
  $(".servicelinks > a").on("mouseenter", function () {
    $(this).addClass("hovered").siblings("a").removeClass("hovered");
    if ($(this).children("p").text() == "手机阿里") {
      $(this).siblings(".shouji").css("display", "block").stop().animate({ opacity: 1 }, 200);
    } else if ($(this).children("p").text() == "采源宝") {
      $(this).siblings(".caiyuanbao").css("display", "block").stop().animate({ opacity: 1 }, 200);
    } else if ($(this).children("p").text() == "找货神器") {
      $(this).siblings(".zhaohuo").css("display", "block").stop().animate({ opacity: 1 }, 200);
    } else {
      $(this).siblings(".wangwang").css("display", "block").stop().animate({ opacity: 1 }, 200);
    }
  });
  $(".servicelinks > a").on("mouseleave", function () {
    $(this).removeClass("hovered").siblings("a").removeClass("hovered");
    $(this).parent().children(".otherContent").css("display", "none").stop().animate({ opacity: 0 }, 200);
  });
  $(".servicelinks .otherContent").on("mouseenter", function () {
    $(this).css("display", "block").stop().animate({ opacity: 1 }, 200);
    if ($(this).attr("class").indexOf("shouji", 0) >= 0) {
      $(".servicelinks > a:nth-child(1)").addClass("hovered").siblings("a").removeClass("hovered");
    } else if ($(this).attr("class").indexOf("caiyuanbao", 0) >= 0) {
      $(".servicelinks > a:nth-child(2)").addClass("hovered").siblings("a").removeClass("hovered");
    } else if ($(this).attr("class").indexOf("zhaohuo", 0) >= 0) {
      $(".servicelinks > a:nth-child(3)").addClass("hovered").siblings("a").removeClass("hovered");
    } else {
      $(".servicelinks > a:nth-child(4)").addClass("hovered").siblings("a").removeClass("hovered");
    }
  });
  $(".servicelinks .otherContent").on("mouseleave", function () {
    $(this).siblings("a").removeClass("hovered");
    $(this).parent().children(".otherContent").css("display", "none").stop().animate({ opacity: 0 }, 200);
  });
  $(".servicelinks > .otherContent > i").on("click", function () {
    $(this).parent().css("display", "none").animate({ opacity: 0 }, 200);
  });
  // 第一屏右边下边的选项卡
  $(".right-bottom .help-title > li").on("mouseenter", function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $(".right-bottom .help-body > li:nth-child(" + ($(this).index() + 1) + ")").addClass("active").siblings("li").removeClass("active");
  });
  //第一屏右边下边的自动滚动信息展示
  setInterval(function () {
    $(".right-bottom .hangye-message > ul").animate({ marginTop: -30 }, 300, function () {
      $(".right-bottom .hangye-message > ul").css("margin-top", "0");
      $(".right-bottom .hangye-message > ul > li:first").appendTo($(".right-bottom .hangye-message > ul"));
    });
  }, 2000);
  //右侧一顶回到顶端
  $(".ali-vbar-bottom").on("click", function () {
    $('html,body').animate({scrollTop:0},2100);
    // $(body).scrollTop = 0;
  });
});