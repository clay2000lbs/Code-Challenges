// Write your code below this line.

function lucky(n) {
    newArray = [1];

    for (let i = 1; i < (n + 1); i++) {
        randomNumber = ((Math.floor(Math.random() * 10) + 1));
        for (let j = newArray[0]; j < (newArray.length + 1); j++) {
            if (randomNumber !== newArray[j]) {
                newArray.push(randomNumber);
            }
        }
    }
    return newArray;
}

console.log(lucky(4));