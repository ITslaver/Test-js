//------------------------------------------------------------------------repetition Numbers----------------------------------

// let drawCats = function (howManyTimes) {
//   for (let i = 0; i < howManyTimes; i++) {
//     console.log(i + ' =^.^=');
//   }
// };
// drawCats(10);

//------------------------------------------------------------------------seconds in a hour

// let secondsInAMinute = 60;
// let minutesInAnHour = 60;
// let secondsInAnHour = secondsInAMinute * minutesInAnHour;
// console.log('seconds in a hour -', secondsInAnHour);
//------------------------------------------------------------------------seconds in a day
// let hoursInADay = 24;
// let secondsInADay = secondsInAnHour * hoursInADay;
// console.log('seconds in a day -', secondsInADay);
//------------------------------------------------------------------------seconds in a year

// let daysInAYear = 365;
// let secondsInAYear = secondsInADay * daysInAYear;
// console.log('seconds in a year - ', secondsInAYear);
//------------------------------------------------------------------------seconds in a my age
// let age = 27;
// let result = age * secondsInAYear;
// console.log('seconds in a my age -', result);
//------------------------------------------------------------------------

// let highFives = 0;
// highFives++;
// console.log(highFives);
// highFives++;
// console.log(highFives);
// highFives--;
// console.log(highFives);
// highFives = 0;

// console.log(highFives);
//------------------------------------------------------------------------

// let balloons = 100;
// balloons *= 2;
// console.log(balloons);
// balloons = 100;
// balloons /= 4;
// console.log(balloons);

//------------------------------------------------------------------------repetition string
// console.log('Hello world!', 'Hello world!');

// let myAwersomeString = 'Something REALLY awersome!!!';

// console.log(myAwersomeString);
//------------------------------------------------------------------------
// let myThing = 5;
// myThing = 'this is a string';
// console.log(myThing);
//------------------------------------------------------------------------
// let numberNine = 9;
// let stringNine = '9';
// console.log(numberNine + stringNine);
// console.log(numberNine + numberNine);
// console.log(typeof numberNine);
// console.log(stringNine + stringNine);
// console.log(typeof stringNine);
//------------------------------------------------------------------------
// let greeting = 'Hello ';
// let myName = 'Nick';
// let result = greeting + myName;
// console.log(result);
//------------------------------------------------------------------------.length----
// let stringTest = 'Supercalifragilisticexpialidocious';
// console.log(stringTest.length);

// let js = 'Java' + 'Script';
// console.log(js.length);
//------------------------------------------------------------------------myName[]----
// let myName = 'Nick';
// console.log(myName[0]);
// console.log(myName[1]);
// console.log(myName[2]);
//------------------------------
// let codeWord1 = 'are';
// let codeWord2 = 'tubas';
// let codeWord3 = 'unsafe';
// let codeWord4 = '?!';
// let result = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1];
// console.log(result);
//------------------------------------------------------------------------.slice----
// let longString = 'My long string is long';
// console.log(longString.slice(3, 14));

// let longString = 'My long string is long';
// console.log(longString.slice(3));
//------------------------------------------------------------------------toUpper/LowerCase----
// let sameUpperString = 'Hello there, how are you doing?';
// console.log(sameUpperString.toUpperCase());

// let sameLowerString = 'HELLO THERE, HOW ARE YOU DOING?';
// console.log(sameLowerString.toLowerCase());
//----------------------
// let sillyString = 'hELlo THERE, hOW ARE yOu doINg';
// let firstletter = sillyString[0].toLocaleUpperCase();
// let otherWords = sillyString.slice(1).toLocaleLowerCase();
// let ollWords = firstletter + otherWords;
// console.log(ollWords);
//------------------------------------------------------------------------true/false----
// let isWeekend = true;
// let needToShowerToday = !isWeekend;
// console.log(!needToShowerToday);
//--------------------------------------
// let height = 60;
// let heightRestriction = 60;
// console.log(height >= heightRestriction);

// let height = 60;
// let heightRestriction = 48;
// console.log(height <= heightRestriction);
//----------------------------------------------------------------------  === Не решено --
// let age = 1;
// const accompanied = true;
// const agePG = 13;
// let accepted = age === accompanied;
// console.log(accepted);
//----------------------------------------------------------------------Массивы---
let dinosaurs = [
  'T-Rex',
  'Veloceraptor',
  'Stegosaurs',
  'Triceraptors',
  'Brahiosaurus',
  'Pteranodon',
  'Apatosaurus',
  'Diplodocus',
  'Compsognathus',
];

//----------------------------------------------------------------------Объекты---
let cat = {
  legs: 3,
  name: 'Harmony',
  color: 'Tortoiseshell',
};
