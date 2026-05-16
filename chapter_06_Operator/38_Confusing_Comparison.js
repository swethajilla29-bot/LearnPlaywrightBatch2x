// 38_Confusing_Comparison.js

// == performs type coercion before comparison.
// === compares both value and type without coercion.

console.log('1 == "1" :', 1 == '1'); // true
console.log('1 === "1" :', 1 === '1'); // false

console.log('0 == false :', 0 == false); // true
console.log('0 === false :', 0 === false); // false

console.log('null == undefined :', null == undefined); // true
console.log('null === undefined :', null === undefined); // false

console.log('[] == false :', [] == false); // true
console.log('[] === false :', [] === false); // false

console.log('[1] == 1 :', [1] == 1); // true
console.log('[1] === 1 :', [1] === 1); // false

console.log('"" == 0 :', '' == 0); // true
console.log('"" === 0 :', '' === 0); // false

console.log('" \t\n" == 0 :', ' \t\n' == 0); // true due to whitespace trimming and coercion
console.log('" \t\n" === 0 :', ' \t\n' === 0); // false

// Best practice: use === unless you explicitly want loose coercion behavior.
const a = null;
const b = undefined;
if (a === b) {
    console.log('strict equality says equal');
} else {
    console.log('strict equality says not equal');
}

if (a == b) {
    console.log('loose equality says equal');
} else {
    console.log('loose equality says not equal');
}
