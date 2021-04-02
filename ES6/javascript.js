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
// 29:00 
//JavaScript ES6, ES7, ES8: Learn to Code on the Bleeding Edge (Full Course)