function solve(input) {
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let flourPrice = Number(input[2]);
    let eggPrice = Number(input[3]);
    let apronPrice = Number(input[4]);
    let packageCounter = 0;

    let totalApronPrice = apronPrice * Math.ceil(students * 1.2);
    let totalEggPrice = eggPrice * 10 * students;


    for (let index = 1; index <= students; index++) {
        if(index % 5 === 0) {
            packageCounter++;
        }
    }

    let totalFlourPrice = flourPrice * (students - packageCounter);
 
    let budgerPerStudent = totalApronPrice + totalEggPrice + totalFlourPrice;
    

    if(budget >= budgerPerStudent) {
        console.log(`Items purchased for ${budgerPerStudent.toFixed(2)}$.`);
    } else {
        console.log(`${Math.abs(budget - budgerPerStudent).toFixed(2)}$ more needed.`);
    }
}
solve([50,
    2,
    1.0,
    0.10,
    10.0])
    
     
    
    
    