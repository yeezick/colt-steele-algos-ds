// ! there are no tests associated with this file
// if you want to check your work, you will need to use your console.
  // To do this, first go to where this file lives.
  // Then, type `node {thisFileName}` and your console will execute your code for you. 


//  Bubble Sort compares 2 side by side numbers in an array and shifts the higher number up the array until the highest number has "bubbled up to the top"
// BIG O
//Time complexity is n^2 because it iterates through the entire array in the inner loop for each iteration of the outer loop
// However, if an array was already sorted, big O becomes linear O(n)! It needs to do a lot less iterations of the entire array because it has less numbers to sort altogether. This is in some cases faster than merge and quick sort!

// visual example of bubble sort:
// https://visualgo.net/en/sorting

// link with a visual example of all algos at the same time:
// https://www.toptal.com/developers/sorting-algorithms



/** TIPS
 * ** I highly suggest testing your code with console.logs to see how your data is mutated throughout the function. 
 * 
 * ** If you are stuck, try explaining your intentions in plain english to a rubber duck or even a classmate. This grounds your understanding of the fundamental problem and the desired result. 
 * 
 * ** If you are all stuck, spend a minute googling some resources to see if that opens any doors.
 * 
 * ** If you are stuck beyond 15 minutes, reach out in the parking lot so we can overcome this challenge together! 
 */

const numArray = [2, 5, 9, 1, 8, 2, 3, 6, 4, 7, 36, 12, 81, 45, 43];


/* PSEUDOCODE */

// 1. Define a function that takes 1 argument. 
  // You can call this argument whatever you want but because we intend to pass it an array, I suggest naming it something like "arr" or "numbers." That way, as you work with this argument inside the function, you always have a clear idea of what it represents.

  // 2. Create a loop that iterates through the array with variable "i"

    // 3. Create an inner loop that iterates through the array using variable "j"

      // 4. Use an if statement to check if the current element (arr[j]) is greater than the next element (arr[j+1])

        // 5. If true, reassign those elements so that they "swap" places

// 6. Return the array 
    

// Optimizing bubbleSort
/**
 * BubbleSort as implemented above will sort the array but then continue sorting the array until i = 1, meaning that it can iterate over the array several more times even after it completes sorting
 * We can initate a variable called noSwaps which we use to check if a swap is being made on each iteration
 */

/* PSEUDOCODE */
// 1.  Define a function that takes 1 argument. 

  // 2. Initialize a variable called noSwaps and leave it empty. We will build on the purpose of noSwaps as we go. 
    // ex: let noSwaps; 

  // 3. Loop through array starting from end to beginning
    // Since the inner loop will now be dependent on the value of "i", i will be a smaller value since we are now decrementing on each iteration 
    // We will also assign noSwaps to true here.


    // 4. Create an inner loop using the variable "j" that iterates normally, from 0 to "i".

    // 5. Use an if statement to check if the current element (arr[j]) is greater than the next element (arr[j+1])

      // 6. If true, reassign those elements so that they "swap" places
        // Within this if condition, we can now set noSwaps to false because we have indeed just executed a swap

    // 7. Now outside of the inner loop but within the outer loop (literally right in between those brackets), let's create an if condition. That condition should be dependent on whether or not "noSwaps" is true or false. 
      // keep in mind, that by this point, we reset the variable "noSwaps"and then update it on every iteration of this outer loop.
      // if this condition is true, use the JaveScript keyword "break" to force an end to the outer loop 
      // otherwise it should do nothing, allowing the outer loop to continue into another iteration

// 8. return the array
 

console.log(bubbleSort(numArray));
