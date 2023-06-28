function guineaPig(input) {
    let foodKg = Number(input.shift());
    let hayKg = Number(input.shift());
    let coverKg = Number(input.shift());
    let weightKg = Number(input.shift());
    let hasToGoToStore = false;
    

    for (let i = 1; i <= 30; i++) {
        foodKg = foodKg - 0.3;

        if (i % 2 === 0) {
            hayKg -= foodKg * 0.05;
        }
        if (i % 3 === 0) {
            coverKg -= weightKg / 3;
        }
        if(foodKg <= 0 || hayKg <= 0 || coverKg <= 0) {
            hasToGoToStore = true;
            break;
        }
    }
    if(hasToGoToStore === true) {
        console.log('Merry must go to the pet store!');
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`);
    }
}
guineaPig(["10",
    "5",
    "5.2",
    "1"])
    ;