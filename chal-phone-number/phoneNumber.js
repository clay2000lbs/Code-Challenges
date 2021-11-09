makeNum = arr => {
    arr.splice(0,0,"(")
    arr.splice(4,0,")")
    arr.splice(5,0," ")
    arr.splice(9,0,"-")
    newArr = arr.toString()
    newArr = newArr.replaceAll(',', '')
    console.log(newArr)
}

makeNum([1,2,3,4,5,6,7,8,9,0])