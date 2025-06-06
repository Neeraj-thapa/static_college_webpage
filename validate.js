function validate() {
  var name = document.getElementById('nameTxt').value;
  var nameRGEX = /^([a-zA-Z]){3,50}$/;
  var nameResult = nameRGEX.test(name);

  var phoneNumber = document.getElementById('contactTxt').value;
  var phoneRGEX = /^([0-9]){10}$/;
  var phoneResult = phoneRGEX.test(phoneNumber);

  var email = document.getElementById('mailTxt').value;
  var emailRGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  var emailResult = emailRGEX.test(email);

  var password = document.getElementById('passwordTxt').value;
  var correctPassword = "neeraj"; // ✅ Define correct password as a string

  if (name !== "" && phoneNumber !== "" && email !== "" && password !== "") {
    if (!nameResult) {
      alert("Invalid name: Should be only characters, 3 to 50 characters long.");
    } else if (!phoneResult) {
      alert("Invalid phone number: Should be 10 digits.");
    } else if (!emailResult) {
      alert("Invalid email format.");
    } else if (password !== correctPassword) {
      alert("Wrong password.");
    } else {
      alert("Values Submitted");
    }
  } else {
    alert("Fields should not be empty.");
  }
}
