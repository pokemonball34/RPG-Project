var scene = "mainMenu";
var lastScene = "dungeonA";
var select = 0;
var itemsMenuX = [10, 201];
var itemsMenuY =[60, 60, 110, 110, 160, 160, 210, 210, 259, 259];
var battleMenuX = [0, 80, 160, 240, 319];
var ablilitiesMenuX = [10, 200];
var ablilitiesMenuY = [60, 60, 110, 110, 160, 160];
var partyMembers = 1;
var keyRefresh = true;
var spawnEnemies = true;
var colorMap;
var numberOfEnemies = 0;
var turn = 0;
var defending = false;
var enemyCount = 0;
var enemies = [];
var mapHome = [
  [2, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 2, 1, 3],
  [2, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 2, 0, 1],
  [2, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 2, 1, 0],
  [2, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 2, 0, 1],
  [2, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 2, 1, 0],
  [2, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 2, 0, 1],
  [2, 2, 1, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
];
var dungeonA = [
  [2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
  [2, 1, 2, 1, 0, 2, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2],
  [2, 0, 2, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 2, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0, 2, 0, 2],
  [2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 0, 2, 2, 1, 2],
  [2, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0, 2, 0, 2],
  [2, 0, 1, 0, 1, 2, 1, 2, 1, 0, 1, 0, 1, 2, 1, 2],
  [2, 1, 2, 2, 2, 2, 0, 2, 0, 2, 2, 2, 2, 2, 0, 2],
  [2, 0, 1, 0, 1, 2, 1, 2, 1, 2, 1, 0, 1, 2, 1, 2],
  [2, 2, 0, 2, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2],
  [2, 2, 1, 2, 1, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 2, 1, 2, 1, 2, 1, 0, 1, 2, 1, 0, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
var items = {
  potion: {
    name: "Potion",
    target: "ally",
    dmgtype: "heal",
    heal: 30,
    description: "A potion that heals 30HP to one ally.",
  },
  
  bluePotion: {
    name: "Blue Potion",
    dmgtype: "mprestore",
    heal: 20,
    description: "A blue potion that recovers 20MP to an ally.",
    target: "ally"
  },
  
  hCheese: {
    name: "Holey Cheese",
    dmgtype: "light",
    dmg: 50,
    crit: 0,
    description: "A heavenly piece of cheese that deals 50 damage of light damage to an enemy. It's filled with tons of holes...",
    target: "enemy",
    // use: function (target) {
    //     target.hp -= this.dmg;
    //   }
  },
  
  uhCheese: {
    name: "Unholey Cheese",
    dmgtype: "dark",
    dmg: 50,
    crit: 0,
    description: "A devilish piece of cheese that deals 50 damage of dark damage to an enemy. It doesn't have a single hole in it...",
    target: "enemy"
  },
};
var spells = {
  embers: {
    name: "Embers",
    dmgtype: "fire",
    dmg: 30,
    mpCost: 4,
    description: "A weak fire attack. Can cause the target to burn.",
    target: "enemy",
    use: function (enemies) {
      enemies[enemyCount].hp -= this.dmg;
    }
  },
  sparks: {
    name: "Sparks",
    dmgtype: "elec",
    dmg: 40,
    mpCost: 4,
    description: "A weak electric attack.",
    target: "enemy",
    use: function (enemies) {
      enemies[enemyCount].hp -= this.dmg;
    }
  },
  frost: {
    name: "Frost",
    dmgtype: "ice",
    dmg: 25,
    mpCost: 4,
    description: "A weak ice attack. Can cause the target to become stunned.",
    target: "enemy",
    use: function (enemies) {
      enemies[enemyCount].hp -= this.dmg;
    }
  },
  glow: {
    name: "Glow",
    dmgtype: "light",
    dmg: 25,
    mpCost: 4,
    description: "A weak light attack. If target is weak to light, it has a chance to do true damage to all foes.",
    target: "enemy",
    use: function (enemies) {
      enemies[enemyCount].hp -= this.dmg;
    }
  },
  shadows: {
    name: "Shadows",
    dmgtype: "dark",
    dmg: 25,
    mpCost: 4,
    description: "A weak dark attack. If target is weak to darkness, it has a chance to do double damage to the target",
    target: "enemy",
    use: function (enemies) {
      enemies[enemyCount].hp -= this.dmg;
    }
  },
  soothe: {
    name: "Soothe",
    heal: 20,
    mpCost: 4,
    description: "Heals an ally a low amount of health",
    target: "ally",
    use: function (player) {
      player.hp += this.heal;
      if (player.hp > player.maxHp) {
        player.hp = player.maxHp;  
      }
    }
  },
  doubleSlash: {
    name: "Double Slash",
    dmgtype: "physical",
    dmg: 40,
    hpCost: 0.05,
    crit: 5,
    description: "A weak physical attack that can hit twice.",
    target: "enemy",
    use: function (enemies) {
      enemies[enemyCount].hp -= (this.dmg - enemies[enemyCount].def);
      if (round(random(0, 100)) <= 33) {
        enemies[enemyCount].hp -= (this.dmg - enemies[enemyCount].def);
      }
    }
  }
};
var player = {
  firstName: "Saurel",
  lastName: "Auralius",
  level: 1,
  experience: 0,
  hp: 100,
  maxHp: 100,
  mp: 30,
  maxMp: 30,
  def: 15,
  res: 10,
  spd: 15,
  physAtk: 40,
  magAtk: 20,
  gold: 80,
  x: 1,
  y: 0,
  equipment: ["Short Bow", "Potion", "Red Staff"],
  weapon: "Wood Sword",
  head: "hood",
  body: "Iron Armor",
  boots: "Leather Boots",
  hands: "Leather Gloves",
  spells: [spells.embers, spells.glow, spells.doubleSlash, spells.soothe],
  items: [items.hCheese, items.potion, items.bluePotion, items.uhCheese, items.potion],
};
var ally1 = {
  firstName: "Ally",
  lastName: "1",
  hp: 120,
  maxHp: 120,
  mp: 20,
  maxMp: 20,
  def: 30,
  res: 20,
  spd: 15,
  physAtk: 40,
  magAtk: 20,
  inventory: ["Short Bow", "Potion", "Red Staff"],
  weapon: "Wood Sword",
  head: "hood",
  body: "Iron Armor",
  boots: "Leather Boots",
  hands: "Leather Gloves",
  spells: [spells.embers, spells.glow, spells.doubleSlash, spells.soothe],
};
var ally2 = {
  firstName: "Ally",
  lastName: "2",
  hp: 80,
  maxHp: 80,
  mp: 60,
  maxMp: 40,
  def: 30,
  res: 20,
  spd: 15,
  physAtk: 40,
  magAtk: 20,
  inventory: ["Short Bow", "Potion", "Red Staff"],
  weapon: "Wood Sword",
  head: "hood",
  body: "Iron Armor",
  boots: "Leather Boots",
  hands: "Leather Gloves",
  spells: [spells.embers, spells.glow, spells.doubleSlash, spells.soothe],
};
var ally3 = {
  firstName: "Ally",
  lastName: "3",
  hp: 90,
  maxHp: 90,
  mp: 40,
  maxMp: 400,
  def: 30,
  res: 20,
  spd: 15,
  physAtk: 40,
  magAtk: 20,
  inventory: ["Short Bow", "Potion", "Red Staff"],
  weapon: "Wood Sword",
  head: "hood",
  body: "Iron Armor",
  boots: "Leather Boots",
  hands: "Leather Gloves",
  spells: [spells.embers, spells.glow, spells.doubleSlash, spells.soothe],
};
var villager = {
  name: "Dummy A",
  x: 1,
  y: 1,
};
var villager2 = {
  name: "Dummy B",
  x: 10,
  y: 1,
};

function createGoblin(x, y) {
  return {
    name: "Goblin",
    x: x,
    y: y,
    hp: 80,
    maxHp: 80,
    mp: 0,
    maxMp: 0,
    physAtk: 20,
    magAtk: 0,
    def: 10,
    res: 0,
    spd: 10,
    weakness: ["light", "fire"],
  };
  // fill(255);
  // rect(goblin.x * 25, goblin.y * 25, 25, 25);
}
function createGreenMage(x, y) {
  return {
    name: "Green Mage",
    x: x,
    y: y,
    hp: 70,
    maxHp: 70,
    mp: 20,
    maxMp: 20,
    physAtk: 10,
    magAtk: 30,
    def: 10,
    res: 10,
    spd: 5,
    weakness: ["fire"],
}
  // fill(21, 255, 0);
  // rect(greenMage.x * 25, greenMage.y * 25, 25, 25);
}
function createWolf(x, y) {
  return {
    name: "Great Wolf",
    x: x,
    y: y,
    hp: 90,
    maxHp: 90,
    mp: 0,
    maxMp: 0,
    physAtk: 40,
    magAtk: 0,
    def: 10,
    res: 10,
    spd: 25,
    weakness: ["Fire", "Ice", "Dark"],
  }
}
function drawEnemies() {
  for (var counter = 0; counter < enemies.length; counter++) {
    fill(255);
    rect(enemies[counter].x * 25, enemies[counter].y * 25, 25, 25);
  }
}
function detectEnemy() {
  for (enemyCount = 0; enemyCount < enemies.length; enemyCount++) {
    return (player.x - 1 === enemies[enemyCount].x && player.y === enemies[enemyCount].y |
    player.x + 1 === enemies[enemyCount].x && player.y === enemies[enemyCount].y ||
    player.x === enemies[enemyCount].x && player.y + 1 === enemies[enemyCount].y ||
    player.x === enemies[enemyCount].x && player.y - 1 === enemies[enemyCount].y) 
  }
}
function startBattle() {
  if (detectEnemy()) {
    lastScene = scene;
    scene = "Battle";
  }
}
function deleteEnemy() {
  return enemies.splice(enemyCount, 1);
}
// function textbox(dialogue) {
//   rect(100, 100, 100, 100);
//   text(dialogue, 100, 100);
// }; to be added
function drawADungeon() {
  //Dungeon Map
  for (var row = 0; row < dungeonA.length; row += 1) {  //Tile Row
    for (var column = 0; column < dungeonA[row].length; column++) { //Tile column
      fill(colorMap[dungeonA[row][column]]);
      noStroke();
      rect(column * 25, row * 25, 25, 25);
    }
  }
} //Draws the map
function setup() {
  createCanvas(400, 400);
  background(255);
  fill(160, 229, 0);
  noStroke();
  rect(player.x * 25, player.y * 25, 25, 25);
  colorMap = [
    color(0, 0, 0),     //Tile 0
    color(0, 51, 153),  //Tile 1
    color(249, 47, 47), //Tile 2
    color(60, 204, 16)  //Tile 3
  ];
}
function battle(enemies) {
  // turnOrder.sort(function(a, b){return b-a});
  if (enemies.hp <= 0) {
    deleteEnemy();
    numberOfEnemies -= 1;
    println(numberOfEnemies);
    if (numberOfEnemies === 0) {
      scene = "Victory";
    }
    else {
    scene = lastScene;
    }
  }
  else if (turn === 0) {
    defending = false;
    if (keyWentDown(39) && select < 4) { //Right
      select++;
    }
    else if (keyWentDown(37) && select > 0) { //Left
      select--;
    }
    else if (select === 0 && keyWentDown(13)) { //Attack Button
      if (player.physAtk >= enemies.def) {
        var dmg = player.physAtk - enemies.def;
        enemies.hp -= dmg;
      }
      turn++;
    }
    else if (select === 1 && keyWentDown(13)) { //Abilities Button
      scene = "ablilitiesMenu";
      select = 0;
      keyRefresh = false;
    }
    else if (select === 2 && keyWentDown(13)) { //Items Button
      scene = "itemsMenu";
      select = 0;
      keyRefresh = false;
    }
    else if (select === 3 && keyWentDown(13)) { //Defend Button
      defending = true;
      turn++;
    }
    else if (select === 4 && keyWentDown(13)) { //Escape Button
      scene = lastScene;
    }
  }
  else if (turn === 1) {
    if (defending === true) {
      player.hp -= round((enemies.physAtk - player.def) / 2);
    }
    else if (player.def < enemies.physAtk) {
      player.hp -= (enemies.physAtk - player.def);
    }
    turn++;
  }
  else if (turn >= 2) {
    turn = 0;
  }
  if (player.hp <= 0) {
    scene = "GameOver";
  }
}
function draw() {
  if (scene === "Overworld") {
    background(255);
    if (keyWentUp(27)) {
      keyRefresh = true;
    }
    if (keyWentDown(27) && keyRefresh === true) {
      scene = "Menu";
      keyRefresh = false;
    }
    if (keyWentDown(39) && (player.x < mapHome[player.y].length - 1) && (mapHome[player.y][player.x + 1] !== 2)) { //Right
      player.x += 1;
    } 
    else if (keyWentDown(37) && (player.x > 0) && (mapHome[player.y][player.x - 1] !== 2)) { //Left
      player.x -= 1;
    }
    else if (keyWentDown(38) && (player.y > 0) && (mapHome[player.y - 1][player.x] !== 2)) { //Up
      player.y -= 1;
    }
    else if (keyWentDown(40) && (player.y < mapHome.length - 1) && (mapHome[player.y + 1][player.x] !== 2)) {  //Down
      player.y += 1;
    }
    if (mapHome[player.y][player.x] === "3") {
      scene = "dungeonA";
    }
    //The Map 
    for (var row = 0; row < mapHome.length; row += 1) {  //Tile Row
        for (var column = 0; column < mapHome[row].length; column++) { //Tile column
          fill(colorMap[mapHome[row][column]]);
          noStroke();
          rect(column * 25, row * 25, 25, 25);
       }
     }
     
    fill(160, 229, 0);
    noStroke();
    rect(player.x * 25, player.y * 25, 25, 25); //Player
    
    fill(88, 204, 77);
    noStroke();
    rect(villager.x * 25, villager.x * 25, 25, 25);  //Villager A
    
    fill(88, 204, 77);
    noStroke();
    rect(villager2.x * 25, villager2.y * 25, 25, 25);  //Villager B
    
    startBattle();
  }
  else if (scene === "mainMenu") {
    if (keyWentDown(13)) {
      scene = "dungeonA";
    }
    noStroke();
    fill(0);
    textSize(20);
    text("Storms Of Sterelia (Pre-alpha)", 70, 50);
    text("Press enter to confirm and enter the game", 20, 120);
    text("Use the arrow keys to move", 70 , 150);
    text("Use the escape key to exit out of menus", 20, 180);
  }
  else if (scene === "dungeonA") {
    if (keyWentUp(27)) {
      keyRefresh = true;
    }
    if (keyWentDown(27) && keyRefresh === true) {
      scene = "Menu";
      lastScene = "dungeonA";
      keyRefresh = false;
    }
    if (keyWentDown(39) && (player.x < dungeonA[player.y].length - 1) && (dungeonA[player.y][player.x + 1] !== 2)) { //Right
      player.x += 1;
    } 
    else if (keyWentDown(37) && (player.x > 0) && (dungeonA[player.y][player.x - 1] !== 2)) { //Left
      player.x -= 1;
    }
    else if (keyWentDown(38) && (player.y > 0) && (dungeonA[player.y - 1][player.x] !== 2)) { //Up
      player.y -= 1;
    }
    else if (keyWentDown(40) && (player.y < dungeonA.length - 1) && (dungeonA[player.y + 1][player.x] !== 2)) {  //Down
      player.y += 1;
    }
    else if (dungeonA[player.y][player.x] === "3") {
      scene = "Overworld";
    }
    if (spawnEnemies === true) {
    enemies.push(createGoblin(2, 6));
    enemies.push(createGreenMage(1, 9));
    enemies.push(createGoblin(6, 11));
    enemies.push(createGoblin(11, 6));
    enemies.push(createGoblin(14, 6));
    enemies.push(createWolf(14, 0));
    spawnEnemies = false;
    numberOfEnemies = enemies.length;
    }
    drawADungeon();
    drawEnemies();
    fill(160, 229, 0);
    noStroke();
    rect(player.x * 25, player.y * 25, 25, 25); //Player
    startBattle();
  }
  else if (scene === "Battle") {
    background(255);
    if (turn === 0) {
      scene === "Battle";
    }
    if (partyMembers <= 4) {
    //Player's Box 1
    fill(209);
    stroke(0);
    rect(0, 4 * (height / 5), (width / 4) - 1, (height / 5) - 1);
    noStroke();
    fill(0);
    text(player.firstName + " " + player.lastName, 5, 340);
    text("HP: " + player.hp, 5, 370);
    text("MP: " + player.mp, 5, 390);
    }
    if (partyMembers >= 2) {
    //Player's Box 2
    fill(209);
    stroke(0);
    rect((width / 4) - 1, 4 * (height / 5), width / 4, (height / 5) - 1);
    noStroke(0);
    fill(0);
    text(ally1.firstName + " " + ally1.lastName, 105, 340);
    text("HP: " + ally1.hp, 105, 370);
    text("MP: " + ally1.mp, 105, 390);
    }
    if (partyMembers >= 3) {
    //Player's Box 3
    fill(209);
    stroke(0);
    rect(2 * (width / 4) - 1, 4 * (height / 5), width / 4, (height / 5) - 1);
    noStroke();
    fill(0);
    text(ally2.firstName + " " + ally2.lastName, 205, 340);
    text("HP: " + ally2.hp, 205, 370);
    text("MP: " + ally2.mp, 205, 390);
    }
    if (partyMembers === 4) {
    //Player's Box 4
    fill(209);
    stroke(0);
    rect(3 * (width / 4) - 1, 4 * (height / 5), width / 4, (height / 5) - 1);
    noStroke();
    fill(0);
    text(ally3.firstName + " " + ally3.lastName, 305, 340); 
    text("HP: " + ally3.hp, 305, 370);
    text("MP: " + ally3.mp, 305, 390);
    }
    
    //Enemy
    fill(229, 27, 9);
    rect(150, 100, 100, 100);
    fill(0);
    text(enemies[enemyCount].name, 155, 120);
    text("HP: " + enemies[enemyCount].hp, 155, 155);
    text("MP: " + enemies[enemyCount].mp, 155, 170);
    
    fill(143, 147, 155);
    rect(0, 0, 400, 50);
    stroke(0);
    rect(battleMenuX[select], 0, 80, 49); //Selection indicator
    noStroke();
    
    //Menu
    fill(0);
    text("Attack", 20, 25);
    text("Abilities", 100, 25);
    text("Items", 180, 25);
    text("Defend", 260, 25);
    text("Escape", 340, 25);
    
    battle(enemies[enemyCount]);
  }
  else if (scene === "itemsMenu") {
    fill(173, 204, 255);
    rect(10, 60, 380, 250);
    if (player.items.length <= 0) {
      fill(0);
      textSize(18);
      text("You have nothing in your inventory...", 50, 100);
    }
    else {
    stroke(0);
    rect(itemsMenuX[select % 2], itemsMenuY[select], 188, 50);  //Selection indicator
    noStroke();
    for (var a = 0; a < player.items.length; a += 1) {
      fill(0);
      textSize(18);
      if (a % 2 === 0) {
        text(player.items[a].name, 40, 90 + (a * 25));
      }
      else {
        text(player.items[a].name, 220, 65 + (a * 25))
      }
    }
    stroke(0);
    fill(173, 204, 255);
    rect(10, 315, 380, 80);
    noStroke(0);
    textSize(18);
    fill(0);
    text(player.items[select].description, 25, 335, 365);
    }
    if (keyWentUp(13)) {
      keyRefresh = true;
    }
    if (keyWentDown(27)) {  //Leave items menu
      scene = "Battle";
      select = 2;
    }
    else if (keyWentDown(39) && select < player.items.length - 1) { //Right
      select++;
    }
    else if (keyWentDown(40) && select < player.items.length - 2) { //Down
      select += 2;
    }
    else if (keyWentDown(37) && select > 0) { //Left
      select--;
    }
    else if (keyWentDown(38) && select > 1) { //Up
      select -= 2;
    }
    else if (keyWentDown(13) && keyRefresh === true && player.items.length > 0) { //Enter
      if (player.items[select].target === "ally") {
        if (player.items[select].dmgtype === "heal") {
          player.hp += player.items[select].heal;
          if (player.hp > player.maxHp) {
            player.hp = player.maxHp;
          }
        }
        else if (player.items[select].dmgtype === "mprestore") {
          player.mp += player.items[select].heal;
          if (player.mp > player.maxMp) {
            player.mp = player.maxMp
          }
        }
      }
      else if (player.items[select].target === "enemy") {
        enemies[enemyCount].hp -= player.items[select].dmg;
      }
      scene = "Battle";
      player.items.splice(select, 1);
      select = 2;
      turn++;
    }
  }
  else if (scene === "ablilitiesMenu") {
    if (keyWentUp(13)) {
      keyRefresh = true;
    }
    if (keyWentDown(27)) {  //Leaves abilities menu
      scene = "Battle";
      select = 1;
    }
    else if (keyWentDown(39) && select < player.spells.length - 1) { //Right
      select++;
    }
    else if (keyWentDown(40) && select < player.spells.length - 2) { //Down
      select += 2;
    }
    else if (keyWentDown(37) && select > 0) { //Left
      select--;
    }
    else if (keyWentDown(38) && select > 1) { //Up
      select -= 2;
    }
    else if (keyWentDown(13) && keyRefresh === true) { //Enter
      if (player.mp - player.spells[select].mpCost >= 0
       || player.hp - ceil(player.spells[select].hpCost * player.maxHp) >= 1) {
        if (player.spells[select].dmgtype !== "physical") {
          player.mp -= player.spells[select].mpCost;
        }
        else if (player.spells[select].dmgtype === "physical") {
          player.hp -= ceil(player.maxHp * player.spells[select].hpCost);
        }
        if (player.spells[select].target === "enemy") {
          player.spells[select].use(enemies);
        }
        else if (player.spells[select].target === "ally") {
          player.spells[select].use(player);
        }
        scene = "Battle";
        turn++;
        select = 1;
       }
    }
    fill(173, 204, 255);
    rect(10, 60, 380, 150);
    stroke(0);
    rect(ablilitiesMenuX[select % 2], ablilitiesMenuY[select], 189, 49); //Selection indicator
    rect(10, 220, 380, 80);
    fill(0);
    noStroke();
    for (var b = 0; b < player.spells.length; b += 1) {
      fill(0);
      textSize(18);
      if (b % 2 === 0) {
        text(player.spells[b].name, 40, 90 + (b * 25));
      }
      else {
        text(player.spells[b].name, 220, 65 + (b * 25))
      }
    }
    textSize(18);
    text(player.spells[select].description, 25, 240, 365);
  }
  else if (scene === "Menu") {
    if (keyWentUp(27)) {
      keyRefresh = true;
    }
    if (keyWentDown(27) && keyRefresh === true) {
      scene = lastScene;
      keyRefresh = false;
    }
    background(255);
    textSize(24);
    // text("Menu", 200, 100);
    // text("Items", 200, 175);
    // text("Items", 200, 250);
    // text("Options", 200, 325);
    // text("Save", 200, 400);
    text("Use arrowkeys to move,", 50, 150);
    text("Press enter to confirm selections.", 20, 200);
    text("Press esc to escape/return to menu.", 10, 250);
  }
  else if (scene === "GameOver") {
    if (keyWentDown(27)) {
      player.x = 1;
      player.y = 0;
      player.hp = player.maxHp;
      player.mp = player.maxMp;
      scene = "dungeonA";
    }
    background(0);
    fill(0);
    rect(100, 100, 100, 100);
    fill(255);
    textSize(32);
    text("GAME OVER", 100, 100);
    textSize(18);
    text("Press esc to return to main menu", 120, 150);
  }
  else if (scene === "Victory") {
    background(255);
    fill(0);
    text("Victory", 100, 100);
    text("Press esc to restart", 100, 150);
    if (keyWentDown(27)) {  //Esc button
      spawnEnemies = true;
      player.x = 1;
      player.y = 0;
      player.hp = player.maxHp;
      player.mp = player.maxMp;
      scene = "dungeonA";
    }
  }
}
