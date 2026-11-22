const themeSwitch = document.querySelector('.theme-switch');
const printButton = document.querySelector('.print-button');

function applyTheme(theme) {
  const dark = theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeSwitch.setAttribute('aria-pressed', String(dark));
  themeSwitch.textContent = dark ? 'Light' : 'Dark';
}

let savedTheme;
try {
  savedTheme = localStorage.getItem('resume-theme');
} catch {
  savedTheme = 'light';
}

applyTheme(savedTheme);
themeSwitch.hidden = false;
themeSwitch.addEventListener('click', () => {
  const theme = themeSwitch.getAttribute('aria-pressed') === 'true' ? 'light' : 'dark';
  applyTheme(theme);
  try {
    localStorage.setItem('resume-theme', theme);
  } catch {
    // The theme still works when browser storage is unavailable.
  }
});

printButton.hidden = false;
printButton.addEventListener('click', () => window.print());
