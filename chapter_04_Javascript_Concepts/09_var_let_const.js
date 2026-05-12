var v = 10;
let l = 30;
const c = 3.14;

var browser = 'chrome';
var browser = 'firefox'; //can be redeclared
browser = 'edge'; //can be reassigned

// for functions

var testCases = ["login", "logout", "signup"];

console.log("length of testCases:", testCases.length);

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);

say();
function say() {
    console.log("Hi from function");
}