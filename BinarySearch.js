/*
* This program uses binary search to find numbers inputted by the user.
*
* @author  Wajd Mariam
* @version 1.0
* @since   2021/01/26
*/

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});


// This function sorts an array and passes it back to the user
function sorter(array1) {
  // Sorting array list from smallest number to largest:
  for (let startIndex = 0; startIndex < array1.length; startIndex++) {
    for (let currentIndex = startIndex + 1; currentIndex < array1.length; 
         currentIndex++) {
      if (array1[startIndex] > array1[currentIndex]) {
        let numberSelected = array1[currentIndex];
        array1[currentIndex] = array1[startIndex];
        array1[startIndex] = numberSelected;
      }
    }
  }
  // Returning newly sorted array
  return array1;
}



// This function uses binary search to search in the array for a number entered.
function search(array, targetElement, firstElement1, lastElement1) {
  // Checking if the lowest index is greater than the high index
  if (firstElement1 > lastElement1) {
    // Returning that the number could not be found in the array
    return "ERROR. Number is unavailable in array!";
  } else {
    let middleElement  = Math.floor((lastElement1 + firstElement1) / 2);

    // Searching for number in array using if statements and recursion
    if (array[middleElement] < targetElement) {
      return search(array, targetElement, middleElement + 1, lastElement1);
    } else if (array[middleElement] > targetElement) {
      return search(array, targetElement, firstElement1, middleElement - 1);
    } else {
      let solution = middleElement;
      return solution;
    }
  }
}


//  Generating random numbers.
// Try Catch Statement:
try {
  // Initializing array of numbers
  let arrayList = new Array(25);

  // Adding numbers to the array
  for (let counter = 0; counter < arrayList.length; counter++) {
    arrayList[counter] = Math.floor(Math.random() * 100);
  }
  
  // Printing out the list of generated numbers after sorting:
  console.log('Array list after being sorted: ');
  // Sorting the array
  var numberArray = sorter(arrayList);
  let listPrint = "";
  for (let counter = 0; counter < numberArray.length; counter++) {
    listPrint = listPrint + numberArray[counter] + ", ";
  }
  console.log(listPrint);
  
  // Input
  // Requesting user to enter a number to find in the list:
  const inputNumber = prompt('Enter a number you wish to find in the list: ');
  
  // Passing number to the search method to look for it in the array:
  let searchIndex = search(numberArray, inputNumber, 0, arrayList.length- 1);
  console.log('Number was found at index # ' + searchIndex);
  
  
  // Catches and tells the user what error occurred:
} catch (err) {
  console.log("ERROR: Invalid Input");
}