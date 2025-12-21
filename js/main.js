let darkModeButton = document.querySelector('.darkModeButton');

// перевіряємо збережену тему при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    darkModeButton.classList.add('darkMode');
  }
});

// перевірямо темну тему на рівні системи

// включаем темну тему по кліку
darkModeButton.addEventListener('click', function() {
  darkModeButton.classList.toggle('darkMode');
  const isDarkMode = document.body.classList.toggle('dark');

  if (isDarkMode) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  } 
});