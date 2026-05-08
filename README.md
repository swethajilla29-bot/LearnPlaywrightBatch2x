# LearnPlaywrightBatch2x

A comprehensive learning repository for **JavaScript** and **Playwright** automation framework. This project contains structured lessons progressing from basic JavaScript concepts to advanced testing scenarios.

## 📚 Project Overview

This repository is designed as a learning resource for developers who want to:
- Master JavaScript fundamentals
- Understand core programming concepts (identifiers, literals, comments)
- Learn Playwright for web automation testing
- Build automation scripts with best practices

## 📁 Project Structure

```
LearnPlaywrightBatch2x/
├── chapter_01_Basics/
│   ├── 01_Basics.js
│   ├── 02_JS.js
│   ├── 03_JS_Commands.js
│   └── 04_HotCode.js
├── chapter_02_Javascript_Basics/
│   └── 05_JS_Basics.js
├── chapter_03_Identifier_Literals/
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Part2.js
│   ├── 08_Comments.js
│   ├── VS_Code_Keyboard_shortcuts_windows.md
│   └── VS_Code_Keyboard_shortcuts_mac.md
└── README.md
```

## 📖 Chapter Breakdown

### Chapter 01: Basics
Introduction to JavaScript fundamentals with practical examples covering:
- **01_Basics.js** - Core JavaScript concepts
- **02_JS.js** - JavaScript language features
- **03_JS_Commands.js** - Common JavaScript commands and operations
- **04_HotCode.js** - Hot tips and tricks

### Chapter 02: JavaScript Basics
Deep dive into JavaScript fundamentals:
- **05_JS_Basics.js** - Essential JavaScript concepts and syntax

### Chapter 03: Identifier and Literals
Understanding variable naming conventions and code structure:
- **06_Identifier_Rules.js** - JavaScript identifier rules with comprehensive examples
  - Valid identifier patterns
  - Case sensitivity
  - Unicode character support
  - Special character usage
  
- **07_Identifier_Part2.js** - Best practices for identifiers
  - Naming conventions (camelCase, PascalCase, CONSTANT_CASE, etc.)
  - When to use each convention
  - Do's and Don'ts
  - Practical examples from real-world applications
  
- **08_Comments.js** - Comment best practices and styles

## 🛠 Tools & Resources

### VS Code Keyboard Shortcuts
Quick reference guides for productivity:
- **VS_Code_Keyboard_shortcuts_windows.md** - Complete shortcut list for Windows users
- **VS_Code_Keyboard_shortcuts_mac.md** - Complete shortcut list for Mac users

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- VS Code or any JavaScript IDE
- Basic understanding of programming concepts

### Installation

1. **Clone or download the repository:**
   ```bash
   git clone <repository-url>
   cd LearnPlaywrightBatch2x
   ```

2. **Open in VS Code:**
   ```bash
   code .
   ```

3. **Run JavaScript files:**
   ```bash
   node chapter_01_Basics/01_Basics.js
   ```

## 📝 Key Concepts Covered

### Identifiers
- Naming rules and conventions
- Valid and invalid identifier patterns
- Unicode support
- Special character usage

### Naming Conventions
- **camelCase** - for variables, functions, methods
- **PascalCase** - for classes and constructors
- **CONSTANT_CASE** - for constants
- **snake_case** - less common in JavaScript
- **kebab-case** - for HTML/CSS (not variables)

### Comments
- Single-line comments (`//`)
- Multi-line comments (`/* */`)
- Documentation comments (`/** */`)
- Best practices for code documentation

## 💡 Quick Tips

### Fix Code Indentation in VS Code
```
Windows/Linux: Shift + Alt + F
Mac: Shift + Option + F
```

### Format Selected Code
```
Windows/Linux: Ctrl + K, Ctrl + F
Mac: Cmd + K, Cmd + F
```

### Open Command Palette
```
Windows/Linux: Ctrl + Shift + P
Mac: Cmd + Shift + P
```

## 📚 Learning Path

1. Start with **Chapter 01** to understand JavaScript basics
2. Progress to **Chapter 02** for deeper JavaScript concepts
3. Complete **Chapter 03** to master identifiers and code structure
4. Use the keyboard shortcut guides for VS Code efficiency
5. Apply best practices in your own projects

## 🎯 Best Practices

### Variable Naming
```javascript
// ✓ DO
var firstName = 'John';      // camelCase for variables
const MAX_USERS = 100;       // CONSTANT_CASE for constants
class UserProfile {}         // PascalCase for classes

// ✗ DON'T
var x = 'John';             // Avoid single letters
var firstName_lastName = ''; // Avoid mixing styles
var 123name = '';           // Can't start with digit
```

### Code Comments
```javascript
// Use comments to explain "why", not "what"
// ✓ Good: Explains the business logic
var timeout = 5000; // Allow 5 seconds before considering request timeout

// ✗ Bad: Obvious from code
var timeout = 5000; // Set timeout to 5000
```

## 🔗 Resources

- [JavaScript MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- [Playwright Documentation](https://playwright.dev/)
- [VS Code Official Documentation](https://code.visualstudio.com/docs)

## 📝 Notes

- All JavaScript files can be executed directly with Node.js
- Examples are practical and include both valid and invalid patterns
- Code follows best practices and modern JavaScript conventions

## 🤝 Contributing

Feel free to:
- Add more examples to existing chapters
- Create new chapters for advanced topics
- Improve documentation and comments
- Fix any issues or typos

## 📄 License

This project is open for educational purposes. Feel free to use and modify as needed.

## 👨‍🎓 Author

**Swetha Venkatesh** - Created as a learning and reference resource

---

**Last Updated:** May 8, 2026

**Version:** 1.0

For questions or improvements, feel free to reach out or create an issue!
