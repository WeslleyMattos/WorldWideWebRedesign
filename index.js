const themeToggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

let isDarkMode = false;

function toggleTheme() {
  if (isDarkMode) {
    root.style.setProperty("--cbc-color", "#000000");
    root.style.setProperty("--bg-color", "#252525");
    root.style.setProperty("--bg2-color", "#101010");
    root.style.setProperty("--txt-color", "#aaaaaa");
    root.style.setProperty("--highlighted-color", "#cccccc");
    root.style.setProperty("--title-color", "#ffffff");
    root.style.setProperty("--nav-color", "#ffffff");
  } else {
    // Aqui você pode definir as cores para o tema claro
    root.style.setProperty("--cbc-color", "#ffffff");
    root.style.setProperty("--bg-color", "#f0f0f0");
    root.style.setProperty("--bg2-color", "#cccccc");
    root.style.setProperty("--txt-color", "#333333");
    root.style.setProperty("--highlighted-color", "#111111");
    root.style.setProperty("--title-color", "#000000");
    root.style.setProperty("--nav-color", "#000000");
  }

  isDarkMode = !isDarkMode;
}

themeToggleBtn.addEventListener("click", toggleTheme);

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

