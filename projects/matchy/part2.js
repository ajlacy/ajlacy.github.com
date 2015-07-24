//Any code in part1.js is still accessible in this file! 
//Try it out. See if you can console.log a variable from part1 (like animals) from this page.

//1a: Log the Animal Personal Data
//Choose which animal you want for your profile page, select it from your animals collection and save it in a variable called profileAnimal.
var profileAnimal = animals[0];
console.log(profileAnimal);

//Loop through the properties of the animal, console.log the property name and if the property value is a string, also print that out. If the value is not a string, then just put a placeholder value of 'click here for data' (not actually a link)
//'species: dog, tagline: who let the dogs out?, noises: click here for more data, relationships: click here for more data' etc
for(var key in profileAnimal) {
  console.log('key: ' + key);
  if (typeof profileAnimal[key] === 'string') {
   console.log(profileAnimal[key]);
     } else if (Array.isArray(profileAnimal[key])) {
         console.log(profileAnimal[key].join('.'));
     }else {
         console.log(key +  ": " + "Click here for data");
     }
}


//Adjust the previous loop so that it will loop through the noises array and print it out like this:
//'species: dog, tagline: who let the dogs out?, noises: woof bark slurp , relationships: click here for more data'

//Access the relationships object

//Log all the friends of the animal

//Now, log all the matches

//How woold you delete a friend from your friendslist? Implement it!

var relationships = {animals: matches
}


function each(collection, action) {
 if (Array.isArray(collection)) {
  for (var i = 0; i < collection.length; i++){
   action(collection[i]);
  }
 } else {
   for (var key in collection) {
     action(collection[key]);
   }
 }
}
console.log(profileAnimal.relationships.friends);
console.log(profileAnimal.relatioships.matches);

profileAnimal.relationships.friends.splice(0, 1);
console.log(profileAnimal.relationships.friends);