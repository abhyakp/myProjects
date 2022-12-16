function register() {
   
    Acc = {
        Name: uname.value,
        accountNo: acno.value,
        Password: pswd.value,
        balance: 2000
    }
    

    if (Acc.accountNo in localStorage)
        alert("Account already registerd")
    else {
        localStorage.setItem(Acc.accountNo, JSON.stringify(Acc))
        alert("Account registerd Successfully")
        window.location.href="index.html"
    }
}
