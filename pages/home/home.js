let pluse = document.querySelector(".pluse");
let minus = document.querySelector(".minus");
let creatText = document.querySelectorAll(".creatText");
let creatCart = document.querySelector(".creatCart");
let services = document.querySelector(".services");
let cartList = document.querySelector(".cartList");
let cartList2 = document.querySelector(".cartList-2");
let cartList3 = document.querySelector(".cartList-3");
let save = document.querySelector(".save");
let pricecol = document.querySelector(".pricecol");
let creatCart2 = document.querySelector(".creatCart-2");
let creatCart3 = document.querySelector(".creatCart-3");
let save2 = document.querySelector(".save-2");
let save3 = document.querySelector(".save-3");

cartList.addEventListener("click", function () {
  creatCart.style.display = "block";
  services.style.display = "none";
});

save.addEventListener("click", function () {
  creatCart.style.display = "none";
  services.style.display = "block";
});

cartList2.addEventListener("click", function () {
  services.style.display = "none";
  creatCart2.style.display = "block";
  creatCart3.style.display="none";
});

save2.addEventListener("click", function () {
  creatCart2.style.display="none";
  services.style.display = "block";
});

cartList3.addEventListener("click", function () {
  services.style.display="none";
  creatCart3.style.display="block";
});

save3.addEventListener("click", function () {
  creatCart3.style.display = "none";
  services.style.display = "block";
});
