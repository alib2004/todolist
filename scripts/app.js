let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let listtodo = document.querySelector(".listtodo ul");
let li = document.querySelectorAll(".li");
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
