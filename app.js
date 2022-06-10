const add = document.getElementById("button-addon2");
const toDo = document.getElementById("toDos");
const adds = document.getElementById("adds");
const adds1 = document.getElementById("adds1");
const toDos = document.querySelector(".to-do");
const todosDelete = document.getElementById("delete");
const container = document.querySelector(".container");
let isClick = false;
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-addon2")) {
    if (toDo.value == "") {
      alert("please write something");
    } else {
      elementAdd();
      toDo.value = "";
    }
  } else if (e.target.classList.contains("fa-solid")) {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("delete")) {
  } else if (e.target.classList.contains("form-check-input")) {
    if (isClick == false) {
      isClick = true;
      e.target.parentElement.nextElementSibling.className = "text-decoration-line-through to-do form-control"
      console.log( e.target.parentElement.nextElementSibling);
    
    } else if (isClick == true) {
      isClick = false;
      e.target.parentElement.nextElementSibling.className = " to-do form-control"
      
    }
  }
});


const elementAdd = () => {
  adds.innerHTML += `<div class="input-group mb-3 ">
    <div class="input-group-text">
      <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
    </div>
    <input type="text" class="to-do form-control" aria-label="Text input with checkbox"  value="${toDo.value}"  readonly>
    <span class="input-group-text" id="addon-wrapping"><i class="fa-solid fa-x"></i></span>
    
  </div>  `;
};

