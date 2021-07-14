// Arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuples
var person1 = ["Julien", 26];
// Emun
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
