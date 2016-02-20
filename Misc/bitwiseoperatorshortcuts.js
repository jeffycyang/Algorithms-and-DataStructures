var a=1;
var b=2;

a^=b;
b^=a;
a^=b;
//a is now 2, b is now 1, fastest way to swap two numbers

var c=21;
c=c>>1;
//c is now 10, equivalent to Math.floor(c/2)

var d=5.2
d=d<<1
//d is now 10, equivalent to Math.floor(d/2)
