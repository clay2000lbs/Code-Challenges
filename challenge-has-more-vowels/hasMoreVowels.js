const hasMoreVowels = word =>{
    word = word.toLowerCase()
    console.log(word)
    vowelSum = 0;
    conSum = 0;
    for (i = 0; i < word.length; i++) {
        switch (word[i]) {
            case 'a':
                vowelSum += 1
            case 'e':
                vowelSum += 1
            case 'i':
                vowelSum += 1
            case 'o':
                vowelSum += 1
            case 'u':
                vowelSum += 1
            default:
                conSum += 1
        }
    }
    return (vowelSum <= conSum) ? console.log("false") : console.log("true")  
}

hasMoreVowels("Aal")