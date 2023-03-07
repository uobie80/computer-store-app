
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#floatingInput').value.trim();
  const password = document.querySelector('#floatingPassword').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/home');
    } else {
      alert(response.statusText);
      alert("If you haven't signed up then please sign up to create an account in order to login!")
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


