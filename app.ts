// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Person name in Lower Case: 
let personName: string= "Usman";
console.log("LowerCase:",personName.toLowerCase());

// Person Name in Upper Case:

console.log("UpperCase:",personName.toUpperCase());

// Person Name in Title Case:

console.log("TitleCase:",personName.replace(/\bw/g,c => c.toUpperCase()));