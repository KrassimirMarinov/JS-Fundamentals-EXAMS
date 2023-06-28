function encryptPass (array){
    let number = Number(array.shift());
    let pattern = /(?<symbol>[\w\W]+)>(?<firstCase>\d{3})\|(?<secondCase>[a-z]{3})\|(?<thirdCase>[A-Z]{3})\|(?<fourthCase>[\W\w^<>]{3})<\k<symbol>/g;
    for (let i = 0 ; i<number; i++){
        let match = pattern.exec(array[i]);
        if (match){
            let nums = match.groups['firstCase'];
            let lowerCases = match.groups['secondCase'];
            let upperCases = match.groups['thirdCase'];
            let symbols = match.groups['fourthCase'];
            let result = nums + lowerCases + upperCases + symbols;
            console.log(`Password: ${result}`);
        }
        else {
            console.log('Try another password!');
        }
        match = pattern.exec(array[i]);
    }
}

encryptPass(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])

