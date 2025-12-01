const nameTF=document.getElementById("nameTF");
const emailTF=document.getElementById("emailTF");
const passwordTF=document.getElementById("passwordTF");
const confirmPasswordTF=document.getElementById("confirmPasswordTF");
const phoneNumberTF=document.getElementById("phoneNumberTF");

const nameERR=document.getElementById("nameERR");
const emailERR=document.getElementById("emailERR");
const passwordERR=document.getElementById("passwordERR");
const confirmPasswordERR=document.getElementById("confirmPasswordERR");
const phoneNumberERR=document.getElementById("phoneNumberERR");

function validateForm()
{
    let isErr=false;
    let nameRegex=/^[A-Za-z ]+$/
    if(nameTF.value.trim()==="")
    {
        isErr=true;
        nameERR.innerHTML="Name cannot be empty";
    }
    else
    {
        if(!nameRegex.test(nameTF.value))
        {
            isErr=true;
            nameERR.innerHTML="Name cannot have any special characters or numbers";
        }
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(emailTF.value.trim()==="")
    {
        isErr=true;
        emailERR.innerHTML="Email cannot be empty";
    }
    else{
        if(!emailPattern.test(emailTF.value))
        {
            isErr=true;
            emailERR.innerHTML="Email should follow email address pattern";
        }
    }
    if(passwordTF.value.trim()==="")
    {
        isErr=true;
        passwordERR.innerHTML="Password cannot be empty";
    }
    else
    {
        if(passwordTF.value.length<6)
        {
            isErr=true;
            passwordERR.innerHTML="Password should be at least 6 characters long";
        }
    }
    if(confirmPasswordTF.value.trim()==="")
    {
        isErr=true;
        confirmPasswordERR.innerHTML="Confirm Password cannot be empty";
    }
    else
    {
        if(confirmPasswordTF.value !== passwordTF.value)
        {
            isErr=true;
            confirmPasswordERR.innerHTML="Confirm Password does not match Password";
        }
    }
    if(phoneNumberTF.value.trim()==="")
    {
        isErr=true;
        phoneNumberERR.innerHTML="Phone Number cannot be empty";
    }
    else
    {
        if(isNaN(phoneNumberTF.value) || phoneNumberTF.value.length!=11)
        {
            isErr=true;
            phoneNumberERR.innerHTML="Phone Number should be a 11-digit number";
        }
    }
    if(!isErr)
    {
        alert("Registration Successful!");
        return true;
    }
    else
    {
        return false;
    }
}