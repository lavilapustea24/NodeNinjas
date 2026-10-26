"use strict";

const body = document.body;
const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".site-nav");
const form = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

function setTheme(theme) {
  const isLight = theme === "light";
  body.dataset.theme = isLight ? "light" : "dark";
  themeButton.setAttribute("aria-pressed", String(isLight));
  themeButton.setAttribute("aria-label", isLight ? "Activează modul întunecat" : "Activează modul luminos");
  themeIcon.textContent = isLight ? "☾" : "☀";
  themeLabel.textContent = isLight ? "Dark mode" : "Light mode";
}

// Alegerea temei se păstrează între vizite, dacă browserul permite.
try {
  const savedTheme = localStorage.getItem("node-ninjas-theme");
  setTheme(savedTheme === "light" ? "light" : "dark");
} catch {
  setTheme("dark");
}

themeButton.addEventListener("click", () => {
  const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  try { localStorage.setItem("node-ninjas-theme", nextTheme); } catch { /* Stocarea poate fi indisponibilă. */ }
});

function closeMenu() {
  menu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Deschide meniul");
  menuButton.querySelector("span").textContent = "☰";
}

menuButton.addEventListener("click", () => {
  const opened = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(opened));
  menuButton.setAttribute("aria-label", opened ? "Închide meniul" : "Deschide meniul");
  menuButton.querySelector("span").textContent = opened ? "✕" : "☰";
});

menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeMenu();
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Nu există backend: mesajul nu este expediat.
  feedback.textContent = "Câmpuri validate cu succes! Acesta este doar un formular demonstrativ; mesajul nu a fost trimis.";
});
form.addEventListener("input", () => { feedback.textContent = ""; });
document.querySelector("#year").textContent = String(new Date().getFullYear());
