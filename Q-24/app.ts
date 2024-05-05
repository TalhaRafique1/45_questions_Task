let car: string = 'subaru';
let age: number = 20;
let numbers: number[] =[3 , 5 , 7 , 15 , 20];

// ***stringbtest***
// True test
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

// False test
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False









//*lower case function test****

// True test

console.log("Is car.toLowerCase() == 'subaru'? I predict True.")

console.log(car.toLowerCase() == 'subaru'); // True

// False test

console.log("Is car.toLowerCase() == 'toyota'? I predict False.")

console.log(car.toLowerCase() == 'toyota'); //False











// ***numerical test***


// Equality and Inequality


console.log("Is age 28? I predict True.")

console.log(age == 20); // True


console.log("Is age 125? I predict True.")


console.log(age != 125); // False










// Greater than and less than

console.log("Is age > 18? I predict True.")
console.log(age > 18); // True


console.log("Is age < 18? I predict False.")
console.log(age < 18); //False













// Greater than or equal to and less than or equal to

console.log("Is age 18? I predict True.")

console.log(age >= 18); // True



console.log("Is ag < 15? I predict True.")

console.log(age <= 15); //False
















//*** AND OR OPERATOR Test***


 // True test with "and" operatory

console.log("Is 10 age < 257 predict True.") 
console.log(age< 25 && age > 10); // True



 // False test with "or" operator

console.log("Is age > 5 or age < 15? I predict False.")

console.log(age > 20 || age < 15); // False









// test wheter an item is in array

 // True test
 console.log("Is '3' in numbers? I predict True.")
 console.log(3 in numbers); // True


 // False test
 
console.log("Is '7' in numbers? I predict False.")
console.log(7 in numbers); // False