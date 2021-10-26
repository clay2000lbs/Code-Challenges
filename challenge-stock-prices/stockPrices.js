const best = price => {
    difArr = []
    max = 0
    for (i = 0; i < price.length - 1; i++) {
        for(j = (i + 1); j < price.length; j++) {
            if (price[i] < price[j]) {
               difArr.push(price[j] - price[i])
               max = Math.max(...difArr)
                // console.log(max) 
            } 
        }
    }
    console.log(max)
}

best([1, 2, 3, 4, 5])