
// callback
var dbQuery = function() : void {
	setTimeout(() => {
		console.log('Query logs');
	}, 3000);
}

// higher order function take a callback as a argument
function loadPage(q : () => void) {
	console.log("header");
	q();
	console.log("sidebar");
	console.log("footer");
}

loadPage(dbQuery);