function CheckValidPass(){
    var password=document.forms["form"]["Enterpassword"].value;
    var confirmPassword=document.forms["form"]["Re-EnterConfirmPassword"].value;
    if(password==confirmPassword){
        return true;
    }
    else{
        alert("password arn't same")
        return false;
    }
}