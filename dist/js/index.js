function play(){$btn.eq(iNow%len).addClass("act").siblings().removeClass("act"),$List.stop().animate({left:-iWidth*iNow+"px"})}function autoPlay(){++iNow==2*len&&(iNow=len,$List.css({left:-iWidth*(len-1)})),play()}$(".nav-u li").mouseenter(function(){$(".toTwonav").find("div").eq($(".nav-u li").index(this)).show().siblings("div").hide()}),$(".nav-u li").mouseout(function(){$(".toTwonav").find("div").css({display:"none"})});var $btn=$(".small_pic").find("li"),$List=$(".list"),iWidth=$(".list").find("li").width(),$prevBtn=$(".prev"),$nextBtn=$(".next"),iNow=0,timer=null,len=$(".list").find("li").length;$List.html($List.html()+$List.html()),$List.width(2*$List.width()),$btn.click(function(){iNow=$(this).index(),play()}),$prevBtn.click(function(){--iNow<0&&(iNow=len-1),play()}),$nextBtn.click(function(){++iNow==2*len&&(iNow=len,$List.css({left:-iWidth*(len-1)})),play()}),timer=setInterval(function(){autoPlay()},5e3),$(".play").hover(function(){clearInterval(timer)},function(){timer=setInterval(function(){autoPlay()},5e3)}),console.log(iWidth);