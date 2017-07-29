class Report {
	companyPorfile : string;

	constructor(public name : string) {
		this.companyPorfile = name;
	}
}

class Invoice extends Report {
	constructor(public name : string, public total : number) { super(name); }

	printInvoice() {
		return this.name + ", " + this.total;
	}
}

class BillOfLading extends Report {
	constructor(public name : string, public city : string, public state : string) { super(name); }
	
		printBol() {
		return this.name + ", " + this.city + ", " + this.state;
	}
}

var invoice = new Invoice('google', 200);
var bol = new BillOfLading("yahoo", "scottland", "ut");

console.log(invoice.printInvoice());
console.log(bol.printBol());