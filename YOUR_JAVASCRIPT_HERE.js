// Write your JS here
let hero = {
    name: "Frosty the Snowman",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "snowball",
        damage: 2
    }
};

function rest(hero) {
    if (hero.health === 10) {
        alert("No need to rest now, " + hero.name + "! Your health is still full...")
    }
    hero.health = 10;
    con
    sole.log(hero.health)
    return hero;

};

function pickUpItem(hero, weapon) {
    if (weapon === 'dagger') {
        weapon = {
            type: "dagger",
            damage: 2
        }
    }
    hero.inventory.push(weapon)
    console.log(hero.inventory)
};

function equipWeapon(hero) {
    if (hero.inventory.length === 0) {

    } else {
        hero.weapon = hero.inventory[hero.inventory.length - 1]
    }
    console.log(hero.weapon)
}

function displayStats(hero) {
    document.write("YOUR HERO ");
    document.writeln("name: " + hero.name.toUpperCase());
    document.writeln("health: " + hero.health + "HP");
    document.writeln("weapon type: " + hero.weapon.type.toUpperCase());
    document.writeln("weapon damage: " + hero.weapon.damage + "HP");
}

var myButton = document.querySelector('button');

function setHeroName(hero) {
    let heroName = prompt("Please enter your hero's name.");
    if (!heroName) {
        alert("You forgot to write a name, silly!")
    } else {
        hero.name = heroName;
    }
}

document.getElementById("changeHeroName").onclick = function() {
    setHeroName(hero);
}

displayStats(hero)