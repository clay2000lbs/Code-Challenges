function findSmallestDifference(A, B, m, n)
{
     
    // Sort both arrays using
    // sort function
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
 
    let a = 0, b = 0;
 
    // Initialize result as max value
    let result = Number.MAX_SAFE_INTEGER;
 
    // Scan Both Arrays upto
    // sizeof of the Arrays
    while (a < m && b < n)
    {
        if (Math.abs(A[a] - B[b]) < result)
            result = Math.abs(A[a] - B[b]);
 
        // Move Smaller Value
        if (A[a] < B[b])
            a++;
        else
            b++;
    }
 
    // Return final sma result
    return result;
}

let A = [10, 20, 14, 16, 18];
 
// Input given array B
let B = [30, 23, 54, 33, 96];
 
// Calculate size of Both arrays
let m = A.length;
let n = B.length;
 
// Call function to print
// smallest result
console.log(findSmallestDifference(
    A, B, m, n));