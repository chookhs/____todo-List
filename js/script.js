let inpValue = document.getElementById("text");
let list = document.getElementById("list");
let btn = document.querySelector("button");
let div = document.getElementById("block");

function addItem() {
  let listItem = document.createElement("li");
  if (inpValue.value !== "") {
    listItem.innerHTML = `${inpValue.value} Незаконченное`;
    list.appendChild(listItem);
  }
  if (inpValue.blur) {
    inpValue.value = "";
  }
}

function changeItem(e) {
  if (e.target.innerHTML !== "") {
    e.target.innerHTML = "Завершено";
  }
}

function delItem(e) {
  if (e.target.tagName === "LI" && e.target.innerHTML == "Завершено") {
    e.target.remove();
  }
}

btn.addEventListener("click", addItem);
addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addItem;
  }
});

list.addEventListener("click", changeItem, false);
div.addEventListener("click", delItem, true);
