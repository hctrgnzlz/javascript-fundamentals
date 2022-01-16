/*let js = 'amazing';
//console.log( 40 + 8 + 23 - 10);

console.log('Jonas');

let firstName = "Kafka";
console.log(firstName)




true;


let javascriptIsFun = true;

console.log(javascriptIsFun);

// console.log (typeof true);
console.log (typeof javascriptIsFun);
console.log (typeof "Kafka");

javascriptIsFun = "NO";
console.log (typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

//dynamic typing//
year = 1999;
console.log(typeof year);


let age = 33;
age = 33;

const birthYear = 1989;
// birthYear = 1990;





//Math Operators//
const now = 2037;
// const ageKafka = 2037 - 1989;
const ageKafka = now - 1989;
const ageSarah = 2037 - 2018;
console.log(ageKafka, ageSarah);

console.log(ageKafka * 2, ageKafka / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Franz';
const lastName = 'Kafka';
console.log(firstName + ' ' + lastName)

//Assignment Operators
let x = 10 + 5; // 15
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1
x--; // x = x - 1
console.log(x);

//Comparison Operator//
console.log(ageKafka > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



//Operator Precedence// 
const now = 2037
const ageKafka = now - 1989;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log (25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, y = 10, x = 10 right to left
console.log(x, y);

const averageAge = (ageKafka + ageSarah) / 2;
console.log(ageKafka, ageSarah, averageAge);

//STRINGS AND TEMPLATE LITERALS//
const firstName = "Kafka";
const job = 'writer';
const birthYear = "1883";
const year = '2037';

const kafka = "I'm " + firstName + ', a ' +  (year - birthYear) + 'years old ' + job + '!';

console.log(kafka);

const kafkaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

console.log (kafkaNew);
console.log(`Just a regular string with backticks`);


console.log('string with \n\
new line \n\
multiple lines');


console.log(`string
multiple
lines
backticks`);



//IF ELSE STATEMENTS//
const age = 15;
const isOldEnough = age >= 18;

if( age >= 18) {
    console.log('Sarah can start driving license');
}   else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young Wait Another ${yearsLeft} years :D`)
}


const birthYear = 1989;
let century;
if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(century);



//TYPE CONVERSION
const inputYear = "1979";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 20);
console.log (Number(inputYear) + 18);

console.log (String(23), 23);


//TYPE COERCION
//js converts strings to numbers/ vice versa
console.log('I am ' + 666 + ' years old');
console.log('23' + '10' - 3);
console.log('23' * '2');
console.log('23' > '18');


let n = '1' + 1; //= '11'
n = n - 1; //10 convert string to number
console.log(n);








//TRUTHY AND FALSY

//5 FALSY VALUES: 0, '', undefined, null, NaN

console.log (Boolean(0));
console.log (Boolean(undefined));
console.log (Boolean('Kafka'));
console.log (Boolean({}));
console.log (Boolean(''));


const money = 0;
if(money) {
    console.log("Don't spend it all D:");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('Height is defined');
} else {
    console.log ('Height is UNDEFINED');
}

*/





//QUALITY OPERATORS

const age = '18';
if(age === 18) console.log('You just became an adult (STRICT)'); //STRICT EQUALITY OPERATOR no type coersion
if(age == 18) console.log('You just became an adult (LOOSE)'); //LOOSE EQUALITY OPERATOR type coersion


const favorite = Number(prompt("What is your favorite number?"));

console.log (favorite);
console.log (typeof favorite);

if (favorite === 69) {
    console.log('NICE :D');
} else if (favorite === 8) {
    console.log('8 is okay :/');
} else {
    console.log('numbers are nice');
}

//DIFFERENT
if(favorite !== 69) console.log('why not 69?')