let userName = 'John12456783'
let password = '@abc1234'
let usernameChecker = function (myString) {
    if ((myString.includes(3)) && (myString.length > 6)) {
        return true
    }
    else {
        return false
    }

}

let passwordChecker = function (pwd) {
    if (pwd.includes(abc) && (pwd.length > 5)) {
        return true;
    }
}

console.log(usernameChecker(userName))
console.log(usernameChecker(password))