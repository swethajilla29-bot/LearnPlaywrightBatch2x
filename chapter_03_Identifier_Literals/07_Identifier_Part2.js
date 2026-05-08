// JavaScript Identifier Best Practices with Examples

// ============================================
// 1. NAMING CONVENTIONS
// ============================================

// 1.1 camelCase (Most Common for Variables and Functions)
// Used for: variables, function names, object properties, methods
var firstName = 'John';
var lastName = 'Doe';
var age = 30;
var isActive = true;

function calculateTotalPrice() {
    // function body
}

const getUserInfo = () => {
    // function body
};

var user = {
    firstName: 'John',
    lastName: 'Doe',
    getUserName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

// ============================================

// 1.2 PascalCase (Used for Classes and Constructors)
// Used for: class names, constructor functions, components (React)
class UserAccount {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getUserDetails() {
        return `${this.name} - ${this.email}`;
    }
}

class PaymentProcessor {
    processPayment(amount) {
        // payment logic
    }
}

// React Component Example
function UserProfile() {
    return '<div>User Profile</div>';
}

function ShoppingCart() {
    return '<div>Shopping Cart</div>';
}

// ============================================

// 1.3 CONSTANT_CASE (Used for Constants)
// Used for: constants, global constants, magic numbers
const MAX_USERS = 100;
const MIN_PASSWORD_LENGTH = 8;
const DEFAULT_TIMEOUT = 5000;
const API_BASE_URL = 'https://api.example.com';
const DATABASE_NAME = 'myDatabase';

const COLOR_PRIMARY = '#FF5733';
const COLOR_SECONDARY = '#33FF57';

// ============================================

// 1.4 snake_case (Less Common in JavaScript, but Acceptable)
// More common in Python/Ruby, but can be used for file names, database fields
var user_name = 'john_doe';  // Less recommended in JS
var user_email = 'john@example.com';  // Less recommended in JS
// File names: user_controller.js, db_connection.js

// ============================================

// 1.5 kebab-case (Used for HTML Attributes and CSS Classes - NOT for variables)
// Used for: HTML data attributes, CSS classes, file names
// <div class="user-profile"></div>
// <input data-user-id="123">
// File names: user-controller.js, payment-service.js

// ============================================
// 2. WHEN TO USE EACH NAMING CONVENTION
// ============================================

// Variables: camelCase
var studentName = 'Alice';
var totalScore = 95;
var isApproved = true;

// Functions: camelCase
function calculateGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    return 'C';
}

function validateEmail(email) {
    return email.includes('@');
}

// Classes: PascalCase
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}

// Constants: CONSTANT_CASE
const PASSING_SCORE = 60;
const TOTAL_CLASSES = 15;
const SEMESTER_DURATION_DAYS = 180;

// ============================================
// 3. PRACTICAL EXAMPLES BY USE CASE
// ============================================

// 3.1 E-Commerce Application
const CART_MAX_ITEMS = 50;
const DISCOUNT_PERCENTAGE = 10;

var cartItems = [];
var totalCartPrice = 0;
var isCheckoutValid = false;

function addToCart(product) {
    cartItems.push(product);
}

function applyDiscount(price) {
    return price * (1 - DISCOUNT_PERCENTAGE / 100);
}

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getDiscountedPrice() {
        return applyDiscount(this.price);
    }
}

// 3.2 User Authentication Module
const MAX_LOGIN_ATTEMPTS = 3;
const SESSION_TIMEOUT_MS = 3600000; // 1 hour

var currentUser = null;
var isLoggedIn = false;
var loginAttempts = 0;

function authenticateUser(username, password) {
    // authentication logic
}

class AuthenticationService {
    constructor() {
        this.users = [];
    }

    registerUser(username, email) {
        // registration logic
    }

    loginUser(username, password) {
        // login logic
    }
}

// 3.3 Data Processing Application
var processedDataArray = [];
var totalRecordsProcessed = 0;
var isProcessingComplete = false;

const MAX_BATCH_SIZE = 1000;
const RETRY_ATTEMPTS = 3;

function processDataBatch(data) {
    // processing logic
}

class DataProcessor {
    constructor(batchSize) {
        this.batchSize = batchSize;
        this.processedCount = 0;
    }

    processBatch(data) {
        // batch processing logic
    }
}

// ============================================
// 4. DO's AND DON'Ts
// ============================================

// ✓ DO's

// Use descriptive, meaningful names
var userAge = 25;  // Good
var numberOfUsers = 10;  // Good
var isActive = true;  // Good

// Use full words instead of abbreviations
var numberOfStudents = 50;  // Good
// var numOfStudents = 50;  // Less clear

// Use consistent naming throughout project
var firstName = 'John';
var lastName = 'Doe';
var emailAddress = 'john@example.com';  // All consistent style

// ✗ DON'Ts

// Avoid single letter variables (except for loop counters)
// var x = 10;  // Bad
// var y = 20;  // Bad
// var z = x + y;  // Hard to understand

// Avoid ambiguous or vague names
// var data = {};  // Too vague
// var value = 100;  // Too generic
// var temp = 'hello';  // Unclear purpose

// Avoid mixing naming conventions
// var user_name = 'John';  // Don't mix
// var lastName = 'Doe';    // styles in same

// Avoid names that are too similar
// var userName = 'John';
// var username = 'john';  // Confusing, too similar

// ============================================
// 5. SPECIAL NAMING CONVENTIONS
// ============================================

// Private properties/methods (convention, not enforced)
class BankAccount {
    constructor(balance) {
        this._balance = balance;  // Convention: protected/private
    }

    _validateTransaction(amount) {  // Convention: private method
        return amount > 0;
    }

    withdrawMoney(amount) {
        if (this._validateTransaction(amount)) {
            this._balance -= amount;
        }
    }
}

// Boolean variables: use "is", "has", "can" prefix
var isValid = true;
var isActive = false;
var hasPermission = true;
var canDelete = false;
var isEmpty = true;

// ============================================
// 6. NAMING BY CONTEXT
// ============================================

// API/Server-related
var apiEndpoint = '/api/users';
var apiResponse = null;
var apiErrorMessage = '';

// Database-related
var databaseConnection = null;
var queryResult = [];
var databaseSchema = {};

// Event handlers (often use "on" or "handle" prefix)
function onClick() { }
function onSubmit() { }
function handleUserInput() { }
function handleFormSubmit() { }

// Callback functions
function fetchUser(userId, callback) {
    // callback(userData)
}

function processFile(filePath, onSuccess, onError) {
    // onSuccess(result)
    // onError(error)
}
