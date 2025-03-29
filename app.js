document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || sessionStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            sessionStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
            sessionStorage.removeItem('theme');
        }
    });
});