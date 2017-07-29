@detailedLog('billing')
class PayableAccounts {
	constructor() {}

	@admin

	deleteAccount() {
		console.log('you have destroyed the account!!!')
	}
}

function detailedLog(dashboard : string) {
	if (dashboard == 'billing') {
		console.log("working in the billing department");
		return function (target : Object) {};
	} else {
		return function (target : Object) {};
	}
}

function admin(target : Object, porpertyKey : string, descriptor : TypedPropertyDescriptor<any>) : any {
	console.log('doing admin check')
	return descriptor
}

var post = new PayableAccounts;
post.deleteAccount();


// doing admin check
// working in the billing department
// you have destroyed the account!!!