let fName = document.getElementById('fName');
let uName = document.getElementById('uName');
let uEmail = document.getElementById('uEmail');
let phNo = document.getElementById('phNo');
let password = document.getElementById('password');
let cPassword = document.getElementById('cPassword');
let checkbox = document.getElementsByClassName('checkbox');
let submitBtn = document.getElementById('submitBtn');

let genderMale = document.getElementById('male');
let genderfeMale = document.getElementById('female');
let genderNone = document.getElementById('none');
// console.log(genderMale)

function checkVal() {
    // console.log(uName.nextElementSibling.nextElementSibling)
    if (fName.value.length >= 5) {
        fName.nextElementSibling.nextElementSibling.classList.add("chkVisible")
        fName.nextElementSibling.classList.remove("wrongVis")
        // return true
    }
    if (fName.value.length <= 5) {
        fName.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
        // fName.nextElementSibling.classList.add("wrongVis")

        // return true
    }

    if (uName.value.length >= 4) {
        uName.nextElementSibling.nextElementSibling.classList.add("chkVisible")
        uName.nextElementSibling.classList.remove("wrongVis")
        // return true

    }
    if (uName.value.length <= 4) {
        uName.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
        // uName.nextElementSibling.classList.add("wrongVis")
        // return true

    }

    if (uEmail.value.length >= 5) {
        uEmail.nextElementSibling.nextElementSibling.classList.add("chkVisible")
        uEmail.nextElementSibling.classList.remove("wrongVis")

    }
    if (uEmail.value.length <= 5) {
        uEmail.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
        // uEmail.nextElementSibling.classList.add("wrongVis")
        // return false

    }

    if (phNo.value.length >= 5) {
        phNo.nextElementSibling.nextElementSibling.classList.add("chkVisible")
        phNo.nextElementSibling.classList.remove("wrongVis")

    }
    if (phNo.value.length <= 5) {
        phNo.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
        // phNo.nextElementSibling.classList.add("wrongVis")
        // return false

    }


    if (password.value.length >= 3) {
        password.nextElementSibling.nextElementSibling.classList.add("chkVisible")
        password.nextElementSibling.classList.remove("wrongVis")

    }
    if (password.value.length <= 3) {
        password.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
        // password.nextElementSibling.classList.add("wrongVis")
        // return false

    }
}
function comparePassword() {
    if (cPassword.value === password.value) {
        cPassword.nextElementSibling.nextElementSibling.classList.add("chkVisible")
        cPassword.nextElementSibling.classList.remove("wrongVis")

    } else {
        cPassword.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
        cPassword.nextElementSibling.classList.add("wrongVis")

        // alert('Password not matched!!!')
    }
}

// function submitHandler(e) {
//     e.preventDefault()
// }
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (fName.value === '') {
        fName.nextElementSibling.classList.add("wrongVis")
        alert('Kindly Enter First Name')

        return false;
    }
    if (uName.value === '') {
        uName.nextElementSibling.classList.add("wrongVis")
        alert('Kindly Enter User Name')

        return false;
    }
    if (uEmail.value === '') {
        uEmail.nextElementSibling.classList.add("wrongVis")
        alert('Kindly Enter Email')

        return false;
    }
    if (phNo.value === '') {
        phNo.nextElementSibling.classList.add("wrongVis")
        alert('Kindly Enter Phone Number')

        return false;
    }
    if (password.value === '') {
        password.nextElementSibling.classList.add("wrongVis")
        alert('Kindly Enter Password')

        return false;
    }
    if (cPassword.value === '') {
        cPassword.nextElementSibling.classList.add("wrongVis")
        alert('Kindly enter the confirm password')

        return false;
    }
    if (cPassword.value !== password.value) {
        cPassword.nextElementSibling.classList.add("wrongVis")
        alert('Password Not Matched!!')

        return false;
    }
    // if (fName.value === '' || uName.value === '' || uEmail === '' || phNo.value === '' || password.value === '' || cPassword.value === '') {
    //     alert('fill all details')
    //     return false;
    // }
    if (genderMale.checked) {
        // console.log('male')
        alert('submitted')
        clearValues()
        return true
    } else if (genderfeMale.checked) {
        alert('submitted')
        clearValues()

        return true
    } else if (genderNone.checked) {
        alert('submitted')
        clearValues()

        return true
    } else {
        alert('select gender')
        return false
    }


})
function clearValues() {
    fName.value = '';
    uName.value = '';
    uEmail.value = '';
    phNo.value = '';
    password.value = ''
    cPassword.value = ''
    fName.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
    uName.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
    uEmail.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
    phNo.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
    password.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
    cPassword.nextElementSibling.nextElementSibling.classList.remove("chkVisible")
    genderMale.checked = false;
    genderfeMale.checked = false;
    genderNone.checked = false;
}