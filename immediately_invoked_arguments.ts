// function expression
var fullNametaco : (first : string, last : string) => string;

fullNametaco = function(first : string, last : string) {
	return first + " " + last;
}

console.log(fullNametaco('gordon', 'taco'));

// immediately invoked version
// will run right away
// 
(function(first : string, last : string){
	console.log(first + " " + last);
})('Cami', 'Wallace');

