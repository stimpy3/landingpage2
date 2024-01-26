let modeBtn = document.querySelector("#box1btn");
let html = document.querySelector("body");
let current = "dark";
anticurrent="+light mode";
modeBtn.innerHTML=anticurrent;

modeBtn.addEventListener("click", () => {
  if (current == "dark") {
    current = "light";
    anticurrent="+dark mode";
    modeBtn.innerHTML=anticurrent;
    html.classList.add("light");
    html.classList.remove("dark");
  } else {
    current = "dark";
    anticurrent="+light mode";
    modeBtn.innerHTML=anticurrent;
    html.classList.remove("light");
    html.classList.remove("dark");
  }
  console.log(current);
});

let calciBtn= document.querySelector("#calculator");
calciBtn.addEventListener("click", () => {
  window.location.href="https://stimpy3.github.io/calculator/";
 //window.location.href to navigate to the specified URL when the button is clicked.
});

