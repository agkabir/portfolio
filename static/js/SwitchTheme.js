// Add this script to your template or a separate JavaScript file
const toggleBtn = document.getElementById("theme-toggle-btn");
var currentTheme = localStorage.getItem("theme") || "light";
var currentThemeIcon =
  localStorage.getItem("themeIcon") || "bi-brightness-high";

setTheme(currentTheme, currentThemeIcon);

// Toggle theme when the button is clicked
function toggleTheme() {
  if (currentTheme === "light") {
    currentTheme = "dark";
    currentThemeIcon = "bi-brightness-high-fill";
  } else {
    currentTheme = "light";
    currentThemeIcon = "bi-brightness-high";
  }
  setTheme(currentTheme, currentThemeIcon);
  // Save the user's preferred theme to local storage or backend
  localStorage.setItem("theme", currentTheme);
  localStorage.setItem("themeIcon", currentThemeIcon);
}

// Function to set the theme
function setTheme(theme, themeIcon) {
  // Remove existing theme classes and themeIcon
  $("body").removeClass("light-theme dark-theme");
  toggleBtn.classList.remove("bi-brightness-high");
  toggleBtn.classList.remove("bi-brightness-high-fill");
  // Add the selected theme class
  $("body").addClass(theme + "-theme");
  toggleBtn.classList.add(themeIcon);
}

toggleBtn.addEventListener("click", () => {
  toggleTheme();
});
