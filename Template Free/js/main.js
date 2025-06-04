function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle("dark");
  
    // Opcional: persistir preferência do usuário
    const isDark = html.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }
  
  // Carregar preferência ao iniciar
  (function () {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  })();