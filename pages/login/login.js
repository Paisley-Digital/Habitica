
function goHome() {
  var Username = document.getElementById("Username").value;
var Password = document.getElementById("Password").value;
var btnLogin = document.getElementById("login");
  if (Password === "" || Username === "") {
    alert("Name must be filled out");
  } else {
    window.location.href= 'http://127.0.0.1:5500/pages/home/home.html';
  }}
 





