let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("You have all rights");
    } else if (userRole === "editor") {
        console.log("You have edit access");
    } else if (userRole === "viewer") {
        console.log("You have read only access");
    } else {
        console.log("No idea. You may be a guest role")
    }
} else {
    console.log("You are not logged in");
}