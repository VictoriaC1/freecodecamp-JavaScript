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