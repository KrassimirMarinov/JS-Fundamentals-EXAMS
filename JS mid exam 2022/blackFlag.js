function blackFlag(input) {
    let days = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder = Number(input.shift());
    let totalPlunder = 0;

    for (let index = 1; index <= days; index++) {
        totalPlunder += dailyPlunder;
        if (index % 3 === 0) {
            totalPlunder += dailyPlunder / 2;
        }
        if (index % 5 === 0) {
            totalPlunder = totalPlunder * 0.7;
        }
    }
    let percentage = totalPlunder / expectedPlunder  * 100;
    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["5", "40", "100"])
blackFlag(["10",
"20",
"380"])

