let a = 10, b = 20, c = 20;

if (a === b && b === c) {
    console.log("Triangle is equilateral");
} else if (a === b || a === c || b === c) {
    console.log("isosceles trianlge");
} else if (a !== b && b !== c && a !== c) {
    console.log("scalene triangle");
} else {
    console.log("Not a triangle");
}