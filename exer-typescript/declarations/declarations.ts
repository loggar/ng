type Y = number;

namespace N {
	export type Y = string;
}

var n: Y = 1;
var s: N.Y = "str";

namespace Ns {
	export var x: string = 'x in Ns';
}

console.log('Ns=' + JSON.stringify(Ns));

class Cl {
	static x: number = 1;	// static menber
	x: string = "str";		// instance member
}

console.log('Cl.x=' + Cl.x);

var cl1 = new Cl();
console.log('cl1.x=' + cl1.x);
