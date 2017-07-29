@detailedLog('billing')
class PayableAccounts {
	constructor() {}
}

@detailedLog('warehouse')
class ProductManaagererer {
	constructor() {}
}

function detailedLog(dashboard : string) {
	if (dashboard == 'billing') {
		console.log("working in the billing department");
		return function (target : Object) {};
	} else {
		return function (target : Object) {};
	}
}

var post = new PayableAccounts;
var pm = new ProductManaagererer;