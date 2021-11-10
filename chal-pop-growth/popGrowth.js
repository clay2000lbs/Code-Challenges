nbYear = (p0, percent, aug, p) => {
    let years = 0

    while (p0 < p) {
        p0 = p0 + (p0 * (percent * .01)) + aug
        years++
    }
    console.log(years)
}
nbYear(1500, 5, 100, 5000)
/* 
p0 = initial population each year
aug =  

*/