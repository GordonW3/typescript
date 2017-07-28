// the ? makes it optional.
// cant have required arguments after optional arguments
// default arguments can go anywhere.
// function printAddress(street: string, streetTwo?: string, state = "UT") {
// 	console.log(street);
// 	if(streetTwo) {
// 	console.log(streetTwo);
// 	}
// 	console.log(state);
// }

// printAddress("taco monkey", "fdididi");
// printAddress("taco", "yellow", "AZ");
// printAddress("taco o o o o");


// ... you can have any number of arguments
function lineupCard(team: string, ...players: string[]) {
	console.log('team: ' + team);
	for (let player of players) {
		console.log(player);
	}
}


lineupCard('amegos', 'jesus', 'juan', 'uno')