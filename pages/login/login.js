let Username=document.getElementById('Username').value;
let Password=document.getElementById('Password').value;
let btnLogin=document.getElementById('login');

btnLogin.addEventListener('click', function(){

    if (Password == "" ) {
        alert("Name must be filled out");

    }
    else if( Password.lenght<=5){
        alert("There are not enough characters");
            }
            else if (Username == "" ) {
                alert("Name must be filled out");
            }
            else if( Username.lenght<=5)
                alert("There are not enough characters");
                else{
                    location.replace('pages/home/home.html');
                }
                    
})
   