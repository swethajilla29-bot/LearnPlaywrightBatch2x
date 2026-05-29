let username = "DEV";
let password = "secure123";
let isAccountLogged = true;

if ((username === "DEV" && password === "secure123") && !isAccountLogged) {
    console.log("Allowed to login");
} else {
    console.log("Not allowed to login");
}