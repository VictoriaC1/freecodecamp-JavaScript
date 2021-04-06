//TEMPLATE LITERALS:

let word1 = 'Victoria';
let word2 = 'Chira'; 

/* old way:
const fullName = word1 + ' ' + word2; 
console.log('fullName');
*/
//template literal allows these : ` `

const fullName = `${word1} ${word2}`; 

console.log(fullName);

let example = ` ${word1}
${word2} 
`;

document.getElementById('ex').innerText = example; 


//DESTRUCTURING OBJECTS

const personalInfo = {
	firstname : 'dylan', 
	lastname : 'israel',
	city : 'austin',
	state: 'texas',
	zipcode: 73301
};

const {firstname: fn , lastname: ln } = personalInfo; 

console.log(`${fn} ${ln}`);

//DESTRUCTURING ARRAYS

let [firstName, middleName] = ['Dylan', 'coding', 'new york' ]; 
//it is going index by index

middleName = 'Clements';

console.log(firstName + middleName);

//OBJECT LITERAL 

function AddressMaker(city, state){
	const newAddress = {city: city, state: state}; 


	console.log(newAddress);
}
AddressMaker('Los Angeles', 'California'); 

//challenge: 

function addressMaker(address){
	const {city, state} = address; 

	const newaddress = {
		city,
		state, 
		country: 'United States'
	};
   console.log(`${newaddress.city}, ${newaddress.state}, ${newaddress.country} `)
}
addressMaker({city: 'Los Angeles',state: 'California'}); 

//FOR OF LOOP

let incomes = [62000, 67000, 75000];
let total = 0; 

for(const income of incomes){
	console.log(income); 
	total += income; 
}


console.log(total);

let string = "This is a string"; 
for(const char of string ){
	console.log(char); 
}
//challenge

for(let income2 of incomes){
	income2 += 5000; 

}
console.log(incomes); 

//SPREAD OPERATOR

let ex1 = [1,2,3,4,5,6];
let ex2  = [...ex1];

ex2.push(true); 

console.log(ex2);

//REST OPERATOR
//when we don't know how many inputs are gonna be used
function add(...nums){

console.log(nums);

}
add(4,5,6,7,7,53,2,4,5)

//ARROW FUNCTIONS

function add2(...nums){

let total2 = nums.reduce((x,y) => x + y); 

console.log(total2);

}
add2(4,5,6,7,7,53,2,4,5)

//DEFAULT PARAMS

function add3(numArray = []){
	let t = 0; 
 
   numArray.forEach((element) => {
    t += element; 
   } );
   console.log(t);

}
add3();

//INCLUDES

let numarray = [1,2,3,4,5,6];

console.log(numarray.includes(3));

//LET & CONST: 

if (false)
{
	var ex3 = 5; 
}
console.log(ex3);


const ex4 = []
ex4.push(5);
const ex5 = {}
ex5.surname = 'Michael';
console.log(ex5);
//we cannot reset the value  

//IMPORT AND EXPORT


//allows us to export 'data' which we can then export into another application 

/* install a es6 compiler
import { data } from './example.js';
console.log(data);

let updatedData = data; 
updatedData.push(5);

console.log(updatedData);
*/

//padStart() && padEnd()

let example2 = 'DYLAN'; 

console.log(example2.padStart(10, 'a')); //adds a's until it reaches 10 characters
console.log(example2.padEnd(15, 'b'));

//challenge
let example3 = 'YouTube.com/CodingTutorials360'

console.log(example3.padStart(100).length); 
console.log(example3.padEnd(1));


//CLASSES

class Animal{
	constructor(type, legs){
		this.type = type; 
		this.legs = legs; 
	}
	makeNoise(sound = 'Loud Noise'){
		console.log(sound);
	}

	static return10(){
		return 10; 

	}
	get metadata(){
		return `Type: ${this.type}, legs:${this.legs}`;
	}

}
let  cat = new Animal('Feline', 4); 

cat.legs = 3 //resetting the value 
cat.makeNoise('meow');
console.log(cat.type);
console.log(Animal.return10());
console.log(cat.metadata);

/* 
export class cat extends Animal {
constructor(type, legs, tail){
	super(type,legs) // used to call functions from the parent class
	this.tail = tail; 
}
}*/


//TRAILLING COMMAS	

function add(p1,){
	const value = {
		name: 'Dylan', 

	};
	console.log(value)
};

//ASYNC AND AWAIT

const apiURL	= "https://www.lut.fi/web/en";

async function get(){
	const response = await fetch(apiURL); 
	const json = await response.json(); 

	console.log(json[0]);
}

/*
function get(){
	fetch(apiURL)
	.then((r) => r.json())
	.then((json) => {
		console.log(json[0])
	}).catch((error) => {console.log('failed');
      
     });
}
 */
//challenge
 
function resolveAfter3Seconds(){
	return new Promise(resolve => {setTimeout(() => {
		resolve('resolved'); 
	}, 3000);
});
}
//
resolveAfter3Seconds().then((data)=> {
	console.log(data); 
});

//or
async function getAsyncData(){
	const result = await resolveAfter3Seconds(); 
	console.log(result); 

}getAsyncData();

//SETS

const exampleSet = new set([1,1,1,1,1,1,2,2,2,2]); 
exampleSet.add(6);//if the set already has the value it will ignore it
exampleSet.add(7).add(17); 
console.log(exampleSet.size);
