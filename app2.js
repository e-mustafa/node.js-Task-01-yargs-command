const yargs = require("yargs");

const managePerson = require("./managePerson");


// Task 2 :
// 1- to add 7 persons with ids from 1-7
yargs.command({
	command: "add",
	describe: "Add New Person",
	builder: {
		id: {
			describe: "Person Unique Id",
			demandOption: true,
			type: "number",
		},
		fname: {
			describe: "Person first name",
			demandOption: true,
			type: "string",
		},
		lname: {
			describe: "Person last name",
			demandOption: true,
			type: "string",
		},
		age: {
			describe: "Age of a person",
			type: "number",
		},
		city: {
			describe: "City where person live",
			demandOption: true,
			type: "string",
		},
	},
	handler: (data) => {
      console.log(data);
		managePerson.addPerson(data);
		console.log(" new person has been Added");
	},
});

// 2- to delete id 4 - 6
yargs.command({
	command: "delete",
	describe: "Delete some person with Id",
	builder: {
		id: {
			describe: "person Unique Id",
			demandOption: true,
			type: "number",
		},
	},
	handler: (d) => {
		managePerson.deletePerson(d.id);
      console.log("Person has been deleted");
	},
});


// 3- to list fname & lname & city for all .
yargs.command({
	command: "list",
	describe: "Show List of person's First, Last Name and city",
	handler: () => {
		managePerson.listData();
	},
});


// 4- to read all data for only the 5th person .
yargs.command({
	command: "item",
	describe: "Show all person data with his id",
	builder: {
		id: {
			describe: "person Unique Id",
			demandOption: true,
			type: "number",
		},
	},
	handler: (d) => {
      managePerson.readItem(d.id)
   },
});


// Task 2 :
// 1- to add 7 persons with ids from 1-7
// (id - fname - lname - age - city )
   // => node app2.js add --id=1 --fname="Ahmed" --lname="Ali" --age=22 --city="mansura"   
   // => node app2.js add --id=2 --fname="Mustafa" --lname="Ahmed" --age=33 --city="cairo"
   // => node app2.js add --id=3 --fname="salma" --lname="mohamed" --age=24 --city="tanta"
   // => node app2.js add --id=4 --fname="basem" --lname="mohamed" --age=28 --city="tanta"
   // => node app2.js add --id=5 --fname="aia" --lname="hasan" --age=28 --city="cairo" 
   // => node app2.js add --id=6 --fname="alaa" --lname="adel" --age=30 --city="cairo" 
   // => node app2.js add --id=7 --fname="ahmed" --lname="adel" --age=33 --city="sharm"
// -----------------------------------------------------------------------------

// 2- to delete id 4 - 6
   // => node app2.js delete --id=4
   // => node app2.js delete --id=6
// -----------------------------------------------------------------------------

// 3- to list fname & lname & city for all .
   // => node app2.js list
// -----------------------------------------------------------------------------

// 4- to read all data for only the 5th person .
   //=> node app2.js item --id=5

// -----------------------------------------------------------------------------


yargs.parse();
