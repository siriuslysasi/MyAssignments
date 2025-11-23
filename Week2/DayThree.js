let company = "Testleaf";
let reversedCompany = "";
for(let i=company.length;i>=0;i--){
    reversedCompany += company.charAt(i);
}

console.log(reversedCompany);

/*<------------------------------------------------------------------------------>*/
//Assignments
//1
function lastWordLength(input) {
    const output = input.trim().split(" ");
    const lastWordLength = output[output.length-1].length;
    return lastWordLength;
}

console.log(lastWordLength("Hello world"));

//2
console.log(lastWordLength(" fly me to the moon "));

//3
function isAnagram(str1, str2) {

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1.length !== str2.length){
        return false;
    }

    const outputStr1 = str1.split('').sort().join('');
    const outputStr2 = str2.split('').sort().join('');

    if(outputStr1 === outputStr2){
        return true;
    }
    
    return false;
    


}
console.log(isAnagram("silent","listen"));


/*<------------------------------------------------------------------------------>*/
//Functions

//Task1
function userProfile(name){
    console.log(`Hello ${name}`)
}
userProfile("Sasi");

//Task2
const double = (num) => num*num;
console.log(double(10));

//Task3
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//Task4
function getUserData(callback) {
    setTimeout(function() {
        callback("Call Back Function");  
    }, 3000);
}

getUserData(function(message) {
    console.log(message);
});