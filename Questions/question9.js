function checkPassword(password) {
    let minLength = 8;
    let special = /\$/;

    if (password.length >= minLength && special.test(password)) {
        return true;
    }
    else {
        return false;
    }
}

let userPass = 'myPd122rr$';
let validate = checkPassword(userPass);;

if (validate) {
    console.log('Password is valid')
} else {
    console.log('Password is not valid and short')
}