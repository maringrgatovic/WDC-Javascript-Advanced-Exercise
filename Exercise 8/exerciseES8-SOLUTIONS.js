// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

//.trim() method trims all spaces from the turtle we created in the previous task.
//then to that string we just add padding at the end but not of spaces, but instead of '=' signs.
//so the resulting string should look like this turtle = '🐢======='.


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

let values = obj.values;
let keys = obj.keys;
let sentence = `${keys[0]} ${values[0]} ${keys[1]} ${values[1]} ${keys[2]} ${values[2]}`;
console.log(sentence);
