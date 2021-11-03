// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

const hasBalancedParens = string => {

    openCount = (string.split("(").length - 1)
    closeCount = (string.split(")").length - 1)
    //console.log (openCount, closeCount )
    statement = openCount === closeCount ? true : false
    console.log(statement)
}

hasBalancedParens("((()))")