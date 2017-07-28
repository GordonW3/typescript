// function expression
var fullNametaco;
fullNametaco = function (first, last) {
    return first + " " + last;
};
console.log(fullNametaco('gordon', 'taco'));
// immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Cami', 'Wallace');
//# sourceMappingURL=immediately_invoked_arguments.js.map