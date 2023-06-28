function muOnline(line) {
    let rooms = line.split('|');
    let health = 100;
    let bitcoins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i];

        let tokens = room.split(' ');
        let command = tokens[0];
        let value = Number(tokens[1]);


        if (command === 'potion') {
            let missingHP = 100 - health;
            let restoreHealth = Math.min(missingHP, value);
            health += restoreHealth;
            console.log(`You healed for ${restoreHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);

                return /// спирам цикъла преди да стигна до края.
            }
            console.log(`You slayed ${command}.`);
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");