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
});


/* =============================================================
=========== Contact form code ===================
================================================================*/

$(document).ready(function(){
  $('#submit').click(function() {
    var name = $("#name").val();
    var email =$('#email').val();

    var data = 'name=' + name + '&email=' + email;
    console.log(data);

    $.ajax({
      type: "POST",
      url: 'php.php',
      data: varData,
      success: function(){
        alert("it was a success");
      }

    });

  });
})


$(document).ready(function () {
   $('.submit').click(function(event) {
     
     
     var email = $('.email').val()
     var subject = $('.subject').val()
     var message = $('.message').val()
     var statusElm = $('.status')
     statusElm.empty()//Empty's function so we always start from scratch

     if(email.length > 5 && email.includes('@') && email.includes('.')) {
       statusElm.append('<div>Email is valid</div>')//Adds the new HTML to inform user
      } else {
        event.preventDefault()//stops browser from triggering the form submit
        statusElm.append('<di>Email is not valid</div>')//Adds the new HTML to inform user
      }

      if(subject.length >= 2){
        statusElm.append('<div>Subject is valid</div>')
      } else {
        event.preventDefault()//stops browser from triggering the form submit
        statusElm.append('<div>Subject is not valid</div>')
      }

      if(message.length >= 10) {
        statusElm.append('<div>Subject is valid</div>')
      } else {
        event.preventDefault()//stops browser from triggering the form submit
        statusElm.append('<div>Subject is not valid</div>')
      }
   })
})






// Pop out Nav bar
function show() {
 var yes = document.getElementById('sidebar').classList.toggle('active');


 // IF STATMENT CHECKS TO MAKE SURE THAT THE BUTTON HAS BEEEN CLICKED AND LOCKS IN NAV TO PREVENT ABLE TO SCROLL WHILE USING THE NAV
 if( yes === true ){
   console.log('yes');
  var element = document.getElementById('noMove');
   element.classList.add('stop');
 } else{
   console.log('Off');
   var element = document.getElementById('noMove');
   element.classList.toggle('stop');
 }
}


//THIS WAS CREATED BECAUSE THE NAV DOES NOT TOGGLE OFF AFTER BEING CLICKED
function hideNav() {
  var yes = document.getElementById('sidebar').classList.toggle('active');

  if( yes === true ){
    console.log('yes');
   var element = document.getElementById('noMove');
    element.classList.add('stop');
  } else{
    console.log('Off');
    var element = document.getElementById('noMove');
    element.classList.toggle('stop');
}
}
