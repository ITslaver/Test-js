// function multiply(x, y, z) {
//   console.log('Код до return выполняется как обычно');

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log('Этот лог никогда не выполнится, он стоит после return');
// }

//-----------------------------------------------------------------------------------------------

// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// console.log('Papaya' === 'papaya');

// const value = Number(prompt('Enter number'));

// if (value > 0) {
//   console.log('positiv number');
// }

//-----------------------------------------------------------------------------------------------------------

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }
// console.log(makeMessage('Radar', 6150));

//--------------------------------------------------------------------------------------------------------

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice(5, 100));

//-------------------------------------------------------------------------------------------------------

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));

//--------------------------------------------------------------------------------------------------------------------

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }
// console.log(isAdult(20));

//----------------------------------------------------------------------------------------------------

// const a = 2;
// const b = 5;

// console.log(a > b); // false

//------------------------------------------------------------------------------------------------------

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }

//------------------------------------------------------------------------------------------------------

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

//---------------------------------------------------------------------------------------------------------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available < ordered) {
//     message = `Not enough goods in stock!`;
//   } else {
//     message = `Order is processed, our manager will contact you.`;
//   }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));

//-----------------------------------------------------------------------------------------------------------

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;

//   if (customerCredits < totalPrice) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));

//-------------------------------------------------------------------------------------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword('mangohackzor'));

//------------------------------------------------------------------------------------------------------------

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (available < ordered) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 130));

//-------------------------------------------------------------------------21------------------------------------

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));

//------------------------------------------------------------------------22-----------------------------------

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent('starter'));

//------------------------------------------------------------------------23-----------------------------------

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

//------------------------------------------------------------------------24-----------------------------------

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = 0.1;
//   } else if (totalSpent >= 20000) {
//     discount = 0.05;
//   } else if (totalSpent >= 5000) {
//     discount = 0.02;
//   } else {
//     totalSpent < 5000;
//     discount = 0;
//   }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(5000));

//------------------------------------------------------------------------25----------------------------------

// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';
//   return message;
// }

// console.log(checkStorage(100, 130));

//------------------------------------------------------------------------26----------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword('jqueryismyjam'));

//------------------------------------------------------------------------27----------------------------------

// function getSubscriptionPrice(type) {
//   let price;

//   switch (type) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice('professional'));
//------------------------------------------------------------------------28----------------------------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//       break;
//   }
//   // Change code above this line0
//   return message;
// }
// console.log(checkPassword(null));
//------------------------------------------------------------------------29----------------------------------

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//       message = 'Shipping to China will cost 100 credits';
//       break;
//     case 'Chile':
//       message = 'Shipping to Chile will cost 250 credits';
//       break;
//     case 'Australia':
//       message = 'Shipping to Australia will cost 170 credits';
//       break;
//     case 'Jamaica':
//       message = 'Shipping to Jamaica will cost 120 credits';
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//       break;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost('China'));
//------------------------------------------------------------------------30----------------------------------

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength('Poly'));

//------------------------------------------------------------------------31----------------------------------

// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);
//------------------------------------------------------------------------32----------------------------------

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring('Hello world', 3));
//------------------------------------------------------------------------33----------------------------------

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage('Curabitur ligula sapien', 16));

//------------------------------------------------------------------------34----------------------------------

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

//------------------------------------------------------------------------35----------------------------------

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }

// console.log(checkForName('Egor Kolbasov', 'Egor'));

//------------------------------------------------------------------------36----------------------------------
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   //   result =
//   //     message.toLowercase().includes('spam') ||
//   //         message.toLowercase().includes('sale');

//   result =
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale');
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log();
