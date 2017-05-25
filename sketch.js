var scene = "Battle";
var mapHome = [
    [2, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 2, 1, 0],
    [2, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 1],
    [2, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 2, 1, 0],
    [0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 2, 0, 1],
    [1, 0, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1, 2, 1, 0],
    [0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 2, 0, 1],
    [2, 2, 1, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
];

var spells = {
  embers: {
    name: "Embers",
    dmgtype: "fire",
    dmg: 30,
    crit: 0,
    description: "A weak fire attack. Can cause the target to burn",
    
  },
  sparks: {
    name: "Sparks",
    dmgtype: "elec",
    dmg: 40,
    crit: 0,
    description: "A weak electric attack."
  },
  frost: {
    name: "Frost",
    dmgtype: "ice",
    dmg: 25,
    crit: 0,
    description: "A weak ice attack. Can cause the target to become stunned.",
  },
  glow: {
    name: "Glow",
    dmgtype: "light",
    dmg: 25,
    crit: 0,
    description: "A weak light attack. If target is weak to light, it has a chance to do true damage to all foes.",
  },
  shadows: {
    name: "Shadows",
    dmgtype: "dark",
    dmg: 25,
    crit: 0,
    description: "A weak dark attack. If target is weak to darkness, it has a chance to do double damage to the target",
  },
  soothe: {
    name: "Soothe",
    dmg: -20,
    description: "Heals an ally a low amount of health."
  },
  doubleSlash: {
    name: "Double Slash",
    dmgtype: "physical",
    dmg: 40,
    crit: 10,
    description: "A weak physical attack that can hit twice."
  }
};

var player = {
  firstName: "Saurel",
  lastName: "Auralius",
  hp: 100,
  maxHp: 100,
  mp: 30,
  maxMp: 30,
  def: 30,
  res: 20,
  spd: 15,
  physAtk: 40,
  magAtk: 20,
  charisma: 1,
  x: 0,
  y: 9,
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
  hp: 50,
  maxHp: 50,
  mp: 20,
  maxMp: 20,
  def: 10,
  res: 0,
  spd: 10,
};

function startBattle() {
  scene = "Battle";
  
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
        text(player.firstName + " " + player.lastName, 100, 180);
        text("HP: " + player.hp, 100, 200);
        text("MP: " + player.mp, 100, 220);
        text("Attack", 50, 150);
        text("Abilities", 100, 150);
        text("Items", 150, 150);
        text("Defend", 190, 150);
        text("Escape", 240, 150);
    }
    else if (scene === "Event") {
    }
    else if (scene === "Menu") {
      if (keyWentDown(27)) {
        scene = "Overworld";
      }
      background(255);
      textSize(24);
      text("Menu", 200, 100);
    }
} 
