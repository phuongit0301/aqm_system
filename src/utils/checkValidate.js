let mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//let phoneformat = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
let phoneformat = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
let passwordformat = /^(?!.* ).{6,32}$/;

function checkUserName(username) {
  return passwordformat.test(username.toLowerCase());
}

function checkCode(code) {
  return passwordformat.test(code.toLowerCase());
}

function checkPassWord(password) {
  return passwordformat.test(password.toLowerCase());
}

function checkName(name) {
  if (name === '' || name.length > 32)
    return false;
  else return true;
}

function checkRegCodeUser(code) {
  if (code === '' || code.length < 6 || code.length > 32)
    return false;
  else return true;
}

function checkEmail(email) { //ok
  return mailformat.test(email.toLowerCase());
}

function checkPhoneNumber(number) {// working
  return phoneformat.test(number.toLowerCase());
}

function checkNull(input) {
  if (input === '' || input === null)
    return true;
  else return false;
}

export {checkUserName, checkPassWord, checkCode, checkEmail, checkPhoneNumber, checkNull, checkName};