let isVerified = true
let isPresent = true;
let isDisplayed = false

if(isDisplayed || isPresent && isDisplayed){
    console.log('User present')
}else if( !isPresent && isVerified){
    console.log('User is Present and verified')
}else{
    console.log('Please contact us by dialing this phone number.')
}