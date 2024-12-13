const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const root = document.documentElement;

    if (document.body.classList.contains('dark-theme')) {
        root.style.setProperty('--bg-color', '#111');
        root.style.setProperty('--text-color', '#f8f8f8');
    } else {
        root.style.setProperty('--bg-color', '#f8f8f8');
        root.style.setProperty('--text-color', '#333');
    }
});
