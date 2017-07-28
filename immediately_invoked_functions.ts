var names : string[] = ['gordon', 'cami', 'amego'];
var counter : number = 0;

(function() {
	for (let name in names){
		counter++;
	}
})();

console.log(counter);