/* MERGE SORT */
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

  
  // this is the actual sorting function 
  // define another function that takes 1 argument, an array
    // if the length of the array is less than or equal to 1, return the array 
    // define a variable that we'll call "mid" or "middle" and assign it the value of -> the length of the array divided by 2 as an integer
    // define a variable called left and assign it ->
      // call the mergeSort function with the argument -> the array sliced from index 0 to the variable "mid"
    // define a variable called right with an argument -> 
      // call the mergeSort function with the argument -> the array sliced at mid
    // return -> make a recursive call to the merge function with the arguments (left, right);



    const numArray = [2, 5, 9, 1, 8, 2, 3, 6, 4, 7, 36, 12, 81, 45, 43];
    mergeSort(numArray)
    