const email=document.getElementById('email');
const password=document.getElementById('password');
const form=document.getElementById('form');

const email_error=document.getElementById('email_error');
const password_error=document.getElementById('password_error');

form.addEventListener('submit',(y)=>{

    let email_check= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(email.value =='' || email.value ==null){
        y.preventDefault();
        email_error.innerHTML='Email is required!';
    }
    else{
        email_error.innerHTML='';
    }
    if(!email.value.match(email_check)){
        y.preventDefault();
        email_error.innerHTML='Email is required!';
    }
    else{
        email_error.innerHTML='';
    }
    if(password.value==''){
        y.preventDefault();
        password_error.innerHTML='Password is required!';
    }
    else{
        password_error.innerHTML='';
    }
})
email_error.style.color='red';
password_error.style.color='red';
