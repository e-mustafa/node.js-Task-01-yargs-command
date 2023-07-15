const fs = require("fs");

// Add command -------------------------------------------------------------
const addPerson = ({ id, fname, lname, age, city }) => {
	const personData = getData();
	console.log(personData);

	const duplicatedItems = personData?.filter((ele) => ele.id == id);

	if (duplicatedItems?.length == 0) {
		personData.push({
			id,
			fname,
			lname,
			age,
			city,
		});

		saveData(personData);
	} else {
		// throw new Error(`ID ${id} already exists`);
		console.error(`Error: ID ${id} already exists`);
	}
};

// -----------------------------------------------------
const getData = () => {
	try {
		const allData = fs.readFileSync("PersonData.json").toString();
		return JSON.parse(allData);
	} catch {
		return [];
	}
};

// -----------------------------------------------------
const saveData = (data) => {
	const personData = JSON.stringify(data).toString();
	fs.writeFileSync("PersonData.json", personData);
};

// delete command -------------------------------------------------------------
const deletePerson = (id) => {
	const personData = getData();

	const kippedData = personData.filter((ele) => ele.id != id);
	saveData(kippedData);
};

// list data ------------------------------------------------------------------
const listData = () => {
	const personData = getData();

	const showedData = personData.forEach((ele) => {
		console.log(ele.fname, ele.lname, ele.city);
	});
};

// read Item -----------------------------------------------------------------
const readItem = (id) => {
	const personData = getData();

	const requiredItem = personData.find((ele) => ele.id == id);

	if (requiredItem) {
		console.log(requiredItem);
	} else {
		console.error(`No item found with ID ${id}`);
	}
};

module.exports = {
	addPerson,
	deletePerson,
	listData,
	readItem,
};
