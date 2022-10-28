// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let arrayForEach = [];
array.forEach((user) => {
    let { username } = user;
    username = username + "!";
    arrayForEach.push(username);
})
console.log("For Each Array", arrayForEach);


//Create an array using map that has all the usernames with a "? to each of the usernames
let arrayMap = array.map((user) => {
    let { username } = user;
    return username + "?";     
})
console.log('Map Array', arrayMap);


//Filter the array to only include users who are on team: red
let arrayFilter = array.filter((user) => {
    return user.team === "red";
})
console.log("Filter Array", arrayFilter);


//Find out the total score of all users using reduce
let reduceResult = array.reduce((acc, user) => {
    return acc + user.score;
}, 0)
console.log("Reduce Result", reduceResult);


// (1), what is the value of i?
// In map method i is the INDEX of the array elements

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
let newItemsArray = array.map((user) => {
    let {username, team, score, items} = user;
    items = items.map(item => item + "!");
    
    let newUser = { username,team,score,items};
    return newUser;
})
