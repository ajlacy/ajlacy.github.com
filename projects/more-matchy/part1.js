//Use this file to implement Part One of your project



$.getJSON("data/animals.json", function(data) {


    var animal;

    //example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
    //example output: "species tagline noises"

    function objKeyPrinter(obj) {
        return Object.keys(obj).join(" "); //.keys returns an array

    }
    console.log(objKeyPrinter(data[0]));
    //objValuePrinter loops through all the properties in a given object and returns a string of all the values that are strings.
    //example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
    //example output: "duck Afflac"

    function objValuePrinter(obj) {
        var strings = [];
        for (var key in obj) {
            if (typeof(obj[key]) === "string") {
                strings.push(obj[key]);
            }
        }
        return strings.join(" "); //.join joins all element of an array into a string
    }
console.log(objValuePrinter(data[2]));    

//arrValuePrinter takes a given array and returns the values as a string
//example input: ['quack', 'honk', 'sneeze', 'growl']
//example output: "quack honk sneeze growl"

var joined = [];

function arrValuePrinter(collection) {
   if (Array.isArray(collection)) {
       return collection.join(" ");
   } else {
       for (var key in collection) {
           if (Array.isArray(collection[key])) {
            return collection[key].join(" ");
       }
   }
} 
    return joined.join(" ");
}
console.log(arrValuePrinter(data[0]));  
  
});



