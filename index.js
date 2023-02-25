const $ = (query) => document.querySelector(query);

const addItems = () => {
  const array = $("#input").value.split(/[,<>]/);
  array.forEach((el) => {
    if (el !== "") {
      $("#list").innerHTML =
        `<div class="item">
            <span>${el.trim().toLowerCase()}</span>
            <button class="btn-strike">Taie</button>
        </div>` + $("#list").innerHTML;
      $("#input").value = "";
    }
  });
};

const strikeItem = (e) => {
  e.target.parentNode.classList.toggle("bg-dark");
  e.target.parentNode.childNodes[1].classList.toggle("strike");
  e.target.classList.toggle("bg-white");
  e.target.textContent = "Revino";
  if (!e.target.parentNode.classList.contains("bg-dark")) {
    e.target.textContent = "Taie";
  }
};

const sortListChildren = (n1, n2) => {
  [...$("#list").children]
    .sort((a, b) => (a.textContent > b.textContent ? n1 : n2))
    .forEach((node) => $("#list").appendChild(node));
};

$("#container").addEventListener("click", (e) => {
  if (e.target.id === "btn-add" && $("#input").value !== "") {
    addItems();
  } else if (e.target.classList.contains("btn-sort-up")) {
    sortListChildren(1, -1);
  } else if (e.target.classList.contains("btn-sort-down")) {
    sortListChildren(-1, 1);
  } else if (e.target.id === "btn-new-list") {
    $("#list").innerHTML = "";
  } else if (e.target.classList.contains("btn-strike")) {
    strikeItem(e);
  }
});
