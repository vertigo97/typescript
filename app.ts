
type Credentials = unknown;

let userInput: Credentials;
let userName: string;
userInput = 5;
userInput = "adoo";


if(typeof userInput === 'string'){
    userName = userInput;
}


function generateError(message: string, code: number): never{
    throw{
        message: message, errCode: code
    };
}
generateError("an errror occured", 443);
