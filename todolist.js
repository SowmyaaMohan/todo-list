const inputbox = document.getElementById("textbox");

const add = document.getElementById("add-btn");
const display = document.getElementById("display");

let list = JSON.parse(localStorage.getItem("tasks")) || [];

list.forEach(function (tasktext) {
   showTask(tasktext);
});

add.addEventListener("click", function (event) {

   const input = document.getElementById("textbox").value;
   list.push(input);

   localStorage.setItem("tasks", JSON.stringify(list));
   showTask(input);
   inputbox.value = "";
});


function showTask(input) {
   const container = document.createElement("div");
   container.style.display = "flex";
   container.style.gap = "5px";
   container.style.marginTop = "5px";

   const task = document.createElement("p");
   task.classList.add("items");
   task.textContent = input;


   const delbtn = document.createElement("button");
   delbtn.textContent = "delete";
   delbtn.classList.add("delbtn");

   delbtn.addEventListener("click", function () {

      list = list.filter(item => item !== input);
      localStorage.setItem("tasks", JSON.stringify(list));
      container.remove();
   });

   container.appendChild(task);
   container.appendChild(delbtn);
   display.appendChild(container);

}



