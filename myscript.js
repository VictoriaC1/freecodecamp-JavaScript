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

function mylocalscope()
{
	var myVar = 5;
	//myVar is only visible inside the function
	console.log(myVar);
}
mylocalscope();

var outerwear = "tshirt";
//this is a global variable, it is declared outside of a function
function myoutfit()
{
	var outerwear = "sweater"; 
	return outerwear; 
}
console.log(myoutfit());
console.log(outerwear);

//returning a value with RETURN
function minusseven(num)
{
	return num-7;

}
console.log(minusseven(10));

function timesfive(num)
{
	return num*5;
}
console.log(timesfive(5)); 

//if u do not specify the return value, the value appears as UNDEFINED


var changed = 0 ;

function change(num)
{
	return (num+5)/3; 
}
changed = change(10);

var processed = 0 ;

function processArg(num)
{
	return (num + 3)/5; 
}
processed = processArg(7);


//stand in line


function nextInLine(arr, item)
{
	arr.push(item); //we put item at the end of the arr
	return item;
    ///return arr.shift() --> it will show the array with item at the end but without
    //the first element ( [2,3,4,5,6] )
}
var testarr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testarr));
//JSON.stringify(testarr) is used to change an array into a string
console.log(nextInLine(testarr,6)); 
console.log("After: " + JSON.stringify(testarr));


///BOOLEANS 
//two values: true and false

function welcometoBooleans()
{
	return true; 

}
function ourTrueOrFalse (isittrue)
{
	if(isittrue) {
		return "Yes, it is true";
	}
	//else 
	return "No it is false";
}

function trueorfalse(wasthattrue)
{
	if(wasthattrue)
	{
		return "Yes, that was true";
	}
	return "No, that was false";
}
console.log(trueorfalse(true));

function testEqual (val)
{
	if(val == 12)return "equal";

	return "not equal";
}
console.log(testEqual(10));

function testStrict(val)
{
	if(val === 7)return "equal";
	return "not equal";
}
///testStrict(7) is evaluated as true

/*
 3 === 3 //checks the true value of 3 being equal to 3
 3 === '3' // this is not true
 */


 function compareEquality(a,b)
 {
 	if(a==b)return "equal";
 	return "not equal"
 }
 //if we use "==" the "10" will be converted to a string --> true
 console.log(compareEquality(10,"10"));
 //if we use "===" the "10" will NOT be converted to a string --> false

 function testNOTequal(val)
 {
 	if(val!=99)
 		return "not equal";
 	return "equal";
 }

function testStrictNotequal()
{
	if(val!== 17) //does not convert types
		return "not equal";
	return "equal";
}

function testGreaterorEqualThan (val)
{
	if(val>= 100)
		return "over or equal to 100";
	if(val > 10)
		return "over 10";

	return "10 or under";
}

console.log(testGreaterorEqualThan(324)); 
//OPERATORS


function testlogicalAND(val)
{
	if(val>= 50 && val <=79) return "yeah";
	return "ney"; 
}
console.log(testlogicalAND(43)); 

function testlogicalOR(val)
{
	if(val > 10 || val < 20 )return "outside";
		return "inside";
}
console.log(testlogicalOR(12));

function testELSE(val)
{
	var result = " "
	if(val>5) result = "bigger than 5";
	else result = "less than 5";
	return result;

}
console.log(testELSE(4));

function testELSEIF(val)
{
	if(val>10)return "greater than 10";
	else if( val < 5 ) return "less than 5";
	else return "between 5 and 10";
}
///order is very important on else statements
console.log(testELSEIF(8));

function elseif(num)
{
	if(num < 5 )return "tiny";
	else if(num < 10)return "small";
	else if(num < 15)return "medium";
	else if(num < 20)return "large";
	else return "huge";
}
console.log(elseif(18));


