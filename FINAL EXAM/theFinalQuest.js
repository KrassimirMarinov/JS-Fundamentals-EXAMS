function solve(input){
    let sentence = input.shift().split(' ');
    let commands = input.shift().split(' ');
   
  
    while(commands[0] !== 'Stop'){
      
      switch(commands[0]){
          case 'Delete':
             let ind = Number(commands[1]);
             if(ind + 1 < sentence.length && ind + 1 >= 0){
                 sentence.splice(ind + 1,1);
             }
             ;break;
  
          case 'Swap':
            let wordOne = sentence.indexOf(commands[1]);
            let wordTwo = sentence.indexOf(commands[2]);
            [sentence[wordOne],sentence[wordTwo]] = [sentence[wordTwo],sentence[wordOne]];
            ;break;
  
          case 'Put':
            let word = commands[1];
            let index = Number(commands[2]);
            if(index -1 < sentence.length && index -1 >= 0) {
                sentence.splice(index - 1,0,word);
            }          
            ;break;
  
          case 'Sort':
             sentence.sort((a,b) => b.localeCompare(a));
            ;break;
  
          case 'Replace':
             let word1 = commands[1];
             let word2 = commands[2];
             if(sentence.includes(word2)){
                let word2Ind = sentence.indexOf(word2);
                sentence.splice(word2Ind,1,word1);
             }
            ;break;
      }
      commands = input.shift().split(' ');
    }
    console.log(sentence.join(' '));
 }
solve((["Congratulations! You last also through the have challenge!",
"Swap have last",
"Replace made have",
"Delete 2",
"Put it 4",
"Stop"])
);