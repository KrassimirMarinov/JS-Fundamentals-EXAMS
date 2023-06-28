function solve(input) {
    let action = input.shift().split('||');
    let fuel1 = input.shift();
    let amunition1 = input.shift();
    let fuel = Number(fuel1);
    let amunition = Number(amunition1);
    let missingFuel = 0;
    let missingAmunition = 0;

    let isFailed = false;


    for (let i = 0; i < action.length; i++) {
        let singleAction = action[i];

        let tokens = singleAction.split(' ');
        let command = tokens[0];
        let value = tokens[1];
        let currentFuel = fuel - missingFuel;
        let currentAmunition = amunition - missingAmunition;
        
       

        if (command === 'Travel') {
            if (currentFuel >= value) {
                console.log(`The spaceship travelled ${value} light-years.`);
                missingFuel += value;
            } else {
                isFailed = true;
                break;
            }
        }
        if (command === 'Enemy') {
            if (currentAmunition >= value) {
                console.log(`An enemy with ${value} armour is defeated.`);
                missingAmunition += value;
            } else if (currentAmunition < value && (currentFuel * 2) >= value) {
                console.log(`An enemy with ${value} armour is outmaneuvered.`);
                missingFuel += value * 2;
            } else {
                console.log(`Mission failed.`);
                isFailed = true;
                break;
            }
            
        }

        if (command === 'Repair') {
            console.log(`Ammunitions added: ${value * 2}.`);
            console.log(`Fuel added: ${value}.`);
            currentAmunition += value * 2;
            currentFuel += value;
        }
        if (command === 'Titan') {
            console.log(`You have reached Titan, all passengers are safe.`);
            break;
        }
        if (isFailed) {
            console.log(`Mission failed.`);
            break;
        }
    }
}
solve(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100'])
solve(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80'])


