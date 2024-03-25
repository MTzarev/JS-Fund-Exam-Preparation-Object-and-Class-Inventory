function inventory(array) {
    let arrOfObjects = [];
  
    for (let i = 0; i < array.length; i++) {
      let hero = {};
  
      let currentLine = array[i].split(" / ");
      let heroName = currentLine[0];
      let heroLevel = currentLine[1];
      let items = currentLine[2].split(", ");
  
      hero.name = heroName;
      hero.level = +heroLevel;
      hero.items = [];
  
      for (let item of items) {
        hero.items.push(item);
      }
      arrOfObjects.push(hero);
      hero.items = hero.items.join(", ");
    }
  
    let sortedArr = arrOfObjects.sort((object1, object2) => {
      return object1.level - object2.level;
    });
  
    for (let obj of sortedArr) {
      console.log(`Hero: ${obj.name}`);
      console.log(`level => ${obj.level}`);
      console.log(`items => ${obj.items}`);
    }
  }
  
  inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ]);