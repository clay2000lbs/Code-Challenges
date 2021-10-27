const decoder = code => {

    newArr = []

    for (let i = 0; i < code.length; i++) {
        // console.log(code[i])
        if (code[i] != "0") {
            newArr.push(code[i])

            console.log(code[i])
        }
    }
    newArr.push(code[code.length - 1])
    console.log(newArr)
    newArr.toString()
    let text = newArr.join()
    console.log(text)
    for (let  i = 0; i < text.length; i++) {
        text = text.replace(",", "")
    }
    console.log(text)
}

decoder("0h2xce5ngbrdy")

//.join()
//.split(",")
//first number not 0, add 2 to it and that is the index for the first "good" letter
// 012|345|6789   12
//'0h2xce5ngbrdy' => 'hey'