///Golf:
/* 
Strokes     Return 

1           "Hole-in-one"
<= par-2     "Eagle"
par-1        "Birdie"
par           "Par"
par+1         "Bogey"
par +2        "Double Bogey"
>= par +3      "Go home!" */
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go home!"];
function golfScore(par,strokes)
{
   if(strokes==1)return names[0];
   else if(strokes <= par-2 )return names[1];
   else if(strokes == par-1 )return names [2];
   else if(strokes == par) return names[3];
   else if(strokes == par+1)return names[4];
   else if(strokes == par+2)return names[5];
   else if(strokes >= par+3)return names[6];

}
console.log(golfScore(5,4));

/*
Write a switch statement which tests val and sets answer for the following conditions
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"

*/
function caseinSwitch(val)
{
	var answer = " ";
    
    switch(val){ //we compare val to the different cases we have
     case 1: answer = "alpha";
     break; //we are at the end of the case

     case 2: answer = "beta";
     break;

     case 3: answer = "gamma";
     break;

     case 4: answer = "delta";
     break;
    }

	return answer; 
}
console.log(caseinSwitch(1));


function SwitchofStuff(val)
{
	var answer = " ";
    
    switch(val){ 
     case "a": answer = "alpha";
     break; 

     case "b": answer = "beta";
     break;

     case "c": answer = "gamma";
     break;

     case "d": answer = "delta";
     break;
    
     //when none of the cases apply, similar to the else statement
     default: 
     answer = "stuff";
     break;
    }

	return answer; 
}
console.log(SwitchofStuff("f"));

function sequentialSizes(val)
{
	var answer = "";
	switch(val){
		case 1:
		case 2:
		case 3:
		answer = "low";
		break; // it goes automatically through every case

		case 4:
		case 5:
		case 6:
		answer = "mid";
		break;
	    
		case 7:
		case 8:
		case 9:
		answer = "high";
		break;
	}
}
console.log(sequentialSizes(5));

function chaintoswitch(val)
{
	var answer = " ";
    
    switch(val){ 
     case "bob": answer = "marley";
     break; 

     case 42: answer = "the answer";
     break;

     case 1: answer = "there is no #1";
     break;

     case 99: answer = "delta";
     break;
    
 
    }

	return answer; 
}

function ifless(a,b)
{
   /*	if(a<b)return true; 

	else return false; */

	//same as:

	return a<b; 
}
console.log(ifless(2,3));


function abTest(a,b)
{
	if(a < 0 || b < 0 )
		return undefined;
    
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2,3.5));

///Card counting function
var count = 0;

function cc(card)
{
    switch(card)
    {
    	case 2: 
    	case 3:
    	case 4:
    	case 5:
    	case 6:
    	count++; 
    	break; 

    	case 10:
    	case "J":
    	case "Q":
    	case "K":
    	case "A":
    	count--; 
    	break; 
    }

    var holdbet = 'Hold'; 

    if(count>0){ holdbet= 'Bet;'}

	return count + " " + holdbet; 
}
cc(2); cc('K'); cc(10); cc('K'); cc('A');

console.log(cc(4));


///Building JavaScript OBJECTS 

//similar to arrays but instead of indexes we use properties to acces stuff
//properties can be string, numbers, arrays, anything

var ourDog = {
	"name": "Camper",
	"legs" : 4, 
	"tails" : 1,
	"friends" : ["everything"]
};

var myDog = {
	"name": "Quincy",
	"legs": 3,
	"tails" : 2,
	"friends": []
};


//Accessing properties with DOT

var testobj ={
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};

var hatValue = testobj.hat;
var shirtValue = testobj.shirt;

console.log(hatValue, shirtValue);

///if we have spaces we use the bracket notation
var testobj2 ={
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
};
var entreeValue = testobj2["an entree"];
var drinkValue = testobj2['the drink'];

console.log(entreeValue,"and", drinkValue); 

//Accesing object properties with variables

var testobj3 ={
	12: "Namath",
	16: "Montana",
	19: "Unitas"
};

