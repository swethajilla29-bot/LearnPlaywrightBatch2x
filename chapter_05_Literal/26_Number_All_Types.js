// 26_Number_All_Types.js

// JavaScript has one primary numeric primitive type: Number.
// It also supports BigInt for arbitrarily large integers.

// 1. Decimal numbers
const decimal = 42;
const floatNumber = 3.14159;
console.log('decimal:', decimal); // 42
console.log('floatNumber:', floatNumber); // 3.14159

// 2. Binary, octal, and hexadecimal literals
const binary = 0b101010; // binary literal
const octal = 0o52; // octal literal
const hex = 0x2A; // hexadecimal literal
console.log('binary:', binary); // 42
console.log('octal:', octal); // 42
console.log('hex:', hex); // 42

// 3. Numeric separators for readability
const largeNumber = 1_000_000;
const versionNumber = 0xFF_FF;
console.log('largeNumber:', largeNumber); // 1000000
console.log('versionNumber:', versionNumber); // 65535

// 4. Special Number values
const notANumber = NaN;
const positiveInfinity = Infinity;
const negativeInfinity = -Infinity;
console.log('NaN:', notANumber); // NaN
console.log('Infinity:', positiveInfinity); // Infinity
console.log('-Infinity:', negativeInfinity); // -Infinity

// NaN is a Number value, but it is not equal to itself.
console.log('NaN === NaN:', NaN === NaN); // false
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); // true

// 5. BigInt for large integer values
const bigIntValue = 9007199254740991n; // the largest safe integer as BigInt
const hugeBigInt = 123456789012345678901234567890n;
console.log('bigIntValue:', bigIntValue); // 9007199254740991n
console.log('hugeBigInt:', hugeBigInt); // 123456789012345678901234567890n

// BigInt cannot be mixed with Number in arithmetic without explicit conversion.
const sum = BigInt(10) + 20n;
console.log('sum (BigInt):', sum); // 30n

// 6. Safe integer checks
console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log('Number.MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log('Number.isSafeInteger(9007199254740991):', Number.isSafeInteger(9007199254740991)); // true
console.log('Number.isSafeInteger(9007199254740992):', Number.isSafeInteger(9007199254740992)); // false

// 7. Converting strings to numbers
console.log('Number("123"):', Number('123')); // 123
console.log('parseInt("0x2A"):', parseInt('0x2A')); // 42
console.log('parseFloat("3.14"):', parseFloat('3.14')); // 3.14
