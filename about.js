
$(document).ready(function(){
    $("#btn1").click(function(){
      $("#p1").slideUp();
      
    });
    $("#btn2").click(function(){
      $("#p1").slideDown();
    });
  });

  $(document).ready(function(){
    $("#btn3").click(function(){
      $("#p2").slideUp();
      
    });
    $("#btn4").click(function(){
      $("#p2").slideDown();
    });
  });


  $(document).ready(function(){
    $("#btn5").click(function(){
      $("#p3").slideUp();
      
    });
    $("#btn6").click(function(){
      $("#p3").slideDown();
    });
  });
  
  function addTask() {
    var name= $('#name').val();
    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }
    var nameadded= $('<li>').text(name);
    $('#line').append("<p><b>Congratulations on your new position!<b></p>",nameadded);
    $('#name').val('');
        }
      