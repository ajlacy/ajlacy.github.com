// Use this file to implement Part One of your project

var animal = {};
animal.species = "dog";

//Using dot notation, ensure that your species property exists on animal
console.log (animal.species);

//Using bracket notation, add a property called tagline and give it a value
animal["tagline"] = "Rub my belly";

//Using brakcet notation, check and make sure that your property exists on the animal object
console.log (animal["tagline"]);

//Using either bracket or dot notation, add a property called noises and assign it the value noll
animal.noises = null;

console.log(animal);


//Create a variable called noiseArray and assign it to an empty array.
var noisesArray = [];
//Using bracket notation, add a noise as a string that your animal makes to the noiseArray.
noisesArray[0] = "bark bark";
console.log(noisesArray);
//Using a native array method, add another noise to the end of the noiseArray.
noisesArray.push("woof woof");
console.log(noisesArray);

//Using a different method, add a noise to the beginning of the noiseArray.
noisesArray.unshift("bow wow");
console.log(noisesArray);
//Using bracket notation again, add another noise to the end.
noisesArray[noisesArray.length] = "howl howl"; 
console.log(noisesArray);
//What is the length of the noiseArray? Check it.
console.log(noisesArray.length);
//What is the last index on the noiseArray? How is it different than the length?
console.log(noisesArray[noisesArray.length-1]); 
console.log(noisesArray);

//Create a variable called noizes and assign it the string 'noises'.
var noizes = "noises"
console.log(noizes);
//Use the noizes variable with the animal object to access the value 'noll'
console.log(animal.noises);
//Now use the noizes variable with the noiseArray to replace the value noll with your noiseArray
animal.noises = noisesArray; 
console.log(animal);

//Create a variable called animals and set it equal to an empty array, Note that this variable is animals(plural) while the variable in step 1 is animal(singolar)
var animals = [];
//Using any method you prefer, add your animal from step 1 to the animals array.
animals.push(animal);
console.log(animals);
//Create a variable called quackers and assign to it the following object: { species: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'growl'] }
var quackers ={species: 'duck', tagline: 'Afflack', noises: ['quack', 'honk', 'sneeze', 'growl']};
//Add quackers to the animal array using a different method than before.
animals[0] = quackers;
console.log(animals);
//Create two more animal objects with these properties and values you create:
var slithers ={species: 'snake', tagline: 'I talk to Harry Potter', noises: ['hiss', 'slither', 'slide', 'zzz']};
var flyers ={species: 'bird', tagline: 'Big Bird', noises: ['cherp', 'tweet', 'cluck', 'peck']};
var growlers ={species: 'bear', tagline: 'I like honey', noises: ['grrrr', 'growl', 'zzz', 'hmmmm']};
animals.push(slithers, flyers, growlers);

console.log(animals);
console.log(animals.length);

// Section three
//Choose a data structure for the list of friends.

// Justify your decision.

//Create a variable called friends and assign it to the empty data structure
var friends = [];

//Using your animals array, add two species to the friends data structure.
//ensure that you are just putting the species name, not the entire object
//be carefol not to use a destructive method like pop() that will remove the whole value from the animals array.
//Inspect your friends data structure. What does it look like?
friends.push(animals[1].species);
friends.push(animals[2].species);
console.log(friends);

//relationships
//Create a variable called relationships assign it to an empty object.
var relationships = {};

//Add your friends data structure to the relationships object.
relationships.friends = friends;

//Inspect your object. What is it's length?
console.log(relationships);
console.log(relationships.friends.length);

//Create a variable called matches and assign it to an empty array.
var matches = [];

//Add the matches array to the relationships object. It shoold look like this: relationships = { friends: ['duck', 'camel'], matches: []}
relationships.matches = matches;
console.log(relationships);

//Using the relationships object, add some species to the matches array, hint: the mathes array is now nested inside the relationships object!
relationships.matches.push("quackers", "growlers");

//Inspect your object. Is the matches array now popolated with some lucky species?
console.log(relationships);

//Loop through your animals collection, adding the relationships object to each animal. Name the property relationships.
//Note: it is ok that these are all the same relationship object.

for(var i = 0; i < animals.length; i++) {
    animals[i].relationships = relationships;
}

console.log(animals);

