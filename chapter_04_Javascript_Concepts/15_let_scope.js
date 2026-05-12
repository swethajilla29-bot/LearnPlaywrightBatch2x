let a = 10; // Global scope

console.log(a);

//let is  block scoped
function printHello() {
    console.log("Hi Testing academy");
    let a = 20; //Local scope
    console.log(a);

    if (true) {
        let a = 30;
        console.log(a);
    }
    console.log("F->", a);
}

printHello();
console.log("G->", a);
