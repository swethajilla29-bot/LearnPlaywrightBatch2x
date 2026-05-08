// JavaScript Identifier Rules with examples

// 1. Identifiers must start with a letter, underscore (_) or dollar sign ($)
var a = 10;          // valid: starts with a letter
var _b = 20;         // valid: starts with underscore
var $c = 30;         // valid: starts with dollar sign
// var 1d = 40;      // invalid: cannot start with a digit

// 2. After the first character, identifiers can include letters, digits, _ and $
var abc123 = 123;   // valid: letters followed by digits
var _name2 = 'John'; // valid: underscore + letters + digit
var $price = 99.99;  // valid: dollar sign + letters

// 3. JavaScript identifiers are case-sensitive
var Name = 'Swetha';
var name = 'Venky';
// Name and name are different identifiers

// 4. Identifiers cannot contain spaces or special characters other than _ and $
// var my name = 'Test'; // invalid: contains a space
// var user-name = 'Test'; // invalid: contains a hyphen
// var amount% = 100; // invalid: contains a percent symbol

// 5. Identifiers cannot be JavaScript reserved keywords
// var var = 5;      // invalid: 'var' is a reserved keyword
// var function = 10; // invalid: 'function' is reserved
// var return = 20;   // invalid: 'return' is reserved

// 6. Examples of valid identifier naming styles
var firstName = 'Swetha'; // camelCase (common in JS)
var user_age = 25;        // snake_case (allowed, but less common in JS)
var $totalAmount = 500;   // permitted use of leading dollar sign
var _maxValue = 1000;     // permitted use of leading underscore

// 7. Example of an invalid identifier shown as comment
// var 2ndPlace = 'silver'; // invalid because it starts with a digit

// 8. Unicode characters are allowed in identifiers
var café = 'coffee';           // valid: unicode character in identifier
var naïve = true;              // valid: unicode character
var π = 3.14159;               // valid: Greek letter pi
var α = 1;                      // valid: Greek letter alpha
var β = 2;                      // valid: Greek letter beta
var 名前 = 'Taro';             // valid: Japanese characters (name)
var привет = 'Hello';          // valid: Cyrillic characters
var مرحبا = 'Hello';           // valid: Arabic characters
var greeting_你好 = 'Hello';   // valid: Chinese characters

// 9. Special characters: Only $ and _ are allowed (besides letters/digits)
var $cost = 100;               // valid: dollar sign allowed
var _private = 'secret';       // valid: underscore allowed (convention for private)
var __dunder__ = 'python';     // valid: multiple underscores allowed
var $$ = 'money';              // valid: multiple dollar signs allowed
var _$mix = 50;                // valid: mixing $ and _ allowed

// Invalid special characters (shown as comments)
// var my-name = 'John';       // invalid: hyphen not allowed
// var my.name = 'John';       // invalid: dot not allowed
// var my@name = 'John';       // invalid: @ symbol not allowed
// var my#name = 'John';       // invalid: # symbol not allowed
// var my%value = 100;         // invalid: percent sign not allowed
// var my&var = 50;            // invalid: ampersand not allowed
// var my*val = 10;            // invalid: asterisk not allowed
// var my!flag = true;         // invalid: exclamation mark not allowed
// var my?check = false;       // invalid: question mark not allowed
// var my[0] = 'test';         // invalid: brackets not allowed
// var my{obj} = {};           // invalid: braces not allowed
// var my(func) = () => {};    // invalid: parentheses not allowed
// var my/path = 'C:/';        // invalid: forward slash not allowed
// var my\path = 'C:\';        // invalid: backslash not allowed
// var my:value = 5;           // invalid: colon not allowed
// var my;value = 5;           // invalid: semicolon not allowed
// var my,value = 5;           // invalid: comma not allowed
// var my value = 5;           // invalid: space not allowed
