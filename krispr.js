let modeBtn = document.querySelector("#box1btn");
let html = document.querySelector("body");
let current = "dark";

modeBtn.addEventListener("click", () => {
  if (current == "dark") {
    alert("switch to light mode?")
    current = "light";
    html.classList.add("light");
    html.classList.remove("dark");
  } else {
    alert("switch to dark mode?")
    current = "dark";
    html.classList.remove("light");
    html.classList.remove("dark");
  }
  console.log(current);
});
