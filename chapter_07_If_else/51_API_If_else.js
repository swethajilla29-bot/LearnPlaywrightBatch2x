let statusCode = 200;

if (statusCode === 200) {
    console.log("API is working fine success status code");
} else if (statusCode === 404) {
    console.log("Not found");
} else if (statusCode === 500) {
    console.log("Internal server error");
} else {
    console.log("Not a status code");
}