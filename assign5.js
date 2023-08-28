const regurl = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[.][a-zA-Z]+$/;

function validateURL(wenurl) {
    if (regurl.test(wenurl)) {
        console.log("Input matches the valid URL format.");
    } else {
        console.log("Input does not match the valid URL format.");
    }
}


validateURL("http://www.example.com");
validateURL("https://sub.example.co.uk");
validateURL("ftp://invalid.url");
