// let is block scoped

let x = 'global';

if (true) {
    //TDZ for block scoped x starts here
    //console.log(x); -- Gives reference error here (Not global)
    let x = 'block'; //TDZ ends here
    console.log(x);
}

console.log(x);
