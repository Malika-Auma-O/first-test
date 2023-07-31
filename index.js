//this is my first JavaScript code!
 console.log("Hello World");
 let names = "Malika";
 let age = 41;
 console.log(`${names} ${age}`);

 let firstName = "Malika";
 let lastName = "Omwayi";
 console.log

 const interestRate = 0.3;

 let object = { //the curly brackets are object literal
    key: "value",  //add keys/properties: value pairs
    key2: "value2"  //put comma to move to next key, value pair
} 

//Lets reference a person object with 2 properties, name and age
let person = {
    named: "Jedia",
    aged: 16
};
//1. You can use the Dot Notation to change property value
person.named = "Samir"
console.log(person);
//You can Use the dot notation to also print only specific value of a property
console.log(person.aged);
//2. You can use bracket notation to access property
person["aged"] = 2;
console.log(person.aged)


let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors [3] = 1
console.log(selectedColors);
console.log(selectedColors[0])
console.log(selectedColors.length)

//function with 1 parameter called name. This variable is only used inside the function it was created in. It cannot be accessed outside this function
function myFirstFunction(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
//to call it, pass a value for the name parameter/variable
myFirstFunction('Malika', 'Omwayi');
myFirstFunction('Samy')

//calculate a value. use the return keyword to return the value to whoever is calling the function
function square(number) {
    return number * number;
}
console.log(square(2))

