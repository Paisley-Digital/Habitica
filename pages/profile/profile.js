let name=document.getElementById('name');
let lastName=document.getElementById('lastName');
let mobileNumbre=document.getElementById('mobileNumbre');
let email=document.getElementById('email');
let Password=document.getElementById('Password');
let Btn=document.querySelector('.btn');
Btn.addEventListener('click', function(){
name.value="";
lastName.value="";
mobileNumbre.value="";
email.value="";
Password.value="";
})

