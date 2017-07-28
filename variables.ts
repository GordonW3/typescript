// var fullName : string = "Gordon Wallace";
// let paidAccount : boolean = true;
// const versionNumber : number = 1.3;

// fullName = "taco";
// paidAccount = false;


// console.log(fullName);
// console.log(paidAccount);
// console.log(versionNumber);

function printName(f, l) {
	// cant redefine let statements
	// you can redefine var statements if you use the same data type.
	let greeting : string = "hello world,";
	console.log(greeting + f + " " + l )

	greeting = "WHO WANTS TACOS?!?!?,";
	console.log(greeting + f + " " + l )
}

printName("gordon", "wallace");