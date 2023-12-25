const toggleSwitchEl = document.querySelector('input[type = "checkbox"]');
const img1El = document.getElementById("image1");
const img2El = document.getElementById("image2");
const img3El = document.getElementById("image3");
const textBoxEl = document.getElementById("text-box");
const navEl = document.getElementById("navbar");
const toggleIconEl = document.getElementById("toggle-icon");

function imageMode(color) {
  img1El.setAttribute("src", `assets/img/proud_coder_${color}.svg`);
  img2El.setAttribute("src", `assets/img/feeling_proud_${color}.svg`);
  img3El.setAttribute("src", `assets/img/conceptual_idea_${color}.svg`);
}

const themeChanger = (toggleText, navRgb, textBoxRgb) => {
  toggleIconEl.firstElementChild.textContent = toggleText;
  navEl.style.backgroundColor = navRgb;
  textBoxEl.style.backgroundColor = textBoxRgb;
};

const darkMode = () => {
  imageMode("Dark");
  themeChanger("Dark Mode", "rgb(0 0 0/50%)", "rgb(255 255 255/50%)");
  toggleIconEl.children[1].classList.replace("fa-sun", "fa-moon");
};

const lightMode = () => {
  imageMode("light");
  themeChanger("Light Mode", "rgb(255 255 255/50%)", "rgb(0 0 0/50%)");
  toggleIconEl.children[1].classList.replace("fa-moon", "fa-sun");
};

const switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
};

toggleSwitchEl.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitchEl.checked = true;
    darkMode();
  }
}
