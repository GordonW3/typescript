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
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('team: ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
lineupCard('amegos', 'jesus', 'juan', 'uno');
//# sourceMappingURL=function_arg.js.map