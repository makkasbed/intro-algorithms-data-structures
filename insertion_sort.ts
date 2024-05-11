//implementation of the pseudocode from the book introduction to algorithms and data structures.
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