function savValues() {
    var fullName = document.getElementById("fullName").value;
    var regUserName = document.getElementById("regUserName").value;
    var regEmail = document.getElementById("regEmail").value;
    var regPhone = document.getElementById("regPhone").value;
    var regPass = document.getElementById("regPass").value;
    var regPassCn = document.getElementById("regPassCn").value;
    userDetails = {
        fullname: fullName,
        usrnm: regUserName,
        email: regEmail,
        phone: regPhone,
        password: regPass
    }

    localStorage.setItem(`${regUserName}`, JSON.stringify(userDetails));
    localStorage.setItem(`userName`, fullName);
}

let submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener('click',()=>{
    checkEmpty()
});

document.getElementById("regUserName").addEventListener('blur', ()=>{
    checkUserName()
});

function checkUserName(){
    try {
        let currentUserName = document.getElementById("regUserName").value;
        let existingUser = JSON.parse(localStorage.getItem(`${document.getElementById("regUserName").value}`));
        if(currentUserName === existingUser.usrnm){            
            document.getElementById("regUserName").value = '';
            alert('username already exist, please try another');
        }
    } catch (error) {
        
    }
}

function checkEmpty(){
    if (document.getElementById("regUserName").value.trim() === '' && document.getElementById("fullName").value.trim() === '' && document.getElementById("regEmail").value.trim() === '' && document.getElementById("regPass").value.trim() === '' && document.getElementById("regPassCn").value.trim() === '' && document.getElementById("regPhone").value.trim() === '') {
        alert('Please fill all the fields');
        document.getElementById("regUserName").value = '';
        document.getElementById("fullName").value = '';
        document.getElementById("regEmail").value = '';
        document.getElementById("regPass").value = '';
        document.getElementById("regPassCn").value = '';
        document.getElementById("regPhone").value = '';
    }
    else{
        savValues()
    }
}