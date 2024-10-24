let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let listtodo = document.querySelector(".listtodo ul");
let li = document.querySelectorAll(".list");
btn.addEventListener("click", () => {
  let valinput = input.value;
  listtodo.innerHTML += `
        <div class="list">
            <li class="li">${valinput}</li>
            <span>
                <img class="trash" src="./src/img/del.svg" />
            </span>
          </div>
    `;
  input.value = "";
});
li.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.classList.contains("trash")) {
      e.target.parentElement.remove();
    }
    if (e.target.classList.contains("list")) {
      e.target.classList.toggle("did");
    }
  });
});
