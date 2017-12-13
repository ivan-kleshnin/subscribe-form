let form = {
  username: document.querySelector("#username"),
  email: document.querySelector("#email"),
  usernameError: document.querySelector("#usernameError"),
  emailError: document.querySelector("#emailError"),
  submit: document.querySelector("#submit")
}

let handleKeyup = () => {
  let username = form.username.value,
      email = form.email.value
  let valid = validate({username, email})

  if (_.filter(valid, Boolean).length != valid.length) { 
    form.usernameError.innerHTML = valid.username ? "" : "* Name must have only letters"
    form.emailError.innerHTML = valid.email ? "" : "* Invalid email address"
  } else {
    form.submit.disabled = false
  }
}

window.addEventListener('keyup', _.debounce(handleKeyup, 1000))