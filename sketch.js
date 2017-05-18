var mapHome = [
  [ //Background Layer
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
  ],
  
  [  //Actor Layer
    ["a", "b", "a", "a", "a", "a", "a", "a", "a", "a", "b", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
  ],
  
  [ //Player Layer
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
  ],
];

var player = {
  firstName: "Saurel",
  lastName: "Arrundis",
  hp: 100,
  def: 30,
  res: 20,
  spd: 15,
  physAtk: 40,
  magAtk: 20,
  charisma: 1,
  spells: {
    
  },
  inventory: "",
  x: 0,
  y: 9,
};

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
    dmgtype: "dark",
    dmg: 25,
    crit: 0,
    description: "A weak dark attack. If target is weak to darkness, it has a chance to do double damage to the target",
  },
  lesserheal: {
    dmg: -20,
    description: "Heals an ally a low amount of health."
  },
};

function setup() {
  createCanvas(400, 400);
  background(255);
  mapHome[2][player.y][player.x] = mapHome[2][player.y][player.x].replace("a", "Hero");
}

function draw() {
  if (keyWentDown(39) && (player.x < mapHome[2][player.y].length - 1) && (mapHome[0][player.y][player.x + 1] !== 2)) { //Right
    mapHome[2][player.y][player.x] = mapHome[2][player.y][player.x].replace("Hero", "a");
    player.x += 1;
    mapHome[2][player.y][player.x] = mapHome[2][player.y][player.x].replace("a", "Hero");
  } 
  else if (keyWentDown(37) && (player.x > 0) && (mapHome[0][player.y][player.x - 1] !== 2)) { //Left
    mapHome[2][player.y][player.x] = mapHome[2][player.y][player.x].replace("Hero", "a");
    player.x -= 1;
    mapHome[2][player.y][player.x] = mapHome[2][player.y][player.x].replace("a", "Hero");
  }
  else if (keyWentDown(38) && (player.y > 0) && (mapHome[0][player.y - 1][player.x] !== 2)) { //Up
    mapHome[2][player.y][player.x] = mapHome[2][player.y][player.x].replace("Hero", "a");
    player.y -= 1;
    mapHome[2][player.y][player.x] = mapHome[2][player.y][player.x].replace("a", "Hero");
  }
  else if (keyWentDown(40) && (player.y < mapHome[2].length - 1) && (mapHome[0][player.y + 1][player.x] !== 2)) {  //Down
    mapHome[2][player.y][player.x] = mapHome[2][player.y][player.x].replace("Hero", "a");
    player.y += 1;
    mapHome[2][player.y][player.x] = mapHome[2][player.y][player.x].replace("a", "Hero");
  }
  
  //The Map 
  for (var layer = 0; layer < mapHome.length; layer++) { //Prints each Layer
    for (var row = 0; row < mapHome[layer].length; row += 1) {  //Tile Row
      for (var column = 0; column < mapHome[layer][row].length; column++) { //Tile column
        if (mapHome[layer][row][column] === 0) {
          fill(0);
          rect(column * 25, row * 25, 25, 25);
        }
        else if (mapHome[layer][row][column] === 1) {
          fill(0, 51, 153);
          noStroke();
          rect(column * 25, row * 25, 25, 25);
        }
        else if (mapHome[layer][row][column] === 2) {
          fill(249, 47, 47);
          noStroke();
          rect(column * 25, row * 25, 25, 25);
        }
        else if (mapHome[layer][row][column] === "b") {
          fill(88, 204, 77);
          noStroke();
          rect(column * 25, row * 25, 25, 25);
        }
        else if (mapHome[layer][row][column] === "Hero") { //The Player
          fill(160, 229, 0);
          noStroke();
          rect(column * 25, row * 25, 25, 25);
        }
      }
    }
  }
}

