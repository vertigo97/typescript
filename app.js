"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "adoo";
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message, errCode: code
    };
}
generateError("an errror occured", 443);
