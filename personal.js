// $(document).ready(function() {
//   $('#contact-form').submit(function(event) {
//     event.preventDefault(); // prevent the form from submitting
//     var name = $('input[name="name"]').val();
//     var email = $('input[name="email"]').val();
//     var subject = $('input[name="subject"]').val();
//     var message = $('textarea[name="message"]').val();
//     var phone = $('input[name="phone"]').val();
//     if (name == '' || email == '' || subject == '' || message == '' || phone == '') {
//       alert('Please fill all fields!');
//     } else {
//       // send the data to Google Sheets using AJAX
//       $.ajax({
//         url: 'https://script.google.com/macros/s/AKfycbyLAOi1FMvbNB28vc8fU09MfHKcseHt_ziLwLScD0iLDNRxm29ejU4rv3pu7P8G2Bcd2w/exec',
//         type: 'post',
//         data: $('#contact-form').serialize(),
//         success: function(response) {
//           alert('Form submitted successfully!');
//           $('#contact-form')[0].reset();
//         },
//         error: function(xhr, status, error) {
//           alert('Form submission failed: ' + error);
//         }
//       });
//     }
//   });
// });


function validation(){
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var message = document.getElementById('message').value
  var nameValidation = /^[A-Za-z]+$/;
  

  if(name == ''){
    alert("Enter a valid name please");
    return false
  }else if(name.length<=3){
    alert("The  name must be atleast 3 character")
    // document.getElementById('name').innerHTML = " please enter a valid name"
    return false
  } else if(name.indexOf(" ") >= 0){
    alert("Name not entered.")
    return false
  } else if (!nameValidation.test(name) ) {
    alert("Invalid characters");
    return false
  }
  else{
    document.getElementById('name').innerHTML=""
    name = true
  }

 
  if(email == ''){
    // document.getElementById('email').innerHTML = "please enter your email"
    alert("Please enter your correct email")
    return false
  }else if(email.length<10){
    // document.getElementById('email').innerHTML = " please enter a valid email"
    alert("Please enter  your correct E-mail")
    return false
  }
  else{
    document.getElementById('email').innerHTML = ""
    email = true
  }


  if(message == ''){
    // document.getElementById('message_error').innerHTML = "please enter any message"
    alert("Message must not be Blank")
    return false
  }else if(message.length<5){
    // document.getElementById('message_error').innerHTML = " please enter atleast 10 characters"
    alert("Message must be more than 10  char")
    return false
  }
  else{
    document.getElementById('message_error').innerHTML = ""
    message = true
  }
}



  $("#contact-form").submit((e)=>{
      e.preventDefault()
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbyLAOi1FMvbNB28vc8fU09MfHKcseHt_ziLwLScD0iLDNRxm29ejU4rv3pu7P8G2Bcd2w/exec",
          data:$("#contact-form").serialize(),
          method:"post",
          success:function (response){
              alert("Form submitted successfully")
              window.location.reload()
          },
          error:function (err){
              alert("Something Error")

          }
      })
    })