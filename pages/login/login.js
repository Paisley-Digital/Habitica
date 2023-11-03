let login = document.getElementById('login');

login.addEventListener('click', function () {
  var Username = document.getElementById("Username").value;
  var Password = document.getElementById("Password").value;

  if (Password === "" || Username === "") 
    alert("Both username and password must be filled out");
   else {
    window.location.replace('/pages/home/home.html');
   }

});

