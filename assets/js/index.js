function changeForm() {
    let registerForm = document.getElementById('register-form')
    let loginForm = document.getElementById('login-form')

    if (registerForm.hidden == true) {
        registerForm.hidden = false
        loginForm.hidden = true

        return
    }

    registerForm.hidden = true
    loginForm.hidden = false
}

function login() {
    let email = document.getElementById('txtEmail')
    let pass = document.getElementById('txtSenha')
    let error = !validate(email) || !validate(pass)
    
    document.getElementById('errorEmail').hidden = validate(email)
    document.getElementById('errorSenha').hidden = validate(pass)

    if (!error) {
        document.getElementById('login-form').hidden = true
        document.getElementById('loading').hidden = false

        setTimeout(function () {
            window.location.href = 'dashboard.html' 
        }, 1500)
    }
}

function cancel() {
    document.getElementById('login-form').hidden = false
    document.getElementById('loading').hidden = true

    document.getElementById('txtEmail').value = ""
    document.getElementById('txtSenha').value = ""
}

function validate(field) {
    
    if (field.value == "") {
        return false
    }

    return true
}