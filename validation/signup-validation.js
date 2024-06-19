//access the form tag
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
let validationBox = document.getElementById('validation_box');

//access the error tags
const firstName_error=document.getElementById('firstName_error');
const lastName_error=document.getElementById('lastName_error');
const DOB_error=document.getElementById('DOB_error');
const age_error=document.getElementById('age_error');
const email_error=document.getElementById('email_error');
const address_error=document.getElementById('address_error');
const userName_error=document.getElementById('userName_error');
const password_error=document.getElementById('password_error');
const confirmPassword_error=document.getElementById('confirmPassword_error');
//access the checkbox
const male = document.getElementById('male');
const female=document.getElementById('female');
const others=document.getElementById('others');
//check box error tags
const checkBox_error=document.getElementById('checked');
//access the dropdown
const state_drop=document.getElementById('state').value;
const district_drop=document.getElementById('city').value;
const state_error=document.getElementById('state_error');
const district_error=document.getElementById('district_error');

//form validation
form.addEventListener('submit',(x)=>{
    firstName_error.innerHTML = '';

    // Name validation
    let namePattern = /^[a-zA-Z\s]+$/;
    if (firstName.value.trim() === '' || firstName.value == null) {
        x.preventDefault();
        firstName_error.innerHTML = 'Firstname is required!';
    } else if (!firstName.value.match(namePattern)) {
        x.preventDefault();
        firstName_error.innerHTML = 'Name should contain only letters.';
    }
    //last name validation
    lastName_error.innerHTML='';
    if (lastName.value.trim() === '' || lastName.value == null) {
        x.preventDefault();
        lastName_error.innerHTML = 'Lastname is required!';
    } else if (!lastName.value.match(namePattern)) {
        x.preventDefault();
        lastName_error.innerHTML = 'Name should contain only letters.';
    }
    //Dob validation
    if(DOB.value ==''){
        x.preventDefault();
        DOB_error.innerHTML='Dob is required!';
    }
    else{
        DOB_error.innerHTML='';
    }
    if (age.value == '' || age.value == null) {
        x.preventDefault();
        age_error.innerHTML = 'Age is required!';
    } else if (parseInt(age.value) < 18) {
        x.preventDefault();
        age_error.innerHTML = 'Age must be 18 or above!';
    } else {
        age_error.innerHTML = '';
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
//onfocus and onblur
  // Show validation box on focus
  password.onfocus = function() {
    validationBox.style.display = "block";
};

// Hide validation box on blur
password.onblur = function() {
    validationBox.style.display = "none";
};

function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Add focus and blur event listeners for input fields
const inputFields = [
    { field: firstName, errorField: firstName_error },
    { field: lastName, errorField: lastName_error },
    { field: DOB, errorField: DOB_error },
    { field: age, errorField: age_error },
    { field: email, errorField: email_error },
    { field: address, errorField: address_error },
    { field: userName, errorField: userName_error },
    { field: password, errorField: password_error },
    { field: confirmPassword, errorField: confirmPassword_error },
    { field: male, errorField: checkBox_error },
    { field: female, errorField: checkBox_error },
    { field: others, errorField: checkBox_error }
];

inputFields.forEach(({ field, errorField }) => {
    field.addEventListener('focus', () => {
        errorField.innerHTML = '';
        if (field !== password) {
            validationBox.style.display = "none";
        }
    });

    field.addEventListener('blur', () => {
        // Re-validate the field on blur to show the error message if it is still invalid
        if (field === firstName || field === lastName) {
            if (field.value.trim() === '' || !field.value.match(namePattern)) {
                errorField.innerHTML = 'Name should contain only letters.';
            }
        } else if (field === email) {
            if (field.value == '' || field.value == null) {
                errorField.innerHTML = 'Email is required!';
            } else if (!field.value.match(email_check)) {
                errorField.innerHTML = 'Email is not valid!';
            }
        } else if (field === password) {
            if (field.value.length < 6) {
                errorField.innerHTML = 'Password length should be more than 6!';
                validationBox.style.display = "block";
            }
        } else if (field === confirmPassword) {
            if (field.value !== password.value) {
                errorField.innerHTML = 'Password doesn\'t match!';
            } else if (field.value === '' || field.value == null) {
                errorField.innerHTML = 'Password is required!';
            }
        } else if (field === age) {
            if (field.value === '' || field.value == null) {
                errorField.innerHTML = 'Age is required!';
            } else if (parseInt(field.value) < 18) {
                errorField.innerHTML = 'Age must be 18 or above!';
            }
        }else if(field ===DOB){
            if(parseInt(age.value)<18){
                DOB_error.innerHTML="Age must be 18 or above!";
            }
        }
         else if (field === male || field === female || field === others) {
            if (!male.checked && !female.checked && !others.checked) {
                checkBox_error.innerHTML = 'Please select a gender!';
            }
        } else {
            if (field.value.trim() === '') {
                errorField.innerHTML = `${field.name} is required!`;
            }
        }
    });
});



//State wise drop 
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

//state wise drop down function
 function changeValue(value) {
        const citySelect = document.getElementsByName('city')[0];
        if (value.length === 0) {
            citySelect.innerHTML = '<option disabled selected>District</option>';
        } else {
            let options = '<option disabled selected>District</option>';
            for (let id in state[value]) {
                options += "<option>" + state[value][id] + "</option>";
            }
            citySelect.innerHTML = options;
        }
    }

  // Show/Hide password
  $(".toggle-password").click(function() {
    let input = $($(this).attr('toggle'));
    if (input.attr("type") == "password") {
        input.attr('type', "text");
    } else {
        input.attr("type", "password");
    }
});

// Validation elements
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
let length = document.getElementById('length');

// Password validation on keyup
password.onkeyup = function() {
    password_error.innerHTML='';
    // Validation for lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if (password.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        password_error.innerHTML='strong password is required!';
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validation for uppercase letters
    let upperCaseLetters = /[A-Z]/g;
    if (password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        password_error.innerHTML='strong password is required!';
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validation for numbers
    let numbers = /[0-9]/g;
    if (password.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        password_error.innerHTML='strong password is required!';
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validation for length
    if (password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        password_error.innerHTML='strong password is required!';
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
};

//onkey up and onblur
function onFocusEvent(x){
    x.style.color='black'
    x.style.backgroundColor='rgb(133, 133, 136)'
  }
  function onBlurEvent(x){
    x.style.color='black'
    x.style.backgroundColor='white'
  }






