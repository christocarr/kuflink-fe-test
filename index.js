(function () {
  const loginButton = document.getElementById('loginButton')
  const registerButton = document.getElementById('registerButton')
  const registedUser;
  
  if (registedUser) {
    // register button display none
    registerButton.classList.add('disableButton')
  } else {
    // login button display none
    loginButton.classList.add('disableButton')
  }

})()