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
        alert("No need to rest now, Frosty! You're health is still full...")
    }
    hero.health = 10;
    return hero;
};

function pickUpItem(hero, weapon) {
    if (weapon === 'dagger') {
        weapon = {
            type: "dagger",
            damage: 2
        }
    }
    console.log(weapon)
    hero.inventory.push(weapon)
};

function equipWeapon() {

};


}