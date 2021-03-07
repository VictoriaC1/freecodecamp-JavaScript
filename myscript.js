//this is an inline comment

/* multiple line
 comment here */




 //DATA TYPES: undefined, null, boolean, string, number, and object

//variable:
 
 var myName = "Victoria"; 
 //var is used throughout the whole program 

 myName = 8; 
 //we changed the variable 

 let ourName = "codecamp";
 //let only sets the value where it is declared 

 const pi = 3.14;
//const can never change 

var a;
//declaring a variable 
var b = 2; 
//declaring AND assigning a variable 
console.log(a); 
a = 7 ;
//we assigned a variable
b=a; 
//assigned the contents of a to b 

console.log(a);
/* allows to see things in the console, so we can check what a variable is at some point
in the program */

//Initialize these three variable: 
var a = 5; 
var b = 10; 
var c = "I'm a";


//Do not change code below this line:
a = a + 1; 
b= b+5; 
c = c + "string!";

//Declarations:
//capitalization matter in variables!
var VaLue1; 
var Value2; 
var vaLUE3; 

//Assignments:
 VaLue1 = 10 ; 
 Value2 = "a string";
 vaLUE3 = 20; 

 var sum = 10+10; 
 console.log(sum);

 var difference = 45 - 30; 
 console.log(difference);

 var product = 8*9; 
 console.log(product);

 var quotient = 66/33; 
 console.log(quotient);

 //incrementing a number 
 var myvar = 87; 

 myvar = myvar +1;
 //88 

//decrementing a number 

myvar = myvar - 1; //or
myvar --;
//86

var ourDecimal = 5.7; 
var myDecimal = 0.0009; 

var decimalProduct = 2.0 * 2.5; 

console.log(decimalProduct); 

var  quotient = 4.4 / 2.0; 

//the remainder of the division of two numbers
var remainder;
 
remainder = 11 % 3; 
//2 

var x = 2; 
var y = 8;
var z = 12;
var w = 10;
var p = 80; 
var m = 4.5; 
var q = 90;  


x = x + 12 ; 
y = 9 + y; 

z = z - 7; 
w = 57 - w; 

p = p*3; 
m = 7*m; 

q = q/2; 

//can be rewritten as: 
x += 12;
y += 9;

z -= 7;
w -= 57; 

p *= 3; 
m *= 7; 

q /= 2; 


//STRINGS: 

var name = 'Alan';
var LastName = "Turing";

var mystr = " I am a \"double quoted \" string inside \"double quotes\" ";

console.log(mystr);

var myStr = ' I am a "double quoted " string inside "double quotes" ';

//how to escape other things:
/*
CODE OUTPUT: 

\' single quote
\'' double quote 
\\ backslash 
\n newline
\r carriage return 
\t tab 
\b backspace
\f form feed
*/

var mystring = "firstline\n\t\\secondline\nthirdline";
console.log(mystring);


var str = "I come first" + " I come second ";

var str2 = "This is the start" + "This is the end"; 

console.log(str2);

//can be written as: 

str += "I come second";
str2 = "this is the first sentence"; 
str2 += "this is the second"; 
console.log(str2);

var ourname = "codecamp"; 
var ourStr = " Hello, our name is " + ourname + " ; How are you?";
console.log(ourStr);

var anAdjective = "worthwhile!" ; 
var str3 = "coding is  "; 
str3 += anAdjective;
console.log(str3); 

name = "Anne"; 

var namelength = 0; 

namelength = name.length; 

console.log(name.length);

var firstletterofname = name[0];
var thirdletterofname = name[2];
console.log(firstletterofname);
console.log(thirdletterofname);


//String cannot be altered once created (imutability)

name[0]="H"; //we cannot change particular letters 
console.log(name);


var lastletterofname = name[name.length - 1]; 
console.log(lastletterofname);


function wordBlanks (myNoun, myAdjective, myVerb, myAdverb)
{
	var result ="";

	result += "The " + myAdjective + " " + myNoun + " "  + myVerb + " "  + 
	 "to the store" + " " + myAdverb; 

	return result; 
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
//we called the function 

console.log(wordBlanks("bike", "slow", "flew", "slowly"));

var ourArray = ["John", 23]; 
//we can add more any type data elements

//nested array, multi dimensional array 

var myArray = [["the universe", 42 ] , ["everything", 1010101] ]; 

var ar = [50,60,70]; 

var mydata = ar[0]; 
console.log(mydata);

ourArray = [18,90,43];
ourArray[1] = 45; 
console.log(ourArray);


myArray = [[1,2,3], [4,5,6], [7,8,9], [ [10,11,12], 13, 14]]; 
myData = myArray[2][1];
//the second variable in the third array
console.log(myData);

ourArray = ["word", "another word", "something else"]; 
ourArray.push(["happy", "joy"]); 

console.log(ourArray);



ourArray = [1,2,3];
removedfromarray = ourArray.pop();
console.log(ourArray);
//pop removes the last elements
//shift removes the first 

removedfromarray = ourArray.shift();
console.log(ourArray);
console.log(removedfromarray);

ourArray = ["word1", "word2" , "word3"]; 
var addedtoarray = ourArray.unshift("word0");
console.log(ourArray);

//Array of arrays
var myList = [["cereal",3], ["milk",2], ["bananas", 3], ["juice", 2], ["eggs",12]]; 

//FUNCTIONS:

function ourReusableFunction()
{
	console.log("Hello, World");

}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function ReusableFunction()
{
	console.log("Hi!");
}
ReusableFunction();



function functionwithparameters(a,b)
{
	console.log(a-b);
}

functionwithparameters(10,5); 

function functionwithargs(a,b)
{
	console.log(a + b); 
}

functionwithargs(47,2.3); 

//global parameters can be seen anywhere in the code

var myGlobal = 90 ; 
function fun1()
{
	oopsGlobal = 5; 
	//is we do not put the var before it the variable is global!!!!

}
function fun2()
{
	var output = " "; 
	if(typeof myGlobal != "undefined")
	{
		output += "myGlobal: " + myGlobal; 
	}
	if(typeof oopsGlobal != "undefined")
	{
		output += " oopsGlobal: " + oopsGlobal; 
	}
	console.log(output);
}
fun1();
fun2();