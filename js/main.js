let darkModeButton = document.querySelector(".darkModeButton");
const savedTheme = localStorage.getItem("theme");
// 1. перевірямо темну тему на рівні системи (коли новий користувач перший раз зайшов на сайт щоб сайт зразу адаптувався під
// налаштування його системи dark чи light mode)
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark");
  darkModeButton.classList.add("darkMode");
}

// 2. перевіряємо збережену тему з localStorage при завантаженні сторінки (коли користувач вже був на сайті і localStorage 
// була збережена інформація про тему яку він обирав)

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  darkModeButton.classList.add("darkMode");
} else if (savedTheme === "light") {
  darkModeButton.classList.remove("darkMode");
  document.body.classList.remove("dark");
}

// 3.коли міняються системні настройки теми сайт бачить це і на льоту змінює
// тему на сайті і переписує значення в localStorage

  window.matchMedia &&
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (evt) => {
      const newColorScheme = evt.matches ? "dark" : "light";

      if (newColorScheme === "dark") {
        darkModeButton.classList.add("darkMode");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        darkModeButton.classList.remove("darkMode");
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    })

  // включаем темну тему по кліку
  darkModeButton.addEventListener("click", function () {
    darkModeButton.classList.toggle("darkMode");
    const isDarkMode = document.body.classList.toggle("dark");
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
