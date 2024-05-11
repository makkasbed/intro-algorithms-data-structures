/**
 * This function applies insertion sort algorithm on an array, returning a sorted array. An implementation of the pseudocode from the book introduction to algorithms and data structures.
 * @param A the array to sort
 * @returns the sorted array
 */
function insertionSort(A: number[]) {
    console.log(A);
    for(let j = 1; j<A.length; j++){
        let key: number = A[j];
        let i = j - 1;
        while(i>=0 && A[i] > key){
          A[i + 1] = A[i];
          i--;
        }
        A[i + 1] = key;
    }
    return A;
}

console.log(insertionSort([31,41,59,26,41,58]));
console.log(insertionSort([5, 2, 4, 6, 1, 3]));