var playerNumber = 16;
var player = testobj3[playerNumber];
console.log(player);



//Updating properties

var thedog = {
	"name": "Camper",
	"legs": 4, 
	"tails": 1, 
	"friends": ["the campers"]
};
thedog.name = "Happy camper";


//adding new properties to an object


thedog.bark = "bow-wow";
thedog['color'] = 'black'; 

//deleting a property 

delete thedog.tails; 

///using objects for lookouts 
//sometimes we can replace switch statements with an object


function phoneticLookup(val)
{
 var result = " ";

 var lookup = {
	"alpha ": "adam",
	"bravo" : "boston",
	"echo ": "easy" 

}; 
 result = lookup[val]; 
 return result;
}
console.log(phoneticLookup("bravo"));


//we write the below was the upove function
/* switch(val)
{ 
	 var result = "";

	case "alpha":
	result = "adam";
	break;

	case "bravo":
	result = "boston";
	break; 

	case "echo": 
	result = "easy";
	break; 

}*/

///Checking if an object has a property
var myobj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"

};

function checkobj(checkprop){
	if(myobj.hasOwnProperty(checkprop)) return myobj[checkprop];

	else return "not found:(";


}
console.log(checkobj("room"));

//A js object is a way to store flexible data

var myMusic = [ 
{

	"artist": "Billy Joel",

	"title": "Piano Man",

	"release_year": 1973,

	"formats": [
	"CD",
	"8T",
	"LP"
	], 
	"gold": true
},

{

  "artist": "Beau Carnes",

  "title": "Cereal Man",

  "release_year": 2003,

  "formats": [
  "YouTube video"
  ]

}


];


var myStorage = {
	"car": {

		"inside":{

			"glove box": "maps",
			"passenger seat": "crumbs"
		},

		"outside": {
			"trunk": "jack"
		}

	}
};
var gloveBoxContents =  myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


var myPlants = [ 
 {
 	type: "flowers",

 	list: ["rose", "tulip", "dandelion"]
 },

 {
 	type: "trees",
 	list: ["fir", "pine", "birch"]
 }

];

var secondTree = myPlants[1].list[1];  //we acces the second element in the second list of the function 
console.log(secondTree);


//collection project

var collection = {
	"2548":
	{
		"album": "Slippery when wet",
		"artist": "Bon Jovi",
		"tracks": ["Let it rock","you give love a bad name" ]
	}, 

		"2468":
	{
		"album": "1999",
		"artist": "Prince", 
		"tracks": [ "1999", "Little Red Corvette" ]
	}, 

		"1245":
	{
		"artist": "Robert Palmer",
		"tracks": [ ]
	}, 

		"5439":
	{
		"album": "	ABBA Gold"
		
	}
};
//Keep a copy of the collection for tests 

var collectionCopy = JSON.parse(JSON.stringify(collection));


//we change the collection object but we made a copy

function updateRecords (id, prop, value){
  
   if(value === " ")delete collection[id][prop];

   else if(prop === "tracks"){
   	collection[id][props] = collection[id][prop] || []; //if the propery doesn't exist.
   	//we assign it an empty array
   	collection[id][prop].push(value); // we push the value to the end of the array

   }
   else {
   	collection[id][prop] = value; 
   }
	return collection; 

}
console.log(updateRecords(5439, "artist", "ABBA"));

///WHILE, FOR loops
var myArray = [ ]; 
var i = 0;
while(i < 5){
  myArray.push(i);
  i++; 
}
console.log(myArray);

for(var i=0; i<5;i++)
{
	myArray.push(i);

}
console.log(myArray);

for(var i=0; i<10; i+=2)
{
	myArray.push(i);
}
console.log(myArray);

for(var i=1; i<10; i+=2){
	myArray.push(i);
}
console.log(myArray);

for(var i=10; i>0; i-=2)
{
	myArray.push(i);
}
console.log(myArray);


