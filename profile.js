let name=document.getElementById('name');
let lastName=document.getElementById('lastName');
let mobileNumbre=document.getElementById('mobileNumbre');
let email=document.getElementById('email');
let password=document.getElementById('password');
let Btn=document.querySelector('.btn');
Btn.addEventListener('click', function(){
name.value="";
lastName.value="";
mobileNumbre.value="";
email.value="";
password.value="";
})

document.getElementById("photoInput").addEventListener("change", function(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
        const imageContainer = document.getElementById("imageContainer");
        const selectedImage = document.getElementById("selectedImage");
        const imageUrl = URL.createObjectURL(selectedFile);
        selectedImage.src = imageUrl;
        selectedImage.style.display = "block"; 

    
    }
});
