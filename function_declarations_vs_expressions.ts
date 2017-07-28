function fullerName (first: string, last: string) : string {
	return first + " " + last;
}

var otherFullerName : (first : string, last : string) => string;

otherFullerName = function (first : string, last : string) {
	return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;
}

console.log(fullerName('taco', 'amego'))
console.log(otherFullerName('YOLO', 'amego'))
console.log(thirdFullName('MONKEY', 'amego'))
