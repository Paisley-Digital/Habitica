let pluse = document.querySelector(".pluse");
let minus = document.querySelector(".minus");
let pluse2 = document.querySelector(".pluse-2");
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
let footer = document.getElementById("footer");
let container = document.querySelector(".container");
let addnote = document.querySelector(".addnote");
let pluse3 = document.querySelector(".pluse-3");
let editTitle = document.querySelectorAll(".editTitle");

pluse.addEventListener("click", function () {
  creatCart.style.display = "block";
  services.style.display = "none";
  footer.style.display = "none";
  let valueclear = document.querySelector(".editTitle")
  valueclear.value = " " ;
});

save.addEventListener("click", function () {
  creatCart.style.display = "none";
  services.style.display = "block";
  footer.style.display = "block";

  let inputValue = document.querySelector(".editTitle").value;
  let formattedText = formatText(inputValue);
  
  let inputs = document.createElement("div");
  inputs.setAttribute("class", "form-control");
  inputs.textContent = formattedText;
  document.querySelector("#input1").appendChild(inputs);
  saveValue(inputs.textContent)
});

function saveValue (task){
  console.log(task)
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function formatText(text) {
  const maxLineLength = 10;
  const lines = text.split("\n");
  const formattedText = lines
    .map((line) => {
      let result = "";
      for (let i = 0; i < line.length; i += maxLineLength) {
        result += line.slice(i, i + maxLineLength) + "\n";
      }
      return result;
    })
    .join("\n");

  const formattedLines = formattedText.split("\n");
  if (formattedLines.length > 10) {
    formattedText = formattedLines.slice(0, 10).join("\n");
  }

  return formattedText;
}

let inputedite = document.querySelector("#input1");
inputedite.addEventListener("click", function () {
  let inputValue = document.querySelector(".editTitle").value;
  let formattedText = inputValue.remove;
  inputedite.textContent = formattedText;
  creatCart.style.display = "block";
  services.style.display = "none";
  footer.style.display = "none";
});

pluse2.addEventListener("click", function () {
  services.style.display = "none";
  creatCart2.style.display = "block";
  creatCart3.style.display = "none";
  footer.style.display = "none";
  let valueclear2 = document.querySelector(".editTitle-2");
  valueclear2.value = " " ;
});

save2.addEventListener("click", function () {
  creatCart2.style.display = "none";
  services.style.display = "block";
  footer.style.display = "block";

  var inputValue2 = document.querySelector(".editTitle-2").value;
  var formattedText2 = formatText(inputValue2);
  let input2 = document.createElement("div");

  input2.setAttribute("class", "form-control2");
  input2.textContent = formattedText2;
  document.querySelector("#input2").appendChild(input2);
});

let inputedite2 = document.querySelector("#input2");
inputedite2.addEventListener("click", function () {
  let inputValue2 = document.querySelector(".editTitle-2").value;
  let formattedText2 = inputValue2.remove;
  inputedite2.textContent = formattedText2;
  services.style.display = "none";
  creatCart2.style.display = "block";
  creatCart3.style.display = "none";
  footer.style.display = "none";
});

pluse3.addEventListener("click", function () {
  services.style.display = "none";
  creatCart3.style.display = "block";
  footer.style.display = "none";
  let valueclear3 = document.querySelector(".editTitle-3") ;
  valueclear3.value = " " ;
});

save3.addEventListener("click", function () {
  creatCart3.style.display = "none";
  services.style.display = "block";
  footer.style.display = "block";
  var inputValue3 = document.querySelector(".editTitle-3").value;
  var formattedText3 = formatText(inputValue3);
  let input3 = document.createElement("div");
  input3.setAttribute("class", "form-control3");
  input3.textContent = formattedText3;
  document.querySelector("#input3").appendChild(input3);
});

let inputedite3 = document.querySelector("#input3");
inputedite3.addEventListener("click", function () {
  let inputValue3 = document.querySelector(".editTitle-3").value;
  let formattedText3 = inputValue3.remove;
  inputedite3.textContent = formattedText3;
  services.style.display = "none";
  creatCart3.style.display = "block";
  footer.style.display = "none";
});

function remove() {
  document.querySelector(".form-control").remove();
}

function remove2() {
  document.querySelector(".form-control2").remove();
}

function remove3() {
  document.querySelector(".form-control3").remove();
}
