// 29_Backtick_single_double.js

// JavaScript provides three ways to create strings: single quotes, double quotes, and backticks.

// 1. Single quotes
const singleQuote = 'Hello, World!';
console.log('Single quote:', singleQuote); // Hello, World!

// 2. Double quotes
const doubleQuote = "Hello, World!";
console.log('Double quote:', doubleQuote); // Hello, World!

// 3. Backticks (Template Literals)
const backtick = `Hello, World!`;
console.log('Backtick:', backtick); // Hello, World!

// Comparison: All three produce the same output for simple strings
console.log('singleQuote === doubleQuote:', singleQuote === doubleQuote); // true
console.log('doubleQuote === backtick:', doubleQuote === backtick); // true

// Key differences:

// Single and double quotes are functionally identical
// Choice is based on preference or coding style.
const withApostrophe = "It's a beautiful day"; // double quotes avoid escaping
const escaped = 'It\'s a beautiful day'; // single quotes need escaping
console.log('withApostrophe:', withApostrophe); // It's a beautiful day
console.log('escaped:', escaped); // It's a beautiful day

// Backticks enable string interpolation with ${expression}
const name = 'Alice';
const age = 30;
const singleInterpolation = `My name is ${name} and I'm ${age} years old.`;
console.log('singleInterpolation:', singleInterpolation); // My name is Alice and I'm 30 years old.

// Backticks support multi-line strings without concatenation
const multiLineSingle = 'Line 1\nLine 2\nLine 3';
const multiLineBacktick = `Line 1
Line 2
Line 3`;
console.log('multiLineSingle:', multiLineSingle);
console.log('multiLineBacktick:', multiLineBacktick);
