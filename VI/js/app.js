
var b = 1;
//var is var
let c = 1;
//let is let
const d = 9;
//Const CANNOT be changed


var age = 21;
console.log("My age", age);

//boolaelean
var isAdult = true;
console.log("You are adopted", isAdult);

var firstname = "Adolf";
console.log("Your name is ADO-", firstname);

var phone = null;
console.log("This is null.", phone);

var defined;
console.log("Undefine your define: ", defined);

var books = ["books" , "books" ,"heavy", "Meinkramp"];
console.log("your least favorite books are", books)

var friend = {
    full_name: "Alois Hitler",
    hobby: "Your mother",
    religion: "Jewish (very ironic)"
};
console.log(friend);

//range
//var global
//let local(??)
//const weed eater

//if else: loop
//very unfuni

// Meth
let a = 20;
console.log(a+15);
console.log(a/5); //div
console.log(a*15);
console.log(a**2);
console.log(a%3);

a++;
console.log(a);
a--;
console.log(a); //mod

//Operator
var x = 128;
var y = 121;
var z = "1";

console.log(y != z);
console.log(y < z);
console.log(y > z);
console.log(y <= z);



//Logic

let ome = x<y;
let too = x==y;

console.log(ome && too); //ok and

console.log(ome || too); // o

console.log(!too); //nah

x = y; //turn x into y?

console.log(x);

console.log((x+=y));

console.log((x *= y)); 

console.log((x /= y));

console.log((x %= y));


//Assignment

//if else on crack
// (check ) ? "True":"False"
let varA = (175 > y)? "Yay":"ney";
console.log(varA);

//if else but not on POLYVINYL CHLORICE
let ages = -1;
if (ages < 0) {
console.log("you're a myth.")
}else if(ages < 18) {
        console.log("you're a minor!!11!!1 (GAH DAMN)")

}else{
       console.log("You'er not a minor")
} 

//switch case break case blah blah blah
let susamongus = "A"; 
switch(susamongus){
    case "A":
    console.log("a man uses if else loop, this is what happened to him");
break;
case "B":
    console.log("DB ");
break;
case "C":
    console.log("remember kid, don't use if else loop");
break;
case "D":
    console.log("it's bad for your health");
break;
}
