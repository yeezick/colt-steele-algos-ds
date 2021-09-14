//  Bubble Sort compares 2 side by side numbers in an array and shifts the higher number up the array until the highest number has "bubbled up to the top"
// BIG O
  //Time complexity is n^2 because it iterates through the entire array in the inner loop for each iteration of the outer loop 
  // However, if an array was already sorted, big O becomes linear O(n)! It needs to do a lot less iterations of the entire array because it has less numbers to sort altogether. This is in some cases faster than merge and quick sort!

// visual example of bubble sort: 
// https://visualgo.net/en/sorting

  // link with a visual example of all algos at the same time: 
  // https://www.toptal.com/developers/sorting-algorithms


// PSEUDOCODE
/**
 * 1. Define a function called bubbleSort that takes an array.
 * 2. Start looping with variable "i" from the end of the array to the beginning
 * 3. Start an inner loop with variable "j" from the beginning until i-1
 * 4. If arr[j] is greater than arr[j+1], swap the two
 * 5. Return a sorted array
 */

const numArray = [2, 5, 9, 1, 8, 2, 3, 6, 4, 7, 36, 12, 81, 45, 43];

/* my initial solution (unfinished)*/
// const bubbleSort = (arr) => {
//   for (let i = arr.length; i > 0; i -= 1) {
//     //loop through array starting from end to beginning
//     for (let j = 0; j < i - 1; j += 1) {
//       // loop within the first loop starting from beginning to end
//       if (arr[j] > arr[j + 1]) {
//         // if the currNum > nextNum
//         swap(arr, j, j + 1); // with a helper function
//       }
//       // by this point, the numbers 2 compared numbers have swapped if they needed
//     } // in each inner iteration, the highest number has "bubbled to the top" and begins again, comparing a new current number with its next number
//   }
//   // in each outer iteration,
//   console.log("bubble sort arr:", arr);
// };

const swap = (arr, idx1, idx2) => {
  // ES5 way
  const temp = arr[idx1]; //save its value
  arr[idx1] = arr[idx2]; // replace ("swap") currNum with nextNum
  arr[idx2] = temp; //swap nextNum with temp (which held currNum's value)

  //ES2015 way
  // [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
};

// optimizing bubbleSort
/**
 * bubbleSort as implemented above will sort the array but then continue sorting the array until i = 1, meaning that it can iterate over the array several more times even after being sorted
 * we can initate a variable called noSwaps which we use to check if a swap is being made on each iteration
 */
const bubbleSort = (arr) => {
  var noSwaps; // initalizing noSwaps
  for (let i = arr.length; i > 0; i -= 1) {
    
    noSwaps = true; //setting noSwaps to true on each iteration 
    for (let j = 0; j < i - 1; j += 1) {
      console.log( arr , arr[j], arr[j+1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false; //since this if statement WAS used and the act of swapping was committed, swap is reassigned to false to fail the condition below
      }
    }
    if (noSwaps) { // an if condition between the outer and inner loop that checks to see if a swap was done before moving through another iteration of the inner loop
      break;
    }
  }
  // console.log("bubble sort arr:", arr);
  return arr
};

bubbleSort(numArray);
