// INSERTION SORT
// Builds up the sort by gradually creating a larget left half which is always sorted

// PSEUDOCODE
// 1. Start by picking the second element in the array
// 2. Now compare the second element with the one before it and swap if necessary
// 3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e the left side) to place the lement in the correct place
// 4. Repeat until sorted

// const numbers = [3, 45, 1, 2, 56, 7, 4, 28, 77, 76];

// my solution 
// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let currentNum = arr[i];
//     for (let j = i - 1; j >= 0 && arr[j] > currentNum; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j+1] = currentNum;
//   }
//   return arr;
// };

// console.log(insertionSort(numbers));


//  todo: cole's solution, investigate

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
        console.log(arr);
    }
    return arr;
}

insertionSort([2,1,9,76,4])
