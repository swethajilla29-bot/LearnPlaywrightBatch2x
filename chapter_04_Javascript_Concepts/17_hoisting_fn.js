function getUserStatus() {
    // var status_code; This is internally created by JS engine (To optimize code)
    console.log(status_code);
    var status_code = 'Active';
    console.log(status_code);
}

getUserStatus();

//var function scoped, so status is hoisted to
// the top of getUserStatus(), not the global scope


