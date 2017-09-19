
// Madlibs!

// Step 1: Construct an array of company names, like Uber, Lyft, Google, Apple
var companies = ['Snapchat', 'Uber', 'General Mills', 'Nintendo', 'Blue Apron', 'Facebook', 'Neutrogena'];

// Step 2: Construct a silly array of animals
var animals =['rabbits', 'acorn squash', 'fruit bats', 'salamanders', 'hickory smoked ham', 'salmon', 'giraffes'];

// Step 3: Make a loop that makes a sentence similar to
// "My company is an Uber for dogs!" Spit out at least 5 sentences to the console.log()

for ( var i = 0; i < companies.length ; i++){
  console.log("My company is a " + companies[i] + " for " + animals[i] + "!");
}

// Bonus challenge: randomize the selection of the company names and animals

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

for ( var i = 0; i < 3 ; i++){
  console.log("My company is a " + companies[getRandomInt(0,7)] + " for " + animals[getRandomInt(0,7)] + "!");
}

// Bonus challenge for those of you who know some jQuery:
// populate the HTML with a name of one company!
