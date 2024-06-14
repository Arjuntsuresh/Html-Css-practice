const firstName=document.getElementById('firstName');
const lastName=document.getElementById('lastName');
const DOB=document.getElementById('dateOfBirth');
const age=document.getElementById('age');
const email=document.getElementById('email');
const address=document.getElementById('address');
const userName=document.getElementById('userName');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('confirmPassword');
const form=document.getElementById('form')


const firstName_error=document.getElementById('firstName_error')
const lastName_error=document.getElementById('lastName_error')
const DOB_error=document.getElementById('DOB_error')
const age_error=document.getElementById('age_error')
const email_error=document.getElementById('email_error')
const address_error=document.getElementById('address_error')
const userName_error=document.getElementById('userName_error')
const password_error=document.getElementById('password_error')
const confirmPassword_error=document.getElementById('confirmPassword_error')


const male = document.getElementById('male');
const female=document.getElementById('female');
const others=document.getElementById('others');
const checkBox_error=document.getElementById('checked');


form.addEventListener('submit',(x)=>{
    if(firstName.value =='' || firstName.value ==null){
        x.preventDefault();
        firstName_error.innerHTML='First name is required!'
    }
    else{
        firstName_error.innerHTML='';
    }
    if(lastName.value =='' || lastName.value ==null){
        x.preventDefault();
       lastName_error.innerHTML='Last name is required!';
    }
    else{
        lastName_error.innerHTML='';
    }
    if(DOB.value ==''){
        x.preventDefault();
        DOB_error.innerHTML='Dob is required!';
    }
    else{
        DOB_error.innerHTML='';
    }
    if(age.value =='' || age.value ==null){
        x.preventDefault();
        age_error.innerHTML='Age is required!';
    }
    else{
        age_error.innerHTML='';
    }
    let email_check= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(email.value =='' || email.value ==null){
        x.preventDefault();
        email_error.innerHTML='Email is required!';
    }
    else{
        email_error.innerHTML='';
    }
    if(!email.value.match(email_check)){
        x.preventDefault();
        email_error.innerHTML='Email is required!';
    }
    else{
        email_error.innerHTML='';
    }
    if(address.value =='' || address.value ==null){
        x.preventDefault();
        address_error.innerHTML='Address is required!';
    }
    else{
        address_error.innerHTML='';
    }
    if(userName.value =='' || userName.value ==null){
        x.preventDefault();
        userName_error.innerHTML='User name is required!';
    }
    else{
        userName_error.innerHTML='';
    }
    if(password.length <6){
        x.preventDefault();
        password_error.innerHTML='Password length should be more than 6!';
    }
    else{
        password_error.innerHTML='';
    }
    if(password.value==''){
        x.preventDefault();
        password_error.innerHTML='Password is required!';
    }
    else{
        password_error.innerHTML='';
    }


   if(confirmPassword.value==''){
        x.preventDefault();
        confirmPassword_error.innerHTML='Password is required!';
    }
    else{
        confirmPassword_error.innerHTML='';
    } 
    if(password.value != confirmPassword.value){
        x.preventDefault();
        confirmPassword_error.innerHTML='Password dosent match!'
    }

    if(male.checked){
        checkBox_error.innerHTML='Male'
        checkBox_error.style.color='black'
    }
    else if(female.checked){
        checkBox_error.innerHTML='Female'
        checkBox_error.style.color='black'

    }
    else if(others.checked){
        checkBox_error.innerHTML='others'
        checkBox_error.style.color='black'
    }
    else{
        checkBox_error.innerHTML='please select a gender!'
    }
    
})

let state={
    kerala:[
        "Alappuzha",
        "Ernakulam",
        "Idukki",
        "Kannur",
        "Kasaragod",
        "Kollam",
        "Kottayam",
        "Kozhikode",
        "Malappuram",
        "Palakkad",
        "Pathanamthitta",
        "Thiruvananthapuram",
        "Thrissur",
        "Wayanad"
    ],
    Karnataka:[
        "Bagalkot",
        "Bangalore Rural",
        "Bangalore Urban",
        "Belgaum",
        "Bellary",
        "Bidar",
        "Chamarajanagar",
        "Chikballapur",
        "Chikkamagaluru",
        "Chitradurga",
        "Dakshina Kannada",
        "Davanagere",
        "Dharwad",
        "Gadag",
        "Gulbarga",
        "Hassan",
        "Haveri",
        "Kodagu",
        "Kolar",
        "Koppal",
        "Mandya",
        "Mysore",
        "Raichur",
        "Ramanagara",
        "Shimoga",
        "Tumkur",
        "Udupi",
        "Uttara Kannada",
        "Vijayapura",
        "Yadgir"
    ],
    Tamilnadu:[
        "Ariyalur",
        "Chengalpattu",
        "Chennai",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Dindigul",
        "Erode",
        "Kallakurichi",
        "Kanchipuram",
        "Kanyakumari",
        "Karur",
        "Krishnagiri",
        "Madurai",
        "Mayiladuthurai",
        "Nagapattinam",
        "Namakkal",
        "Nilgiris",
        "Perambalur",
        "Pudukkottai",
        "Ramanathapuram",
        "Ranipet",
        "Salem",
        "Sivaganga",
        "Tenkasi",
        "Thanjavur",
        "Theni",
        "Thoothukudi",
        "Tiruchirappalli",
        "Tirunelveli",
        "Tirupattur",
        "Tiruppur",
        "Tiruvallur",
        "Tiruvannamalai",
        "Tiruvarur",
        "Vellore",
        "Viluppuram",
        "Virudhunagar"
    ]

}
function changeValue(value){

    if(value.length==0){
        document.getElementById('city').innerHTML='';
    }
    else{
        let common=''
        for(id in state[value]){
            common+="<option>" + state[value][id]+ "</option>"
        }
        document.getElementById('city').innerHTML=common;

    }
}








