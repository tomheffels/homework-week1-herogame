// Write your JS here
let hero = {
    name: "Frosty the Snowman",
    heroic: false,
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
    /* else {
           alert(`Good morning ${hero.name}, your health is fully replenished! Health: ${hero.health}`)
       } */
    hero.health = 10;
    console.log(`Health: ${hero.health}`)
    return hero;
};

function pickUpItem(hero, weapon) {
    if (weapon === 'dagger') {
        weapon = {
            type: 'dagger',
            damage: 2
        }
    }
    hero.inventory.push(weapon)
        // alert(`A ${weapon.type} was added to your inventory.`)
    console.log(`A ${weapon.type} was added to your inventory.`)
    console.log(hero.inventory)
        // document.getElementById('dagger').remove();
};

function equipWeapon(hero) {
    if (hero.inventory.length === 0) {

    } else {
        hero.weapon = hero.inventory[hero.inventory.length - 1]
    }
    // alert(`You equipped your ${hero.weapon.type}.`)
    console.log(`You equipped your ${hero.weapon.type}.`)
    console.log(hero.weapon)
}

function displayStats(hero) {
    document.writeln("YOUR HERO ");
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
        console.log(`Hero's name changed to ${heroName}`)
    }
}

document.getElementById("changeHeroName").onclick = function() {
    setHeroName(hero);
}

function fightMonster(hero) {
    alert(`A monster appeared right in front of you, ${hero.name}, time to fight!`)
    hero.health = (hero.health - 3);
    alert(`The monster attacked first, you took 3HP of damage.`)
    hero.heroic = true
    alert(`You knocked the monster's lights out with your ${hero.weapon.type}. You are now a true hero, ${hero.name}!`)
    console.log(hero)
    document.getElementById('monster').remove();
}

console.log(hero)
displayStats(hero)