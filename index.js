/*
Function which verifies that a coupon code is valid and is not expired.
A coupon is no more valid on the day AFTER the expiration date. 
*/

valToken = (enteredCode, correctCode, currentDate, expirationDate) => {
   if (enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)) {
       return true;
    } else {
        return false;
    }
}

module.exports = valToken;
