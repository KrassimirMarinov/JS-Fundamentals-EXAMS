function solve(arr) {
    let trueFirst = arr.shift().split(' ');
    let trueSecond = arr.shift().split(' ');
    let counter = 0;
    let resultArray = [];
    let leftoversArray = [];
    for (let index = 0; index < trueFirst.length; index++) {  
            resultArray.push(Number(trueFirst[index]) + Number(trueSecond[index]));   
    }
    for (let index = 0; index < resultArray.length; index++) {
        let tempNum  = Number(resultArray[index]);
        if(tempNum >= 10) {

            if(tempNum === 10) {
                counter++
            } else if(tempNum > 10){
                tempNum = tempNum - 2;
                if(tempNum === 10) {
                    counter++
                } else if(tempNum > 10){
                    tempNum = tempNum - 2;
                    if(tempNum === 10) {
                        counter++
                    } else if(tempNum > 10){
                        tempNum = tempNum - 2;
                        if(tempNum === 10) {
                            counter++
                        } else if(tempNum > 10){
                            tempNum = tempNum - 2;
                            if(tempNum === 10) {
                                counter++
                            } else if(tempNum > 10){
                                tempNum = tempNum - 2;
                            } else if(tempNum < 10) {
                                leftoversArray.push(Number(tempNum));
                            }
                        } else if(tempNum < 10) {
                            leftoversArray.push(Number(tempNum));
                        }
                    } else if(tempNum < 10) {
                        leftoversArray.push(Number(tempNum));
                    }
                } else if(tempNum < 10) {
                    leftoversArray.push(Number(tempNum));
                }
            } else if(tempNum < 10) {
                leftoversArray.push(Number(tempNum));
            }
                
            } else if(tempNum < 10) {
                leftoversArray.push(Number(tempNum));
            }
        }
        const sum = leftoversArray.reduce((accumulator, value) => {
            return accumulator + value;
          }, 0); 
        let morePieces = Math.floor(sum / 10);
        let wholeSum = counter + morePieces;
        if(counter + morePieces >= 7) {
            console.log(`Great success, you created ${wholeSum} earrings.`);
        } else {
            console.log(`Keep trying, you need ${Math.abs(wholeSum - 7)} more earrings.`);
        }
      
    }
solve((['5 3 2 2 4', 
'5 5 8 2 6']) 
 
)