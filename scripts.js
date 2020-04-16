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


// $(document).ready(function() {
//   $('#contact-form').submit(function(e) {
//     var firstName    = document.getElementById('inputFirstName')
//     var lastName = document.getElementById('inputLastName');
//     var subject = document.getElementById('inputSubject');
//     var email   = document.getElementById('inputEmail');
//     var message = document.getElementById('inputMessage');

//     if(!firstName.value || !lastName.value || !subject.value || !email.value || !message.value) {
//       alert.error("Please check your entries");
//       return false;
//     }
//   });
// });











// $(document).ready(function(){
//   $('#submit').click(function() {
//     var name = $("#name").val();
//     var email =$('#email').val();

//     var data = 'name=' + name + '&email=' + email;
//     console.log(data);

//     $.ajax({
//       type: "POST",
//       url: 'php.php',
//       data: varData,
//       success: function(){
//         alert("it was a success");
//       }

//     });

//   });
// })


$(document).ready(function () {
   $('.submit').click(function(event) {
     
     var firstName = $('.firstName').val()
     var lastName = $('.lastName').val()

     var email = $('.email').val()
     var subject = $('.subject').val()
     var message = $('.message').val()
     var statusElm = $('.status')
     statusElm.empty()//Empty's function so we always start from scratch

    // form.addEventListener('submit', (e) => {
    // let message = []
    // if (name.value === '' || name.value == null) {
    //   message.push('Name is required')
    // }

    // if (message.length > 0) {
    //   e.preventDefault()
    //   errorElement.innerText = message.join(', ')
    // }
    // })

     if(email.length > 5 && email.includes('@') && email.includes('.')) {
       Console.write('test')
      } else {
        event.preventDefault()//stops browser from triggering the form submit
        statusElm.append('<div>Email is not valid</div>')//Adds the new HTML to inform user
      }

    //   if(subject.length >= 2){
    //     Console.write('test')
    //   } else {
    //     event.preventDefault()//stops browser from triggering the form submit
    //     statusElm.append('<div>Subject is not valid</div>')
    //   }

    //   if(message.length >= 10) {
    //     Console.write('test')
    //   } else {
    //     event.preventDefault()//stops browser from triggering the form submit
    //     statusElm.append('<div>Message is not valid</div>')
    //   }

    //   if(firstName.length >= true) {
    //     Console.write('test')
    //   } else {
    //     event.preventDefault()
    //     statusElm.append('<div>Name is required </div>')
    //   }

    //   if(lastName.length >= true) {
    //     Console.write('test')
    //   } else {
    //     event.preventDefault()
    //     statusElm.append('<div>Name is required </div>')
        
    //   }
       
   })
});









// Pop out Nav bar
function show() {
 var yes = document.getElementById('sidebar').classList.toggle('active');


 // IF STATMENT CHECKS TO MAKE SURE THAT THE BUTTON HAS BEEN CLICKED AND LOCKS IN NAV TO PREVENT ABLE TO SCROLL WHILE USING THE NAV
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





/* =============================================================
=========== MODAL IMAGE ZONE IN GALLERY ===================
================================================================*/

// var modal = document.getElementById("myModal");

// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");

// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
// }


// var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }