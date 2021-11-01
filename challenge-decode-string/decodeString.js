const decode = (string) => {

    const alphabet = ['A','B','C','D','E','F','G','H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let shifter = string[0]

    string = string.toUpperCase()
    console.log(string)

    for (i = 0; i < alphabet.length; i++) {
        for (j = 1; j < string.length; j++) {
            if (string[j] == alphabet[i]) {
                console.log(alphabet[j ] )
            }
        }
    }
}


decode('2reolih')