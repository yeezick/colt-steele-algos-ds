// Selection Sort
  // Only has 1 real advantage over bubble sort: 
  // Does less swaps per iteration
// BIG O
  //Worst case scenario is O(n^2) as it has to iterate over the entire array for each iteration of the outer loop
// 1. Store the first element as the smallest value you've seen so far.
// 2. Compare this item to the next item in the array until you find a smaller number
// 3. If a smaller number is found, designate the smaller number to be the new "minimum" and oncitnue until the end.
// 4. if the "minimum" is not the value (index) you initally began with, swap the 2 values
// 5. Repeat this with the next element until the array is sorted.

const numbers = [7, 32, 6, 3, 0, 2, 48, 21, 4];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i+1; j < arr.length; j++) {
     if (arr[j] < arr[minimum]) {
       minimum = j;
     }
   }
   if (arr[minimum] < arr[i]) {
    let temp = arr[i];
    arr[i] = arr[minimum];
    arr[minimum] = temp
   }
  }
  console.log(arr);
};


selectionSort(numbers);