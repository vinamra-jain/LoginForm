var btn = document.querySelector('#btn-login');
var emailID = document.querySelector("#emailID");
var password = document.querySelector("#password")

function btnLoginTriggered() {
    if(emailID.value==="" && password.value===""){
        alert("email & password is compulsory");
    }else if(emailID.value===""){
        alert("email is required");
    }else if(password.value===""){
        alert("password is required");
    }else{
        alert("Login successfull")
    }
}

btn.addEventListener("click", btnLoginTriggered);

