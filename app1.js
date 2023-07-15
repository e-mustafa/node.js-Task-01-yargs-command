// Task 1 :

// 1) create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex )

const person = {
	fname: "ahmed",
	lname: "hossam",
	age: 20,
	city: "alex",
};



// 2) change obj to Json

const personJson = JSON.stringify(person);



// 3) store in file
const fs = require("fs");

fs.writeFileSync("task1person1.json", personJson);



// 4) read file (json)

const readPersonJson = fs.readFileSync("task1person1.json").toString();
console.log(readPersonJson);



// 5) Convert to obj

const readPersonObj = JSON.parse(readPersonJson);
console.log(readPersonObj);


// 6) Update data to ( adel ahmed , 40 , cairo)

// readPersonObj = { fname: "adel", lname: "ahmed", age: 40, city: "cairo" };
// or
readPersonObj.fname = "adel";
readPersonObj.lname = "ahmed";
readPersonObj.age = 40;
readPersonObj.city = "cairo";

console.log(readPersonObj);



// 7) convert obj to Json

const person2Json = JSON.stringify(readPersonObj)
console.log(person2Json);



// 8) store in file (writeFileSync)

// fs.appendFileSync("task1person1.json");

fs.writeFileSync("task1person2.json", person2Json);
