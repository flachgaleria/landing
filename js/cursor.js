// Place any jQuery/helper plugins in here.

(function($){"use strict";$(window).on('load',function(){document.getElementsByTagName("body")[0].addEventListener("mousemove",function(n){t.style.left=n.clientX + "px",t.style.top=n.clientY + "px"});let t=document.getElementById("cursor"); $('.hbrable').on('mouseenter',function(){$('.cursor').addClass('hover')});$('.hbrable').on('mouseleave',function(){$('.cursor').removeClass('hover')}); });})(jQuery);