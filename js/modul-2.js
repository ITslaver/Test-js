//------------------------------------------------------------------------1----------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//     let message;

//     function checkPassword(password) {
//       const ADMIN_PASSWORD = 'jqueryismyjam';
//       if (password === ADMIN_PASSWORD) {
//         return 'Welcome!';
//       }
//       return 'Access denied, wrong password!';
//     }

// //   if (password === ADMIN_PASSWORD) {
// //     message = 'Welcome!';
// //   } else {
// //     message = 'Access denied, wrong password!';
// //   }

//   return message;
//   // Change code above this line
// }

//------------------------------------------------------------------------2----------------------------------

// function checkPassword(password) {
//   // Change code below this line
//       const ADMIN_PASSWORD = 'jqueryismyjam';
//       if (password === ADMIN_PASSWORD) {
//         return 'Welcome!';
//       }
//       return 'Access denied, wrong password!';
//     }

//------------------------------------------------------------------------3----------------------------------

// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
//   // Change code above this line
// }

// console.log(checkStorage(100, 130));
// console.log(checkStorage(100, 130));

//------------------------------------------------------------------------4----------------------------------

// // Change code below this line
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);
//------------------------------------------------------------------------5----------------------------------

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = 'apple';
// const secondElement = 'plum';
// const lastElement = 'orange';

//------------------------------------------------------------------------6----------------------------------

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// console.log(fruits[3]);

//------------------------------------------------------------------------7----------------------------------

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;

//------------------------------------------------------------------------8----------------------------------

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

//------------------------------------------------------------------------9----------------------------------

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   return [firstElement, lastElement];
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

//------------------------------------------------------------------------10----------------------------------

// function splitMessage(message, delimeter) {
//   let words;
//
//   words = message.split(delimeter);
//
//   return words;
// }

// console.log(splitMessage('Mango hurries to the train', ' '));
//------------------------------------------------------------------------11----------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const calculateTotalPrice = message.split(' ').length * pricePerWord;
//   return calculateTotalPrice;
//   // Change code above this line
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
//------------------------------------------------------------------------12----------------------------------

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }

//------------------------------------------------------------------------13----------------------------------

// function slugify(title) {
//   // Change code below this line

//   const slugify = title.toLowerCase();
//   const words = slugify.split(' ');
//   const slug = words.join('-');
//   return slug;
//   // Change code above this line
// }

// console.log(slugify('Arrays for begginers'));

//------------------------------------------------------------------------14----------------------------------

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//------------------------------------------------------------------------15----------------------------------

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

//------------------------------------------------------------------------16----------------------------------

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

//   const allArray = firstArray.concat(secondArray);
//   if (allArray.length > maxLength) {
//     return allArray.slice(0, maxLength);
//   }
//   return allArray;
//   // Change code above this line
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));

//------------------------------------------------------------------------17----------------------------------

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

//------------------------------------------------------------------------18----------------------------------
// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) sum += i;
//   return sum;
//   // Change code above this line
// }

// console.log(calculateTotal(7));
//------------------------------------------------------------------------19----------------------------------
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//------------------------------------------------------------------------20----------------------------------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
//------------------------------------------------------------------------21----------------------------------

//   function findLongestWord(string) {
//     const array = string.split(" ");
//     let longestWord = array[0];

//     for (let el of array) {
//       if (longestWord.length < el.length) {
//         longestWord = el;
//       }
//     }

//     return longestWord
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

//------------------------------------------------------------------------22----------------------------------
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 17));
//------------------------------------------------------------------------23----------------------------------

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }

//   // Change code above this line
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//------------------------------------------------------------------------24----------------------------------

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   return fruits.includes(fruit);
// }
// console.log(checkFruit('plum'));
//------------------------------------------------------------------------25----------------------------------

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray = [];
//   for (let element of array1) {
//     if (array2.includes(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

//------------------------------------------------------------------------26----------------------------------
// const planets = ['Earth', 'Mars', 'Venus'];

// for (const planet of planets) {
//   console.log(planet);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const goods of order) {
//     total += goods;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
//------------------------------------------------------------------------27----------------------------------
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

//------------------------------------------------------------------------28----------------------------------

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

//------------------------------------------------------------------------29----------------------------------
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));
//------------------------------------------------------------------------30----------------------------------
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
//------------------------------------------------------------------------31----------------------------------
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let result;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       result = i;
//       return result;
//     }
//   }
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
//------------------------------------------------------------------------32----------------------------------
// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 17));
//----------------------------------------------------------------------------------------------------------
