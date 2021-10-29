const missingNumber = (numArr, maxNum) => {
    maxNumArr = []
    
    for (i = 1; i < maxNum + 1; i++) {
        maxNumArr.push(i)
        //console.log(maxNumArr)
    }

    maxNumSum = maxNumArr.reduce(function(x,y) {
        return (x + y)
    })
    console.log(maxNumSum)

    arrSum = numArr.reduce(function(x,y) {
        return (x + y)
    })
    console.log(arrSum)
    return maxNumSum - arrSum
    
 
}

console.log(missingNumber([1,2,3,4,5,6,7,9,10],10))

// x = number missing from an array
//y = highest number in the array
//z =  the total number of items in the array
//1-10 sum = 55
//1-10 excluding 8 sum = 47
//55-47=8



