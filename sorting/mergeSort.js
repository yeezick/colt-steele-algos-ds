// big o chart
// https://res.cloudinary.com/practicaldev/image/fetch/s--ark_FZG1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/1omv0tmikzeaj24z8ps2.jpeg
// https://miro.medium.com/max/661/1*7Kox4Bll0Ddvb0td1tiXsg.png


// recursion visual
// let myCount = 0

// function counter (num) {
//     myCount += 1
//     console.log(myCount + "+1")
//     if (num > 0) {
//         return counter(num-1)
//     }
//     return myCount
// }
// counter(5)


// myCount = 0;
// my count = 0 +1
// myCount = 0 + 1 + 1
// myCount = 0 + 1 + 1 + 1
// myCount = 0 + 1 + 1 + 1 + 1
// myCount = 0 + 1 + 1 + 1 + 1 + 1

// example of bubble vs merge sort
// const numArray = [2, 5, 9, 1, 8, 2, 3, 6, 4, 7, 36, 12, 81, 45, 43];
// const smallSortedArr = [ 7,1,2,3,4,5,6]

// const swap = (arr, idx1, idx2) => {
//   // ES5 way
//   const temp = arr[idx1]; //save its value
//   arr[idx1] = arr[idx2]; // replace ("swap") currNum with nextNum
//   arr[idx2] = temp; //swap nextNum with temp (which held currNum's value)

//   //ES2015 way
//   // [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// };

// const bubbleSort = (arr) => {
//   var noSwaps; // initalizing noSwaps
//   for (let i = arr.length; i > 0; i -= 1) {
    
//     noSwaps = true; //setting noSwaps to true on each iteration 
//     for (let j = 0; j < i - 1; j += 1) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         noSwaps = false; //since this if statement WAS used and the act of swapping was committed, swap is reassigned to false to fail the condition below
//       }
//     }
//     if (noSwaps) { // an if condition between the outer and inner loop that checks to see if a swap was done before moving through another iteration of the inner loop
//       break;
//     }
//   }
//   // console.log("bubble sort arr:", arr);
//   return arr
// };

// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }

// Recrusive Merge Sort
// function mergeSort(arr){
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }



var data = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
mergeSort(data);


// Merge function from earlier
// this pseudocode is for merging the arrays 
// define a function named "merge" that takes in 2 arguments
  // create an empty array (with a semantic name like results)
  // define 2 varaibles: i and j, set them to equal 0 

  // while i is less than arr1.length AND j is less than arr2.length
    // if arr[2] is greater than arr1[i]
      // push the arr1[i] to your empty array 
      // increment i
    // otherwise 
      // push arr2[j] to your empty array 
      // increment j 
    // thats it for this loop.

  // while i is less than the length of arr1
    // push the arr1[i] to your array
    // increment i 

  // while j is less than the length of arr2
    // push the arr2[j] into your array 
    // increment j

  // return the array 
function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
          results.push(arr1[i]);
          i++;
      } else {
          results.push(arr2[j])
          j++;
      }
  }
  while(i < arr1.length) {
      results.push(arr1[i])
      i++;
  }
  while(j < arr2.length) {
      results.push(arr2[j])
      j++;
  }
  return results;
}

// Recrusive Merge Sort

  // this is the actual sorting function 
  // define another function that takes 1 argument, an array
    // if the length of the array is less than or equal to 1, return the array 
    // define a variable that we'll call "mid" or "middle" and assign it the value of -> the length of the array divided by 2 as an integer
    // define a variable called left and assign it ->
      // call the mergeSort function with the argument -> the array sliced from index 0 to the variable "mid"
    // define a variable called right with an argument -> 
      // call the mergeSort function with the argument -> the array sliced at mid
    // return -> make a recursive call to the merge function with the arguments (left, right);

function mergeSort(arr){
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, sright);
}

mergeSort([10,24,76,73])
