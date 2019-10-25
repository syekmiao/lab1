(function validateForm() {
  var name = document.getElementById("regName");
  var password = document.getElementById("regPass");
  var conf_password = document.getElementById("confPass");
  var tel = document.getElementById("regPhone");
  
  if (name_valid(name,5,20)){
      if (password_length, 8){
      if (password_check(password, conf_password)){
          if(phone_valid(tel,10,12)){
              
          }
      }
  }
  }
  else
      return false;
  
}

function name_valid(name,max, min){
    var name_length = name.value.length;
    if(name_length >max || name_length <min){
        alert("name must contains 5-20 character.");
        name.focus();
        return false;
    }
    else
        return true;
}

function password_check(password, conf_password)