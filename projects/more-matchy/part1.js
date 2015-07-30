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
        }
        else {
            for (var key in collection) {
                if (Array.isArray(collection[key])) {
                    return collection[key].join(" ");
                }
            }
        }
        return joined.join(" ");
    }
    console.log(arrValuePrinter(data[0]));


    //dataTypeChecker takes either an array or an object and returns either 'array' or 'object' as appropriate.
    //example input: ['quack', 'honk', 'sneeze', 'growl']
    //example output: "array"
    //example input: {}
    //example output: "object"

    function dataTypeChecker(collection) {
        if (Array.isArray(collection)) {
            return "array";
        }
        else {
            return 'object';
        }

        console.log(dataTypeChecker(data[2]));
    }

    // capitalizeVals takes an object, capitalizes the first letter of each string value in the object, and returns the object. Ignore any non-string values like arrays, numbers or objects.
    // example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
    // example output: { species: 'Duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }

    function capitalizeVals(obj) {
        for (var key in obj) {
            if (typeof(obj[key]) === 'string') {
                obj[key] = (obj[key].substring(0, 1).toUpperCase() + obj[key].substring(1));
            }
        }
        return obj;
    }
    console.log(capitalizeVals(data[0]));

    // strCapitalizer takes a string, capitalizes the first letter of each word, and returns the string.
    // example input: "my name is bristol"
    // example output: "My Name Is Bristol"

    function strCapitalizer(str) {
        var strCap = str.split(" ");
        for (var i = 0; i < strCap.length; i++) {
            strCap[i] = strCap[i].substring(0,1).toUpperCase() + strCap[i].substring(1);
        }
        return strCap.join(" ");
    }
    console.log(strCapitalizer("i have a big dog!"));

//unique takes an array, removes any duplicate values and returns the array.
// input: [1,2,3,3,4]
// output: [1,2,3,4]



function unique(collection) { 
    var parsed = [];
    if(Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (parsed.indexOf(collection[i]) === -1)  {
                parsed.push(collection[i]);
            }
        }
    }
    return parsed;
}

console.log(unique([1, 2, 2, 3, 4, 5, 5]));

//extend takes two objects and copies the properties of the first object on to the second. It does not return anything.

function extend (obj, obj2) {
    return Object.key(obj)
}

console.log(data[0]);
});
