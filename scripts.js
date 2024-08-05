document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'javiereduardop24@gmail.com' && password === 'vega') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});
