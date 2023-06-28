function solve(input) {
    let firstEployeeEfficiency = Number(input[0]); // или с шифт;  и / input = input.map(Number);
    let secondEployeeEfficiency = Number(input[1]);
    let thirdEployeeEfficiency = Number(input[2]);
    let totalStudents = Number(input[3]);

    let studentsPerHour = firstEployeeEfficiency + secondEployeeEfficiency + thirdEployeeEfficiency;
    let answeredStudents = 0;
    let hours = 0;

    while (answeredStudents < totalStudents) {
        if (hours % 4 === 0 && hours !== 0) {
            hours++;
            continue;
        }
        answeredStudents += studentsPerHour;
        hours++;
    }
    if (hours % 4 === 0 && hours !== 0) {
        hours++;
    }
    console.log(`Time needed: ${hours}h.`);
}
solve(['5', '6', '4', '20'])