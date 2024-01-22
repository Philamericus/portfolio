var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(function(t){t(".topmenu-inner").affix(),t('[data-toggle="popover"]').popover(),t("a.formpop").click(function(e){e.preventDefault();var o=t(this).attr("href");t(o).html();t.featherlight(t(o),{variant:"solutionDemoFormPop",closeIcon:'<img src="https://web.archive.org/web/20211005104556/https://www.unboundtech.com/wp-content/uploads/2020/04/form-closer-01.svg" alt="close">'})}),t(".btn-vid").click(function(e){e.preventDefault();var o=t(this).attr("href");if(o&&o.includes("youtu")){o=o.split("v=");var a=o.slice(-1)[0],i="https://web.archive.org/web/20211005104556/https://www.youtube.com/embed/"+a+"?rel=0"}else if(o)i=o;t.featherlight('<div class="youtube-vidwrap"><iframe width="100%" src="'+i+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>',{variant:"vidLightbox",closeIcon:'<img src="https://web.archive.org/web/20211005104556/https://www.unboundtech.com/wp-content/uploads/2020/04/form-closer-01.svg" alt="close">'})}),t(".rmScBtn").click(function(){var e=t(this).parents(".parentSection").attr("id");if(t(this).parents(".readmore-block").find(".rmtxt").slideToggle("fast"),t(this).parents(".readmore-block").find(".clbl").fadeToggle("fast"),e)return t("html, body").animate({scrollTop:t("#"+e).offset().top-200},1e3),!1}),t("a.scrollto, li.scrollto a").click(function(){var e=t(this).attr("href");return t("html, body").animate({scrollTop:t(e).offset().top-200},1e3),!1}),t(".btn.scrollto").click(function(){var e=t(this).attr("data-target");return t("html, body").animate({scrollTop:t(e).offset().top-200},1e3),!1}),t(".floating-labels .flabel .form-control").focus(function(){t(this).parents(".form-group").addClass("active")}),t(".floating-labels .flabel input").blur(function(){t(this).length<1&&t(this).parents(".form-group").removeClass("active")}),t(window).on("resize scroll",function(){t(".content-marker").each(function(e,o){if(t(this).isInViewport()){var a=100;t(this).children(".marker").each(function(){function e(){o.addClass("active").animate({opacity:1},2e3)}console.log("ran each");var o=t(this);setTimeout(e,a),a+=300})}})}),t(".youtube-lightbox").click(function(e){e.preventDefault();var o=t(this).attr("href");t.featherlight('<div class="youtube-vidwrap"><iframe width="100%" src="'+o+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>',{variant:"vidLightbox",closeIcon:'<img src="https://web.archive.org/web/20211005104556/https://www.unboundtech.com/wp-content/uploads/2020/05/close-video-lightbox.svg" alt="close">'})}),t(".vimeo-lightbox").click(function(e){e.preventDefault();var o=t(this).attr("href");t.featherlight('<div class="vimeo-vidwrap"><iframe src="'+o+'?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://web.archive.org/web/20211005104556/https://player.vimeo.com/api/player.js"></script>',{variant:"vidLightbox vimdeoLightbox",closeIcon:'<img src="https://web.archive.org/web/20211005104556/https://www.unboundtech.com/wp-content/uploads/2020/05/close-video-lightbox.svg" alt="close">'})}),t("body").hasClass("mobile")&&t(".footermenu .widgettitle").click(function(){var e=t(this).parents(".footermenu");t(e).toggleClass("active"),t(" > div",e).slideToggle("fast")})}),jQuery(document).ready(function(t){t(".floating-labels .flabel input").each(function(){t(this).length<1&&t(this).parents(".form-group").addClass("active")}),t(".search-topmenu").on("click",function(e){e.preventDefault(),t("#globalSearchModal").modal()}),t("#globalSearchModal").on("shown.bs.modal",function(){t(".flabels .form-control").focus(function(){t(this).parents(".form-group").addClass("active")}),t(".flabels .form-control").blur(function(){t(this).length<1&&t(this).parents(".form-group").removeClass("active")})}),t(".subwidget_current_page").each(function(){t(this).parents("li.mega-menu-item-has-children").addClass("mega-current-menu-ancestor")}),t(".video-container").length>0&&t(".video-container").each(function(){var e=t("iframe",this).width(),o=Math.round(e/16*9+35);t("iframe",this).animate({height:o},500)}),t(".free-text iframe").length>0&&t(".free-text iframe").each(function(){var e=t(this).width(),o=Math.round(e/16*9+35);t(this).animate({height:o},500)})});

}
/*
     FILE ARCHIVED ON 10:45:56 Oct 05, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:51:02 Jul 03, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 82.825
  exclusion.robots: 0.198
  exclusion.robots.policy: 0.177
  cdx.remote: 0.138
  esindex: 0.017
  LoadShardBlock: 46.195 (3)
  PetaboxLoader3.datanode: 91.232 (6)
  load_resource: 374.675 (2)
  PetaboxLoader3.resolve: 303.816 (2)
  loaddict: 28.57
*/