// Write your solution below:

tshirtSorter = string => {
    newString = ''
    for (i = 0; i < string.length; i++ ) {
        if ( string[i] == 's') {
            newString += string[i]
        }
    }
    for (i = 0; i < string.length; i++ ) {
        if ( string[i] == 'm') {
            newString += string[i]
        }
    }
    for (i = 0; i < string.length; i++ ) {
        if ( string[i] == 'l') {
            newString += string[i]
        }
    }
    console.log(newString)
}

tshirtSorter("ssllllm")