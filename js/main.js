const isLoginButton = document.getElementById("login-link");
const isRegisterButton = document.getElementById("register-link");

const login = document.getElementById("login")
const register = document.getElementById("register")

isLoginButton.addEventListener('click',()=>{
    login.style.display = login.style.display == "block"?"none":"block";
    register.style.display = register.style.display == "none"?"block":"none";
})

isRegisterButton.addEventListener('click',()=>{
    login.style.display = login.style.display == "block"?"none":"block";
    register.style.display = register.style.display == "none"?"block":"none";
})