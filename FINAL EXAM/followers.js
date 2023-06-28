function follow(input) {

  let currentLine = input.shift().split(': ');
  let command = currentLine.shift();
  let followers = {};
  //let currentLine = input.shift().split(": ");
  //let command = currentLine[0];
  //let names = currentLine[1];
  //let actionCount = Number(currentLine[2]);
  let arrResult = [];

  while (command !== 'Log out') {
    
    switch (command) {
      case 'New follower': {
        let names = currentLine.shift();
        if (followers[names]) {
          break;
        } else {
          followers[names] = [];
        }
        break;
    }
      case 'Like': {
        let names = currentLine.shift();
        let like = Number(currentLine.shift());
        if(followers[names]) {
          if(followers[names].likes) {
            followers[names].likes.push(like);
          } else{
            followers[names].likes = [];
            followers[names].likes.push(like);
          }
        } else {
            followers[names] = [];
            followers[names].likes = [];
            followers[names].likes.push(like);
        }
        break;
      }
      case 'Comment' : {
        let names = currentLine.shift();
        let like = Number(currentLine.shift());
        if(followers[names]) {
          if(followers[names].likes) {
            followers[names].likes.push(1);
          } else{
            followers[names].likes = [];
            followers[names].likes.push(1);
          } 
        } else {
            followers[names] = [];
            followers[names].likes = [];
            followers[names].likes.push(1);
        }
        break;
      }
      case 'Blocked' : {
        let names = currentLine.shift();
        if(followers[names]) {
            delete followers[names]
        } else {
            console.log(`${names} doesn't exist.`);
        }
      }
    }
    currentLine = input.shift().split(': ');
    command = currentLine.shift();
  }
    console.log(Object.keys(followers).length + ' ' + `followers`);
    let entries = Object.entries(followers);
    for(let entry of entries){
      let names = entry[0];
      let likesComments = entry[1].likes;
      const sum = likesComments.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
    console.log(`${names}: ${sum}`);     
}
}
follow(["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])





