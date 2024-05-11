function linearSearch(A: number[], value: number): string {
    let foundIndex: number = -1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] == value) {
            foundIndex = i;
            break;
        }
    }
    return foundIndex >= 0 ? foundIndex.toString() : "NIL";
}

let A: number[] = [5, 2, 4, 6, 1, 3]
console.log(linearSearch(A, 3));