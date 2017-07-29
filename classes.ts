class Invoice {
	companyProfile : string;

	constructor(public name, public city, public state) {
		this.companyProfile = name + ", " + city + ", " + state;
	}
}

var googleInvoice = new Invoice('Google', 'mountain view', 'state');
var yahooInvoice = new Invoice('yahoo', 'stuff', 'state');

console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);