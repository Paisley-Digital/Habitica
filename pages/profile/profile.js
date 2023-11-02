let editProfile = document.getElementById("editProfile");

editProfile.addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");
  const nameInput = document.getElementById("name");
  const lastNameInput = document.getElementById("lastName");
  const mobileNumbreInput = document.getElementById("mobileNumbre");

  const emailValue = emailInput.value;

  if (
    passwordInput.value === "" ||
    emailInput.Value === "" ||
    nameInput.value === "" ||
    lastNameInput.value === "" ||
    mobileNumbreInput.value === ""
  ) {
    alert("Enter your complete information");
  } else if (!isValidEmail(emailValue)) {
    alert("Please enter a valid email");
  } else {
    passwordInput.value = "";
    emailInput.value = "";
    nameInput.value = "";
    lastNameInput.value = "";
    mobileNumbreInput.value = "";
  }
});

document.getElementById("photoInput").addEventListener("change", function (event) {
    const selectedFile = event.target.files[0];
    if (!isValidImage(selectedFile)) {
      alert("Selected file is not an image.");
    } else {
      const imageContainer = document.getElementById("imageContainer");
      const selectedImage = document.getElementById("selectedImage");
      const imageUrl = URL.createObjectURL(selectedFile);
      selectedImage.src = imageUrl;
      selectedImage.style.display = "block";
    }
  });

function isValidImage(file) {
  return file.type.startsWith("image/");
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
