function toShoppingList(input) {
    // let initialShoppingList = input.shift().split('!'); - chain method
    let rawList = input.shift(); // махам списъка с продукти
    let commands = input.slice(); // вземам остатъка в нов масив
    let shoppingList = rawList.split('!'); // разделям и махам удивителните
    let currentLine = commands.shift();

    while (currentLine != 'Go Shopping!') {
        let lineArgs = currentLine.split(' '); // разделям последващите команди за да станат стринг
        let command = lineArgs[0]; // обхождам стринга 
        let firstArgument = lineArgs[1];
        let secondArgument = lineArgs[2];

        switch (command) {
            case 'Urgent':
                if (!shoppingList.includes(firstArgument)) { // ако го има/ няма  някъде из масива
                    shoppingList.unshift(firstArgument); //поставям го на първо място
                }
                break;
            case 'Unnecessary':
                let itemIndex = shoppingList.indexOf(firstArgument); // намирам индекса на аргумента
                if (itemIndex > -1) { // понеже индексите започват от 0 + 
                    shoppingList.splice(itemIndex, 1); // ще го махна, 1 елемент след посочения
                }
                break;
            case 'Correct':
                let updateIndex = shoppingList.indexOf(firstArgument);
                if (updateIndex > -1) {
                    shoppingList[updateIndex] = secondArgument; //това ще презапише елемента на посочената втора позиция
                    // initialShoppingList.splace(updateIndex, 1, secondArgument ) // ще постави  индекса на вториа аргумент, а него ще изтрие
                }
                break;
            case 'Rearrange':
                let removeIndex = shoppingList.indexOf(firstArgument);
                if (removeIndex > -1) {
                    let element = shoppingList[removeIndex]; //вземам елемента преди да го изтрия
                    shoppingList.splice(removeIndex, 1); //изтривам го / ако напиша лет .... = на сплайснатия, ща направи нов арей
                    shoppingList.push(element); // добавям го най- накрая на масива
                }
                break;
        }
        currentLine = commands.shift(); // махам първия елемент от масива, за да мога да го завъртя отново
    }
    console.log(shoppingList.join(', '));
}
toShoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
