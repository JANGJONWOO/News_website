// Toggle between Login and Sign Up sections
const signupSection = document.getElementById('signup-section');
const loginSection = document.getElementById('login-section');
const showLogin = document.getElementById('show-login');
const showSignup = document.getElementById('show-signup');
// document.getElementById('redirect').click();

showLogin.addEventListener('click', () => {
    signupSection.style.display = 'none';
    loginSection.style.display = 'block';
});

showSignup.addEventListener('click', () => {
    loginSection.style.display = 'none';
    signupSection.style.display = 'block';
});

// Sign up
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Save credentials to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign Up Successful! You can now log in.');
    document.getElementById('signup-form').reset();
    loginSection.style.display = 'block';
    signupSection.style.display = 'none';
});

// Login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Retrieve credentials from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login Successful!');
        window.open('./index..html', '_self');
        // Redirect to the main page after login
    } else {
        alert('Invalid Username or Password!');
    }
});
