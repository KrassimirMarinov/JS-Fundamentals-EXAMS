function solve (input) {
    let studentCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());
    let students = input.map(Number);
    let maxBonus = 0;
    let maxLectures = 0;

    for (let i = 0; i < studentCount; i++) {
        let currentLectureCount = students[i];
        let currentBonus = currentLectureCount / lecturesCount * (5 + initialBonus);
        if(currentBonus > maxBonus) {
            maxBonus = currentBonus;
            maxLectures = currentLectureCount
        }
    }
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${maxLectures} lectures.`);
}
solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])
  