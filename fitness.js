$(document).ready(function(){
    $("#log").click(function(){
      $(".container").fadeIn();
       });
  });
  
  $(document).ready(function(){
    $(".ico").click(function(){
      $(".container").fadeOut();
       });
  });
  var pas=$("#psw")

// function checkpasswordLength(){
// if(pas.val().length<6){
//     $("#error").fadeIn().text("error you need to put 6 charachter")
// }
// else{$("#error").fadeOut()}

// }
// $(document).ready(function(){
//     $(".sub").click(function(event){
    
//     if(pas.val().length<6){
//     $("#error").show()
//     event.preventDefault()
//     }
//     else { 
//         $("#error").hide()
//         $("#thnx").fadeIn().text("thanx for sign up!")}
//     $(".sub").fadeOut(1000)
//     event.preventDefault()
//      window.location.href = ""
    
//        }) 
//     })
    
// localStorage.setItem("name","ahmed")
// var a=localStorage.getItem("name")
// console.log(a,"this is my name");
// localStorage.setItem("email","ahmed.gafsi.2001@gmail.com")
// localStorage.setItem("password","22513177")
// $(document).ready(function(){
//   var name=$("#naa").val()
  
//   var email=$("#emaill").val()
//   var password=$("#psw").val()
// $(".sub").click(function(){
//  if(name===localStorage.getItem("name") && email===localStorage.getItem("email") && password===localStorage.getItem("password")){
//    $("#thnx").fadeIn().text("thanx for sign up!")
//    }
//    else{
//     $("#error").fadeIn().text("error you need to put 6 charachter")
//    }



// })

// })
$(document).ready(function(){
var data={
  "ahmed":"22513177",
  "sarra":"sarra123",
  "yessine":"yessine123"
}
$(".sub").click(function(event){
  
  var username=$('input[type="text"]').val()
  var password=$('input[type="password"]').val()
  if(data.hasOwnProperty(username)){
    if(data[username]===password){
   alert("login seccues")
   event.preventDefault()
   window.location.href = "https://kz-audio.com/"
    }
    else{alert("incorrect password")}
  }
  else{ alert("user not")}
  

})

})