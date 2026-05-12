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
}

printHello();

var a = 50;