var ourArr = [9,10,11,12];
var ourTotal=0;

for(var i = 0; i<ourArr.length; i++) ///ourArr.length is 4 but the array has 3 positions
{
	ourTotal +=ourArr[i];
}
console.log(ourTotal);

function multiplyAll(arr){
	var product = 1; 

	for(var i = 0; i< arr.length; i++)
	{
		for(var j=0; j< arr[i].length; j++)
			product *= arr[i][j];

	}
	return product; 
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);


//DO loops 

//The "while" loop first checks the condition BEFORE doing any of the code inside 
///the loop 

///The "do" loop will execute the code at least one time and THEN execute the
///condition

var arr = [ ];
var i = 10; 

do{
	arr.push(i);
	i++; 

}while(i<5)

console.log(i, arr);


////Profile lookup, coding challenges 

var contacts = [

  {
  	"firstname": "Akira",
  	"lastname": "Laine",
  	"number": "0532872398",
  	"likes": ["pizza", "coding", "brownies" ]
  },

    {
  	"firstname": "Harry",
  	"lastname": "Potter",
  	"number": "102920982490",
  	"likes": ["magic", "hagrid", "hogwarts" ]
  },

   {
  	"firstname": "Sherlock",
  	"lastname": "Holmes",
  	"number": "82348293",
  	"likes": ["intriguing cases", "violin" ]
  },

   {
  	"firstname": "Kristian",
  	"lastname": "Vos",
  	"number": "unknown",
  	"likes": ["js", "foxes", "games" ]
  }

];

function lookUpProfile(name, prop)
{
	for(var i=0; i<contacts.length; i++)
	{
		if(contacts[i].firstname === name) 
          return contacts[i][prop] || "No such property"; 
	}
	return "No such contact"; 
}

var data = lookUpProfile("Sherlock", "lastname"); 
console.log(data);

///random fractions 

function randomFraction(){
	return Math.random(); 
}
console.log(randomFraction()); 

///random whole numbers
 
var randomnumber10to19 = Math.floor(Math.random()*20); 
//floor rounds down
function randomWholeNum()
{
   
	return Math.random(); 

} 
console.log(randomnumber10to19);

//random number in a range

function randomrange(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}
console.log(randomrange(44,89.76));

//the parseInt Function 
//takes a string and returns an integer

function convertTointeger(str){
	return parseInt(str); 
}
convertTointeger("56");


///binary to integers

function convertoInteger(str){
 return pareInt(str, 2); //base 2
}

convertTointeger("10011");

///The conditional/ ternary operator

function checkequal(a,b){
	return a === b ? true : false; //the same as: return a === b; 
}

function checksign(nr)
{
	return nr > 0 ? "positive" : nr < 0 ? "negative" : "zero";
}
console.log(checksign(10));


///Declaring variables: var,let,const; 


// let -- does not let you declare the same variable twice 
// it is also limited to the area where it is defined 

//const -- all the features of let but it's read-only, you cannot reassign a const 

//you should mainly use const and let
 
 const s = [5,7,2];

 function editinplace()
 {
 	"use strict"; 

 	s[0] = 2;
 	s[1] = 5; 
 	s[2] = 7;

 } 
 editinplace();
 console.log(s);

//prevent object mutation 

function freezeobj()
{
	"use strict";
	const MATH_CONSTANTS = {
		PI: 3.14
	};

	Object.freeze(MATH_CONSTANTS);


	try{
		MATH_CONSTANTS.PI = 99;
	}catch (ex)
     {
     	console.log(ex);
     }
     return MATH_CONSTANTS.PI; 

}
const PI = freezeobj();
console.log(PI);

//Arrow functions to write concise anonymous functions

const magic = () => new Date(); 

var myconcat = (arr1, arr2) => /*return*/  arr1.concat(arr2);

console.log(myconcat([1,2],[23,5,4])); 



