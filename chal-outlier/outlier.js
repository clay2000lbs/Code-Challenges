const outlier = arr => {
   let evens = []
   let odds = []
   arr.forEach(e => e % 2 ===0 ? evens.push(e) : odds.push(e))
   evens.length > odds.length ? console.log(odds) : console.log(evens)
}

outlier([1,2,4,6,8])