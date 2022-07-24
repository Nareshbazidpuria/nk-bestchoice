document.getElementById('loginbtn').addEventListener('click',(e)=>{
    
    passvalues(e);
});

function passvalues(e) {
    try {
        let userName = document.getElementById("userNameIn").value;
        let password1 = document.getElementById("password").value;
        let userDetails = JSON.parse(localStorage.getItem(`${userName}`));

        if( password1 !== userDetails.password){
            e.preventDefault();            
            alert('incorrect password')
        }
        localStorage.setItem('userName' , userDetails.fullname)
    } catch (error) {
        e.preventDefault();            
        alert('User not found , Please register first')
    }
}