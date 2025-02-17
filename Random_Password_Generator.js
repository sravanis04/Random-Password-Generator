//RANDOM PASSWORD GENERATOR

function generatePassword(length,includeUpperCase,includeLowerCase,includeNumbers,includeSymbols){
    
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    const numberChars = "012345689" ;
    const symbolChars = "!@#$%^&*()_-+=";
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase?lowerCaseChars: "";
    allowedChars += includeUpperCase?upperCaseChars: "";
    allowedChars += includeNumbers?numberChars:"";
    allowedChars +=includeSymbols?symbolChars: "";

    if (length<0){
        return (`your password length should atleast 1`);
    }
    if(allowedChars.length === 0){
        return (`password contains atleast 1 set of characyer needs to be selected`);
    }
    for(let i=0;i<length;i++){
        const randIndex=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randIndex];
    }

    return password;
}

const passwordLength=12;
const includeUpperCase = true;
const includeLowerCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowerCase,
                                  includeUpperCase,
                                  includeNumbers,
                                  includeSymbols);

console.log(`Generated password : ${password}`);
