function trasureHunt(input) {
    let state = input.shift().split('|');
    let command = input.shift();

    while (command !== "Yohoho!") {
        let tokens = command.split(' ');
        let action = tokens.shift(); // махам елементите с команди
        switch (action) {
            case "Loot":
                for (let el of tokens) {    //фор оф цикъл да намеря останалите елементи
                    if (state.includes(el)) {
                        continue;
                    }
                    state.unshift(el);
                }
                break;
            case "Drop":
                let index = Number(tokens[0]);
                if (index < 0 || index > state.length - 1) {
                    command = input.shift();
                    continue;
                }
                let el = state.splice(index, 1) //това ще върне като резултата самия елемент
                state.push(el);
                break;
            case "Steal":
                let count = Number(tokens[0]);
                let elements = state.splice(- count); // когато му подадеем отрицателно число, започва да маха от края на масива;
                console.log(elements.join(', '));
                break;
        }
        command = input.shift();
    }
    if (state.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0;
        for (const el of state) {
            sum += el.length;
        }
        let avg = sum / state.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }
}
trasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])