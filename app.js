// app.js
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform client-side authentication (in a real app, this should be done server-side)
    if (username === 'user' && password === 'pass') {
      document.getElementById('loginMessage').innerHTML = 'Login successful!';
      // Redirect to home page or perform other actions
    } else {
      document.getElementById('loginMessage').innerHTML = 'Invalid username or password';
    }
  }
  
  function signup() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
  
    // Perform client-side signup logic (in a real app, this should be done server-side)
    document.getElementById('signupMessage').innerHTML = 'Signup successful!';
    //redirect to the login page or perform other actions
  }

function navigateToVerify() {
  // Redirect to verify.html
  window.location.href = 'verify.html';
}

document.querySelector('input[type="file"]').addEventListener('change', handleFile);
function handleFile(event) {
  const file = event.target.files[0];
  // TODO: process the file
  console.log("process it");
  // Perform actions with the selected file, such as displaying the image
  navigateToVerify(file);
}