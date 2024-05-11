function insertionSort(A) {
    console.log(A);
    for (var j = 1; j < A.length; j++) {
        var key = A[j];
        var i = j - 1;
        while (i >= 0 && A[i] > key) {
            A[i + 1] = A[i];
            i--;
        }
        A[i + 1] = key;
    }
    return A;
}
console.log(insertionSort([31, 41, 59, 26, 41, 58]));
console.log(insertionSort([5, 2, 4, 6, 1, 3]));
