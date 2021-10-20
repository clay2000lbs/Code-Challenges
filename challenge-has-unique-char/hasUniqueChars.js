// Write your code below\

function hasUniqueChars(word) {
    stringArray = word.split("")
    let toMap = {};
    let resultToReturn = false;
    for (let i = 0; i < stringArray.length; i++) {

        if (toMap[stringArray[i]]) {
            resultToReturn = true;
            // terminate the loop
            break;
        }

        toMap[stringArray[i]] = true;
    }

    if (resultToReturn) {
        console.log('Duplicate elements exist');
        }
        else {
            console.log('Duplicates dont exist ');
            }
        }

        hasUniqueChars("Pulp")