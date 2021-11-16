const perfectSquare = (num) => {
    numSqr = Math.sqrt(num)
    return Number.isInteger(numSqr) ? ((numSqr + 1) * (numSqr + 1)) : -1
}

console.log(perfectSquare(3000))