var display = document.querySelector("#display");
var clear = document.querySelector("#clear");
var Back = document.querySelector("#back");
var One = document.querySelector("#one");
var Two = document.querySelector("#two");
var Three = document.querySelector("#three");
var Four = document.querySelector("#four");
var Five = document.querySelector("#five");
var Six = document.querySelector("#six");
var Seven = document.querySelector("#seven");
var Eight = document.querySelector("#eight");
var Nine = document.querySelector("#nine");
var Zero = document.querySelector("#zero");
var X = document.querySelector("#x");
var Sqrt = document.querySelector("#sqrt");
var Exp = document.querySelector("#exp");
var Openpa = document.querySelector("#openpa");
var Closepa = document.querySelector("#closepa");
var PI = document.querySelector("#pi");
var E = document.querySelector("#e");
var Pow = document.querySelector("#pow");
var Xt = document.querySelector("#xt");
var X10 = document.querySelector("#x10");
var Lg = document.querySelector("#log");
var Inn = document.querySelector("#in");
var Fact = document.querySelector("#fact");
var XY = document.querySelector("#xy");
var Tri = document.querySelector("#Triginometry");
var Fn = document.querySelector("#fn");
Tri.addEventListener("click", function () {
    if (Tri.value == "sin") {
        display.value = Math.sin(display.value);
        console.log(display.value);
    }
    if (Tri.value == "cos") {
        display.value = Math.cos(display.value);
        console.log(display.value);
    }
    if (Tri.value == "tan") {
        display.value = Math.tan(display.value);
        console.log(display.value);
    }
    if (Tri.value == "sec") {
        display.value = 1 / Math.cos(display.value);
    }
    if (Tri.value == "csc") {
        display.value = 1 / Math.sin(display.value);
    }
    if (Tri.value == "cot") {
        display.value = 1 / Math.tan(display.value);
    }
    Tri.value = "";
});
Fn.addEventListener("click", function () {
    if (Fn.value == "miX") {
        display.value = Math.abs(display.value);
    }
    else if (Fn.value == "rand") {
    }
    Fn.value = "";
});
clear.addEventListener("click", function () {
    display.value = "";
});
Back.addEventListener("click", function () {
    var no = display.value.slice(0, -1);
    display.value = no;
});
One.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "1";
    }
    else {
        display.value = display.value + "1";
    }
});
Two.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "2";
    }
    else {
        display.value = display.value + "2";
    }
});
Three.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "3";
    }
    else {
        display.value = display.value + "3";
    }
});
Four.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "4";
    }
    else {
        display.value = display.value + "4";
    }
});
Five.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "5";
    }
    else {
        display.value = display.value + "5";
    }
});
Six.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "6";
    }
    else {
        display.value = display.value + "6";
    }
});
Seven.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "7";
    }
    else {
        display.value = display.value + "7";
    }
});
Eight.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "8";
    }
    else {
        display.value = display.value + "8";
    }
});
Nine.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "9";
    }
    else {
        display.value = display.value + "9";
    }
});
Zero.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "0";
    }
    else {
        display.value = display.value + "0";
    }
});
X.addEventListener("click", function () {
    display.value = Math.abs(display.value);
});
Sqrt.addEventListener("click", function () {
    display.value = Math.sqrt(display.value);
});
Exp.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "0.e+0";
    }
    else {
        display.value = display.value + "2.718281";
    }
});
Openpa.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "(";
    }
    else {
        display.value = display.value + "(";
    }
});
Closepa.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = ")";
    }
    else {
        display.value = display.value + ")";
    }
});
PI.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "3.14";
    }
    else {
        display.value = display.value + "3.14";
    }
});
E.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "2.718281";
    }
    else {
        display.value = display.value + "2.718281";
    }
});
Pow.addEventListener("click", function () {
    display.value = Math.pow(display.value, 2);
});
Lg.addEventListener("click", function () {
    display.value = Math.log(display.value);
});
Xt.addEventListener("click", function () {
    var no, no1;
    no = display.value;
    no1 = display.value;
    if (no == no1) {
        display.value = 1 / no;
    }
    else {
        display.value = display.value + "Cannot Divided by 0";
    }
});
X10.addEventListener("click", function () {
    var no;
    no = display.value;
    display.value = Math.pow(10, no);
});
Inn.addEventListener("click", function () {
    if (display.value == " ") {
        display.value = "Invalid";
    }
    else {
        display.value = display.value + "Invalid input";
    }
});
Fact.addEventListener("click", function () {
    var i, no, f;
    f = 1;
    no = display.value;
    for (i = 1; i <= no; i++) {
        f = f * i;
    }
    i = i - 1;
    display.value = f;
});
XY.addEventListener("click", function () {
    var no;
    no = display.value;
    display.value = no * no;
});
