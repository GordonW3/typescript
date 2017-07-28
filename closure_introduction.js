// functions have access to any public variables in the outer scope
// function nameFunction(name: string) : void {
// 	var n : string = name;
// 	function printName() {
// 		console.log(n);
// 	}
// 	printName();
// }
// nameFunction('Cami');
//  ********
// the inner funciton maintain access to the outer scope even after the values are returned!
// function nameFunction(name: string)  {
// 	var n : string = name;
// 	 return function() {
// 		console.log(n);
// 	}
// }
// var nameAgain = nameFunction('Camo');
// nameAgain();
//  ************
function lineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
var pitchers = lineup();
console.log(pitchers.currentBatter());
//# sourceMappingURL=closure_introduction.js.map