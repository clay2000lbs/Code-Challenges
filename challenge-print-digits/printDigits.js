const printDigits = num => {
    let newNum = 0;
    let lastDigit;

    while(num != 0){
	lastDigit = num % 10;
    newNum = newNum * 10 + lastDigit;
    num = Math.floor(num/10);
}

console.log(newNum);
}

printDigits(1257)