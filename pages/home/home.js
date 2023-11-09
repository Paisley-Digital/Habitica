let pluse = document.querySelector(".pluse");
// let minus = document.querySelector(".minus");
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

showTasks();
showvaluesMiddleCard();
ShowLastCard();
pluse.addEventListener("click", function () {
  creatCart.style.display = "block";
  services.style.display = "none";
  footer.style.display = "none";
  let valueclear = document.querySelector(".editTitle");
  valueclear.value = " ";
});

save.addEventListener("click", function () {
  creatCart.style.display = "none";
  services.style.display = "block";
  footer.style.display = "block";

  let inputValue = document.querySelector(".editTitle").value;
  let formattedText = formatText(inputValue);
  saveValue(formattedText);
  showTasks();
});

function showTasks() {
  let tasks = getValue("tasks");
  let inputContainer = document.querySelector("#input1");
  inputContainer.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "form-control");
    taskDiv.textContent = tasks[i];
    saveTasks(tasks);
    inputContainer.appendChild(taskDiv);

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.textContent = "Delete";
    taskDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      localStorage.removeItem("tasks");
      taskDiv.remove();
    });
  }
}

function getValue(item) {
  const values = JSON.parse(localStorage.getItem(item));
  return values || [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveValue(task) {
  console.log(task);
  let tasks = getValue("tasks");
  tasks.push(task);
  saveTasks(tasks);
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

let notes = getValue("notes");

pluse2.addEventListener("click", function () {
  creatCart2.style.display = "block";
  services.style.display = "none";
  footer.style.display = "none";
  let valueclear2 = document.querySelector(".editTitle-2");
  valueclear2.value = " ";
});

save2.addEventListener("click", function () {
  creatCart2.style.display = "none";
  services.style.display = "block";
  footer.style.display = "block";

  var inputValue2 = document.querySelector(".editTitle-2").value;
  var formattedText2 = formatText(inputValue2);
  saveValue2(formattedText2);
  showvaluesMiddleCard();
});

function showvaluesMiddleCard() {
  let notes = getValue("notes");
  let inputContainer2 = document.querySelector("#input2");
  inputContainer2.innerHTML = "";

  for (let a = 0; a < notes.length; a++) {
    let taskDiv2 = document.createElement("div");
    taskDiv2.setAttribute("class", "form-control2");
    taskDiv2.textContent = notes[a];
    inputContainer2.appendChild(taskDiv2);
    let deleteMiddleButton = document.createElement("button");
    deleteMiddleButton.textContent = "Delete";
    deleteMiddleButton.setAttribute("class", "deleteMiddleButton");
    taskDiv2.appendChild(deleteMiddleButton);
    deleteMiddleButton.addEventListener("click", function () {
      localStorage.removeItem("notes");
      taskDiv2.remove();
    });
  }
}

function getContentMiddleCard(item) {
  const valuesMiddleCard = getValue("notes");
  return valuesMiddleCard || [];
}

function saveTasks2(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function saveValue2(note) {
  console.log(note);
  notes.push(note);
  saveTasks2(notes);
}
let written = getValue("written");

pluse3.addEventListener("click", function () {
  creatCart3.style.display = "block";
  services.style.display = "none";
  footer.style.display = "none";
  let valueclear3 = document.querySelector(".editTitle-3");
  valueclear3.value = " ";
});

save3.addEventListener("click", function () {
  creatCart3.style.display = "none";
  services.style.display = "block";
  footer.style.display = "block";

  var inputValue3 = document.querySelector(".editTitle-3").value;
  var formattedText3 = formatText(inputValue3);

  saveValue3(formattedText3);
  ShowLastCard();
});

function ShowLastCard() {
  let written = getValue("written");
  let inputContainer3 = document.querySelector("#input3");
  inputContainer3.innerHTML = " ";

  for (let b = 0; b < written.length; b++) {
    let taskDiv3 = document.createElement("div");
    taskDiv3.setAttribute("class", "form-control3");
    taskDiv3.textContent = written[b];
    inputContainer3.appendChild(taskDiv3);
    let deleteLastButton = document.createElement("button");
    deleteLastButton.textContent = " Delete";
    deleteLastButton.setAttribute("class", "deleteLastButton");
    taskDiv3.appendChild(deleteLastButton);
    deleteLastButton.addEventListener("click", function () {
      localStorage.removeItem("written");
      taskDiv3.remove();
    });
  }
}

function saveTasks3(written) {
  localStorage.setItem("written", JSON.stringify(written));
}

function saveValue3(Wrote) {
  console.log(Wrote);
  written.push(Wrote);
  saveTasks3(written);
}

// let inputedite3 = document.querySelector("#input3");
// inputedite3.addEventListener("click", function () {
//   services.style.display = "none";
//   creatCart3.style.display = "block";
//   footer.style.display = "none";
// });

