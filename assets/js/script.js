jQuery(document).ready(function($){

  $('.opne_buttom').click(function (e) { 
    e.preventDefault();
    $('.nav_link').addClass('opne_menu');
    $('.over_lay').show();
  });
  $('.time_icon, .over_lay').click(function (e) { 
    e.preventDefault();
    $('.nav_link').removeClass('opne_menu');
    $('.over_lay').hide();
  });

  
});