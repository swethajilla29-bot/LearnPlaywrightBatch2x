// 23_null_vs_undefined.js

// null and undefined are both used to represent absence of a value,
// but they are not the same.

// undefined is the default value for variables that are declared but not initialized.
let a;
console.log('a:', a); // undefined
console.log('typeof a:', typeof a); // undefined

// null is an assignment value that represents "no value" intentionally.
let b = null;
console.log('b:', b); // null
console.log('typeof b:', typeof b); // object (this is a well-known JavaScript quirk)

// Comparisons between null and undefined
console.log('null == undefined:', null == undefined); // true (loose equality)
console.log('null === undefined:', null === undefined); // false (strict equality)

// Example: function returns undefined by default when no return value is specified
function doNothing() { }
const result = doNothing();
console.log('result:', result); // undefined

// Example: use null when you explicitly want to clear a value
let user = { name: 'Alice' };
user = null;
console.log('user:', user); // null

// Example: undefined usually indicates missing or uninitialized data
let settings = {
    theme: 'dark',
};
console.log('settings.language:', settings.language); // undefined
