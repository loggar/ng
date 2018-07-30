"use strict";
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello World');
        console.log('And watch test');
        return 0;
    };
    return Startup;
}());
console.log("abc");
Startup.main();
