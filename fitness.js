
var users={
  "ahmed":"22513177",
  "siwar":"siwar123",
  "aziz":"aziz123"
}
$(document).ready(function(){

$(".sub").click(function(event){
  
  var username=$('input[type="text"]').val()
  var password=$('input[type="password"]').val()
  if(users.hasOwnProperty(username)){
    if(users[username]===password){
   alert("login successfully")
   event.preventDefault()
   window.location.href = "http://127.0.0.1:5500/about.html#"
    }
    else{alert("wrong password")}
  }
  else{ alert("wrong entry invalid")}
  

})

})