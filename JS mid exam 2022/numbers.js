function solve(input) {
    let arr = input.split(" ");
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        sum += arr[i];
    }
    let avg = sum / arr.length;

    let result = []; // правя си нов арр, където пушвам получените от фороф цикъла елементи;
    for (let el of arr) {
        if (el > avg) {
            result.push(el);
        }
    }
    result.sort((a, b) => b - a) // сортвам аррея така че да ми ги подреди по големина
    let buff = "";
    for (let i = 0; i < 5; i++) {
        if (result[i]) {
            buff += result[i] + " ";
        }

    }
    if (buff.length === 0) {
        console.log("No");
    } else {
        console.log(buff);
    }
}
solve('10 20 30 40 50')