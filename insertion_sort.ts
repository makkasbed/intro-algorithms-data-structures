/**
 * This function applies insertion sort algorithm on an array, returning a sorted array. An implementation of the pseudocode from the book introduction to algorithms and data structures.
 * @param A the array to sort
 * @returns the sorted array
 */
function insertionSort(A: number[]) {
    console.log(A);
    //loop through the array starting at 1
    for(let j = 1; j<A.length; j++){
        //store the 1th item as a key
        let key: number = A[j];
        //set the i variable to the previous index of the key
        let i = j - 1;
        //loop through comparing the key and the current value, swapping the values as and when.
        while(i>=0 && A[i] > key){
          A[i + 1] = A[i];
          i--;
        }
        A[i + 1] = key;
    }
    return A;
}

/**
 * This function applies insertion sort algorithm on an array, returning a sorted array. An implementation of the pseudocode from the book introduction to algorithms and data structures.
 * this is sorted into nonincreasing
 * @param A the array to sort
 * @returns the sorted array
 */
function insertionSortInc(A: number[]) {
    console.log(A);
    //loop through the array starting at 1
    for(let j = 1; j<A.length; j++){
        //store the 1th item as a key
        let key: number = A[j];
        //set the i variable to the previous index of the key
        let i = j - 1;
        //loop through comparing the key and the current value, swapping the values as and when.
        while(i>=0 && A[i] < key){
          A[i + 1] = A[i];
          i--;
        }
        A[i + 1] = key;
    }
    return A;
}

console.log(insertionSort([31,41,59,26,41,58]));
console.log(insertionSortInc([31,41,59,26,41,58]));
console.log(insertionSort([5, 2, 4, 6, 1, 3]));
console.log(insertionSortInc([5, 2, 4, 6, 1, 3]));