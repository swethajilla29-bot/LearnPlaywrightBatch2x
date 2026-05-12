var a = 10; // Global scope

console.log(a);

//var is function scoped
function printHello() {
    console.log("Hi Testing academy");
    var a = 20; //Local scope
    console.log(a);

    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("F->", a); //as var is function scoped, it is taking latest value of a inside the function.
}

printHello();
console.log("G->", a);
var a = 50;