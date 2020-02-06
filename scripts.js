/* =============================================================
=========== ADDS BLACK WHEN SCROLLING DOWN WITH NAV ===================
================================================================*/

$(window).on('scroll', function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  }
  else{
    $('nav').removeClass('black');
  }
})

$(window).on('scroll', function() {
  $(this).css("text-shadow","2px 2px red")
})


/* =============================================================
=========== CODE FOR GALLERY ===================
================================================================*/



