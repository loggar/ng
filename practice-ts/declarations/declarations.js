"use strict";
var n = 1;
var s = "str";
var Ns;
(function (Ns) {
    Ns.x = 'x in Ns';
})(Ns || (Ns = {}));
console.log('Ns=' + JSON.stringify(Ns));
var Cl = (function () {
    function Cl() {
        this.x = "str"; // instance member
    }
    Cl.x = 1; // static member
    return Cl;
}());
console.log('Cl.x=' + Cl.x);
var cl1 = new Cl();
console.log('cl1.x=' + cl1.x);
