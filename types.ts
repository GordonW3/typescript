// Boolean - true or false variables
let paidAccount : boolean = true;

// Number - it can be any number

let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "Gordon Wallace"

// Array - need the type in front of the first []
var ages : number[] = [33, 12, 53];

// Tuple - you have to know how many items you are adding.
let player : [number, string, number, boolean];
player = [3, "name", 4.5, true]; 

// Enum
enum Stage {Approved, Pending, Rejected};
let job : Stage = Stage.Pending;

// Any - add any data type you want
var apiData : any[] = [123, 'taco', false];

// void - specific to functions
function printOut(msg: string) : void {
	console.log(msg);
}