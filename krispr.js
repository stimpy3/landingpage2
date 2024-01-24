let modeBtn = document.querySelector("#box1btn");
let html = document.querySelector("body");
let current = "dark";

modeBtn.addEventListener("click", () => {
  if (current == "dark") {
    current = "light";
    html.classList.add("light");
    html.classList.remove("dark");
  } else {
    current = "dark";
    html.classList.remove("light");
    html.classList.remove("dark");
  }
  console.log(current);
});
