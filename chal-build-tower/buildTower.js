function towerMaker(floors){
    let space,star, tower = [];
    for(i = 1; i <= floors; i++){
      space = " ".repeat(floors - i);
      star  = "*".repeat((2 * i) - 1);
      tower.push(`${space}${star}${space}`);
    }
    console.log(tower);
  }

towerMaker(5)