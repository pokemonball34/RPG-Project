var scene = "GameOver";
var select = 0;
var bMenuX = [10, 201];
var bMenuY =[60, 60, 110, 110, 160, 160, 210, 210, 259, 259];
var battleMenuX = [0, 80, 160, 240, 319];
var aMenuX = [10, 200];
var aMenuY = [60, 60, 110, 110, 160, 160];
var partyMembers = 1;
var turn = 0;
var mapHome = [
    [2, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 2, 1, 0],
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

var items = {
  potion: {
    name: "Potion",
    dmg: -20,
    crit: 0,
    description: "A potion that heals 20HP to one ally.",
  },
  
  bluePotion: {
    name: "Blue Potion",
    dmg: -20,
    description: "A blue potion that recovers 20MP to an ally.",
    target: "ally"
  },
  
  hCheese: {
    name: "Holey Cheese",
    dmgtype: "light",
    dmg: 50,
    crit: 0,
    description: "A heavenly piece of cheese that deals 50 damage of light damage to an enemy. It's filled with tons of holes...",
    target: "enemy"
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
    crit: 0,
    description: "A weak fire attack. Can cause the target to burn.",
    target: "enemy",
  },
  sparks: {
    name: "Sparks",
    dmgtype: "elec",
    dmg: 40,
    crit: 0,
    description: "A weak electric attack.",
    target: "enemy"
  },
  frost: {
    name: "Frost",
    dmgtype: "ice",
    dmg: 25,
    crit: 0,
    description: "A weak ice attack. Can cause the target to become stunned.",
    target: "enemy"
  },
  glow: {
    name: "Glow",
    dmgtype: "light",
    dmg: 25,
    crit: 0,
    description: "A weak light attack. If target is weak to light, it has a chance to do true damage to all foes.",
    target: "enemy"
  },
  shadows: {
    name: "Shadows",
    dmgtype: "dark",
    dmg: 25,
    crit: 0,
    description: "A weak dark attack. If target is weak to darkness, it has a chance to do double damage to the target",
    target: "enemy"
  },
  soothe: {
    name: "Soothe",
    dmg: -20,
    description: "Heals an ally a low amount of health",
    target: "ally"
  },
  doubleSlash: {
    name: "Double Slash",
    dmgtype: "physical",
    dmg: 40,
    crit: 10,
    description: "A weak physical attack that can hit twice.",
    target: "enemy"
  }
};

var player = {
  firstName: "Saurel",
  lastName: "Auralius",
  hp: 100,
  maxHp: 100,
  mp: 30,
  maxMp: 30,
  def: 15,
  res: 10,
  spd: 15,
  physAtk: 40,
  magAtk: 20,
  charisma: 1,
  x: 0,
  y: 9,
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

var enemy = {
  name: "Dummy C",
  x: 14,
  y: 9,
  hp: 150,
  maxHp: 150,
  mp: 20,
  maxMp: 20,
  physAtk: 50,
  magAtk: 10,
  def: 10,
  res: 0,
  spd: 10,
};

var turnOrder = [player.spd, enemy.spd];
function textbox() {
  
};

function battle() {
  turnOrder.sort(function(a, b){return b-a});
  if (keyWentDown(39) && select < 4) { //Right
    select++;
  }
  else if (keyWentDown(37) && select > 0) { //Left
    select--;
  }
  else if (select === 0 && keyWentDown(13)) { //Attack Button
    if (player.physAtk >= enemy.def) {
      var dmg = player.physAtk - enemy.def;
      enemy.hp -= dmg;
    }
    turn++;
  }
  else if (select === 1 && keyWentDown(13)) { //Abilities Button
    scene = "aMenu";
    select = 0;
  }
  else if (select === 2 && keyWentDown(13)) { //Items Button
    scene = "bMenu";
    select = 0;
  }
  else if (select === 3 && keyWentDown(13)) { //Defend Button
    var defending = true;
  }
  else if (select === 4 && keyWentDown(13)) { //Escape Button
    scene = "Overworld";
    player.x -= 1;
  }
  if (enemy.hp <= 0) {
    scene = "Overworld";
    enemy.x = -1;
    enemy.y = -1;
  }
  if (player.hp <= 0) {
    scene = "GameOver";
  }
};
var colorMap;

function setup() {
  createCanvas(400, 400);
  background(255);
  fill(160, 229, 0);
  noStroke();
  rect(player.x * 25, player.y * 25, 25, 25);
  colorMap = [
    color(0, 0, 0),     //Tile 0
    color(0, 51, 153),  //Tile 1
    color(249, 47, 47) //Tile 2
  ];
}

function draw() {
  if (scene === "Overworld") {
    background(255);
    if ((player.x === enemy.x + 1 && player.y === enemy.y) || 
        (player.x === enemy.x - 1 && player.y === enemy.y) || 
        (player.y === enemy.y + 1 && player.x === enemy.x) || 
        (player.y === enemy.y - 1 && player.x === enemy.x)) {
      scene = "Battle";
    }
    if (keyWentDown(27)) {
      scene = "Menu";
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
    
    fill(255, 128, 0);
    noStroke();
    rect(enemy.x * 25, enemy.y * 25, 25, 25);  //Enemy
    }

    else if (scene === "Battle") {
        background(255);
        if (turn === 0) {
          scene === "Battle";
        }
        if (turn === 1) {
          var dmg = enemy.physAtk - player.def;
          player.hp -= dmg;
          turn++;
        }
        if (turn === 2) {
        turn = 0;
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
        text(enemy.name, 155, 120);
        text("HP: " + enemy.hp, 155, 155);
        text("MP: " + enemy.mp, 155, 170);
        
        fill(143, 147, 155);
        rect(0, 0, 400, 50);
        stroke(0);
        rect(battleMenuX[select], 0, 80, 49); //Selection indicator
        noStroke();
        fill(0);
        text("Attack", 20, 25);
        text("Abilities", 100, 25);
        text("Items", 180, 25);
        text("Defend", 260, 25);
        text("Escape", 340, 25);
        
        battle();
      }
    if (scene === "bMenu") {
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
      fill(173, 204, 255);
      rect(10, 60, 380, 250);
      stroke(0);
      rect(bMenuX[select % 2], bMenuY[select], 188, 50);  //Selection indicator
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
    else if (scene === "aMenu") {
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
      fill(173, 204, 255);
      rect(10, 60, 380, 150);
      stroke(0);
      rect(aMenuX[select % 2], aMenuY[select], 189, 49); //Selection indicator
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
      textSize(18);
      text(player.spells[select].description, 25, 240, 365);
      }
    }
    else if (scene === "Menu") {
      if (keyWentDown(27)) {
        scene = "Overworld";
      }
      background(255);
      textSize(24);
      text("Menu", 200, 100);
      text("Items", 200, 175);
      text("Items", 200, 250);
      text("Options", 200, 325);
      text("Save", 200, 400);
    }
    else if (scene === "GameOver") {
      if (keyWentDown(27)) {
        player.x = 0;
        player.y = 9;
        player.hp = player.maxHp;
        player.mp = player.maxMp;
        scene = "Overworld";
      }
      background(0);
      fill(0);
      rect(100, 100, 100, 100);
      fill(255);
      textSize(32);
      text("GAME OVER", 100, 100);
    }
  }
