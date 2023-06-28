function solve(arr) {
  let secretMessage = arr.shift();
  for (let i = 0; i < arr.length; i++) {
    let tokens = arr[i].split(":|:");
    let command = tokens[0]; // отделям командата
    let values = tokens.slice(1); // всичко след първия елемент го слагам в нов масив

    switch (command) {
      case "InsertSpace": {
        let index = values[0];// za da stane trqbva da go razdelq до indeksa i posle da dobawq ''
        let leftSide = secretMessage.substring(0, index);
        let rightSide = secretMessage.substring(index);
        secretMessage = leftSide + ' ' + rightSide;
        console.log(secretMessage);
        break;
      }    
      case "Reverse": {
        let substring = values[0];
        if (secretMessage.includes(substring)) { 
          secretMessage = secretMessage.replace(substring, ''); // заменяме попадението с празен стринг/ изтриваме го
          let reversed = reverseStr(substring);// прехвърлям го в арей за да мога да го обърна 
          secretMessage += reversed;// добавям го отново
          console.log(secretMessage);
        } else {
          console.log("error");
        }
        break;
      }
      case "ChangeAll": {
        let substring = values[0];
        let replacement = values[1];
        while (secretMessage.includes(substring)) {
          secretMessage = secretMessage.replace(substring, replacement);
        }
        console.log(secretMessage);
        break;
      }
      case "Reveal": {
        console.log(`You have a new text message: ${secretMessage}`);
        return;
      }
    }
    function reverseStr(text) {
      return text.split('').reverse().join(''); // правя го на арей, ревърсвам и го правя пак стринг.
    }
  }
}
solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
