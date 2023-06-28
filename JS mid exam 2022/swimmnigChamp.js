function solve(input) {
    let days = input.shift();
    let neededPoints = input.shift();
    let swimmersCount = input.shift();
    let hotelRoomPrice = input.shift();
    let participationFee = input.shift();
    let realFee = Number(swimmersCount) * Number(participationFee);
    let bonusScore = 0;
    let earnedPoints = 0;

    for (let index = 0; index < input.length; index++) {
        if(index == 0) {
            let tempPoints = Number(input[index])  //+ (Number(input[index]) * 0.05);
            earnedPoints += tempPoints
        } else {
            let tempPoints = Number(input[index])  + (Number(input[index - 1]) * 0.05);
            earnedPoints += tempPoints
        }
         
    }   
        
    if(earnedPoints >= neededPoints) {
        let sum = Number(days) * Number(swimmersCount) * Number(hotelRoomPrice) + Number(realFee);
        let discountSum = sum * 0.75;
        console.log(`Money left to pay: ${discountSum.toFixed(2)} BGN.`);
        console.log(`The championship was successful!`);
    } else {
        let sum = Number(days) * Number(swimmersCount) * Number(hotelRoomPrice) + Number(realFee);
        let discountSum = sum * 0.90;
        console.log(`Money left to pay: ${discountSum.toFixed(2)} BGN.`);
        console.log(`The championship was not successful.`);
    }
}
solve((["3",
"500",
"5",
"100.9",
"50.1",
"100.5",
"301.0",
"80.0"])
)