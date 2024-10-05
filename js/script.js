const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click' , ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click' , ()=> {
    wrapper.classList.remove('active');
});



// Define admin credentials
const adminCredentials = {
    username: 'admin@123', 
    password: '1234' 
};

// Add event listener to the form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Capture input values
    const enteredUsername = document.getElementById('adminEmail').value;
    const enteredPassword = document.getElementById('adminPassword').value;

    // Check credentials
    if (enteredUsername === adminCredentials.username && enteredPassword === adminCredentials.password) {
        document.getElementById('message').innerText = 'Login successful! Welcome Admin!';
        // Redirect to admin dashboard 
        window.location.href = 'AdminPanel/AdminPanel.html';  
    } else {
        document.getElementById('message').innerText = 'Invalid username or password. Please try again.';
    }
});

// change profile 
let profilePic = document.getElementById("Profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}
