/*------------------------------------------------------------------
* Project:        Realvilla - Modern Real Estate & Property HTML Templates
* Author:         HtmlDesignTemplates
* URL:            https://themeforest.net/user/htmldesigntemplates
* Created:        03/05/2025
-------------------------------------------------------------------*/

(function ($) {
  "use strict";

  $(document).ready(function () {

      /* SlickNav Responsive Menu */
        $('#responsive-menu').slicknav({
            duration: 500,
            easingOpen: 'easeInExpo',
            easingClose: 'easeOutExpo',
            closedSymbol: '<i class="arrow-indicator fa fa-angle-down"></i>',
            openedSymbol: '<i class="arrow-indicator fa fa-angle-up"></i>',
            prependTo: '#slicknav-mobile',
            allowParentLinks: true,
            label: ""
        });


      /* Sticky Header */
        $(document).ready(() => {
          let $headerMenu = $('.header-nav-menu');
      
          $(window).on('scroll', function () {
              let curScroll = $(window).scrollTop();
      
              if (curScroll > 130) {
                  $headerMenu.addClass('navbar-sticky-in');
              } else {
                  $headerMenu.removeClass('navbar-sticky-in');
              }
          });
      });
    

      /* Dropdown Menu */
        var selected = $('#navbar li');
        selected.on("mouseenter", function () {
            $(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
        }).on("mouseleave", function () {
            $(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
        });

        /* Arrow Indicator for Submenus */
        if ($(window).width() > 992) {
            $(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
        }

      
      /* Back-to-top js Start */
        $(document).ready(() => {
          $('#back-to-top').hide(); // Hide button initially
      
          $(window).on('scroll', () => {
              if ($(window).scrollTop() > 500) {
                  $('#back-to-top').fadeIn(200);
              } else {
                  $('#back-to-top').fadeOut(200);
              }
          });
      
          $(document).on('click', '#back-to-top, .back-to-top', () => {
              $('html, body').animate({
                  scrollTop: 0
              }, 500);
              return false;
          });
        });


      /*//For Spinning letter animation start//*/
        const listItems = document.querySelectorAll('.spin');
        listItems.forEach((item, index) => {
          item.style.animationDelay = `${index * 0.1}s`;
        });
        
})})(jQuery);

