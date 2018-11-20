// document loaded first
// select .main-nav class when clicked, change elements with .main-nav class and add class is-open
$(document).ready(function() {
  $('.nav-toggle').click(function() {
      $('.main-nav').toggleClass('is-open');
      $('.hamburger').toggleClass('is-open');
  })

})
