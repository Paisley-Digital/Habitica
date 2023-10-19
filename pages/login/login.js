let Username = document.getElementById("Username").value;
let Password = document.getElementById("Password").value;
let btnLogin = document.getElementById("login");

function goHome() {
  if (Password == "" || Username == "") {
    alert("Name must be filled out");
  } else {
    location.replace("/pages/home/home.html");
  }
}
