let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let listtodo = document.querySelector(".listtodo ul");
let li = document.querySelectorAll(".li");
let tasks;
if (!localStorage.getItem("todo")) {
  tasks = [];
} else {
  tasks = gettask();
}

btn.addEventListener("click", () => {
  let valinput = input.value;
  let linew = document.createElement("li");
  linew.classList.add("li");
  linew.innerHTML = `${valinput}
            <div>
              <img class="trash" src="./src/img/del.svg" />
              <img class="check" src="./src/img/check.svg" />
            </div>`;
  if (valinput.length > 0) {
    listtodo.append(linew);
    savetask(valinput);
  }
  input.value = "";
});
listtodo.addEventListener("click", (e) => {
  if (e.target.classList.contains("trash")) {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList.contains("check")) {
    e.target.parentElement.parentElement.classList.toggle("did");
  }
});
function savetask(text) {
  tasks.push(text);
  localStorage.setItem("todo", tasks);
  console.log(tasks);
}
function gettask() {
  return localStorage.getItem("todo").split(",");
}
function getlsli() {
  for (let task of mytasks) {
    let linew = document.createElement("li");
    linew.classList.add("li");
    linew.innerHTML = `${task}
            <div>
              <img class="trash" src="./src/img/del.svg" />
              <img class="check" src="./src/img/check.svg" />
            </div>`;
    listtodo.append(linew);
  }
}
let mytasks = gettask();
getlsli()
let mytask = [1,2,3,4,5]
let ins = mytask.indexOf(3);
mytask.splice(ins,1);
console.log(mytask);


