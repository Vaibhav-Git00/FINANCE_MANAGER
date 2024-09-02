// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Save email and password to local storage (for demo purposes, not secure)
//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);

//     alert('Login information saved to local storage');
// });
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = "/Dashboard/hh.html";
});
