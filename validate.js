function validate()
{


  var name = document.getElementById('nameTxt').value;
  var nameRGEX =  /^([a-zA-Z]){3,50}$/;
  var nameResult = nameRGEX.test(name);

  var phoneNumber = document.getElementById('contactTxt').value;
  var phoneRGEX =  /^([0-9]){10}$/;
  var phoneResult = phoneRGEX.test(phoneNumber);

  var email = document.getElementById('mailTxt').value;
  var emailRGEX =  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
  var emailResult = emailRGEX.test(email);

  var password=document.getElementById('passwordTxt').value;
var passwordRGEX =  neeraj;
var passresult=document.test(password)


if(name!="" && phoneNumber!="" && email!="" && password!="neeraj"){


  if(!nameResult)
  {
  	alert("INvalid name :Should be only character.Must be from 3 to 50 character" );
  }
  else if(!phoneResult)
  {
  	alert("INvalid phonenumber :Should be only number.Must be 10number" );
  }
  else if(!emailResult)  
  {
 	alert("INvalid email" );
  }
else if(!passresult)
{
alert("wrong password");
}
  else

  {
 	alert("Values Submitted"); 
  }
 
  
}
else
{
alert("Fields should not be empty");
}


}
