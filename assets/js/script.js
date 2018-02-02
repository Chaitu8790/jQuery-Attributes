// Image Sliding 
$(document).ready(function() {

   var ul = $(".slider ul");
   var slide_count = ul.children().length;
   var slide_width_pc = 100.0 / slide_count;
   var slide_index = 0;

   ul.find("li").each(function(indx) {
      var left_percent = (slide_width_pc * indx) + "%";
      $(this).css({
         "left": left_percent
      });
      $(this).css({
         width: (100 / slide_count) + "%"
      });
   });

   // Listen for click of prev button
   $(".slider .prev").click(function() {
      console.log("prev button clicked");
      slide(slide_index - 1);
   });

   // Listen for click of next button
   $(".slider .next").click(function() {
      console.log("next button clicked");
      slide(slide_index + 1);
   });

   function slide(new_slide_index) {

      if (new_slide_index < 0 || new_slide_index >= slide_count) return;

      var margin_left_pc = (new_slide_index * (-100)) + "%";

      ul.animate({
         "margin-left": margin_left_pc
      }, 400, function() {

         slide_index = new_slide_index

      });

   }

   // Tabs
   $('ul.tabs li').click(function() {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#" + tab_id).addClass('current');

   });

   //LightBox Text
   $('p').addClass('center');

   // Bars and Star Ratings

   //click on stars
   $('.star').click(function() {
      $(this).addClass('starclick');
      $('.star1, .star2, .star3, .star4').removeClass('starclick');

   });
   $('.star1').click(function() {
      $('.star, .star1').addClass('starclick');
      $('.star2, .star3, .star4').removeClass('starclick');

   });
   $('.star2').click(function() {
      $('.star, .star1, .star2').addClass('starclick');
      $('.star3, .star4').removeClass('starclick');

   });
   $('.star3').click(function() {
      $('.star, .star1, .star2, .star3').addClass('starclick');
      $('.star4').removeClass('starclick');

   });
   $('.star4').click(function() {
      $('.star, .star1, .star2, .star3, .star4').addClass('starclick');

   });

   // Type Ahead Box

   var Tags = [
      "Algeria",
      "American Samoa",
      "Argentina",
      "Australia",
      "Bermuda",
      "Cayman Islands",
      "Chile",
      "Colombia",
      "Cuba",
      "Canada",
      "Denmark",
      "Egypt",
      "Finland",
      "France",
      "Greenland",
      "Haiti",
      "Hong Kong",
      "India",
      "Luxembourg",
      "Malaysia",
      "Maldives",
      "New Zealand",
      "Philippines",
      "SouthernAfrica",
      "Switzerland",
      "Ukraine",
      "Western Sahara ",

   ];

   $("#inputid").autocomplete({
      source: Tags

   });

   //For  Modal Box
   //----- OPEN
   $('[data-popup-open]').on('click', function(e) {
      var targeted_popup_class = jQuery(this).attr('data-popup-open');
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
      e.preventDefault();
   });
   //----- CLOSE
   $('[data-popup-close]').on('click', function(e) {
      var targeted_popup_class = jQuery(this).attr('data-popup-close');
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
      e.preventDefault();
   });
});