function login(){
    acno=login_acno.value
    pswd=login_pswd.value

    if(acno in localStorage){
        Acnt_Details=JSON.parse(localStorage.getItem(acno))
        if(pswd==Acnt_Details.Password){
            alert("Login Successful")
            window.location.href="home.html"
        }else{
            alert("Login Failed - Incorrect password")
        }
    }
    else{
        alert("No Account Found")
    }
}