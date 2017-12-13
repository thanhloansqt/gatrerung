;(function($){

  var animation = function() {
    var historyBG = $('.history_info').width();
    var $clickBtn = $('.history').find('.view');
    $clickBtn.each(function(index) {
      $(this).click(function(){
        if($(this).css("margin-left") == historyBG+"px" && !$(this).is(':animated')) {
          $(this).removeClass('active').animate({"margin-left": '-='+historyBG}, 'slow');
          $(this).next().animate({"margin-left": '-='+historyBG}, 'slow');
        }
        else {
          if(!$(this).is(':animated')) {
            $(this).addClass('active').animate({"margin-left": '+='+historyBG},'slow');
            $(this).next().animate({"margin-left": '+='+historyBG},'slow');
          }
        }
      });
    });
  };

  $(function(){
    animation();
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });

  });
})(jQuery);
