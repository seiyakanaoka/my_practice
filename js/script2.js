$(function(){
  $('.menu-trigger').on('click',function(event){
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.PreventDefault();
  });
});

$(".theTarget").skippr({
  transition:'fade',
  speed:1000,
  easing:'easeOutQuart',
  navType:'block',
  childrenElementType:'div',
  arrows:false,
  autoPlay:true,
  autoPlayDuration:5000,
  keyboardOnAlways:true,
  hidePrevious:false,
});

$(function(){
  $(window).scroll(function(){
    $(".scroll-block").each(function(){
      var scroll = $(window).scrollTop(); //画面トップからのスクロール量
      var blockPosition = $(this).offset().top; //画面トップから見たブロックのある位置
      var windowHeight = $(window).height(); //ウィンドウの高さ
      if (scroll > blockPosition - windowHeight + 300){
        $(this).addClass("blockIn");
      }
    });
  });
});

$('main').ripples({
  dropRadius: 20, //波紋の大きさ
  resolution: 500, //波紋の広がり速度
  perturbance: 0.5, //波紋のブレ
});