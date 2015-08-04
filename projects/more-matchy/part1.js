//Use this file to implement Part One of your project

$.getJSON("data/animals.json", function (data) {

        var animal = data[1];
        /*
         * example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
         * example output: "species tagline noises"
         */
        function objKeyPrinter(obj) {
            return Object.keys(obj).join(" ");
        }
        console.log(objKeyPrinter(data[0]));

        function strCapitalizer(str) {
            return str.split(" ")
                .map(firstToUpper)
                .join(" ");
        }
        console.log(strCapitalizer(animal.tagline));

        function extend(copyTo, copyFrom) {
            for (var key in copyFrom) {
                copyTo[key] = copyFrom[key];
            }
        }
        extend(animal, {
            life: 100,
            age: 10
        });
        console.log(animal);

        function relationshipLogger(animal) {
            return animal.relationships || 'You have no relationships :(';
        }
        console.log(relationshipLogger(animal));
        console.log(relationshipLogger({}));

        function correlation(species, animal) {
            var correlation = '';
            var relationships = animal.relationships;
            if (relationships.friends.indexOf(species) > -1) {
                correlation += species + ' is a friend of ' + animal.species;
            }
            if (relationships.matches.indexOf(species) > -1) {
                correlation += correlation === '' ? '' : ' and ';
                correlation += species + ' is a match of ' + animal.species;
            }
            if (correlation === '') {
                correlation += species + ' has no relationship with ' + animal.species;
            }
            return correlation;
        }
        animal.relationships.matches.push('dog');
        console.log(correlation('dog', animal));


        function addFriend(friend, animal) {
            animal.relationships.friends.push(friend);
        }
        addFriend('rabbit', animal);
        console.log(animal);

        var count = 0;
        function search(collection, query) {
            count++;
            var matches = [];
            _.each(collection, function (value) {
                if (isComplex(value)) {
                    if (search(value, query).length) {
                        // if (!_.contains(matches, value)) {
                        //     matches.push(value);
                        // }
                         matches.push(value);
                    }
                } else {
                    if (typeof value === 'string' && typeof query === 'string') {
                        if (value.toUpperCase().indexOf(query.toUpperCase()) > -1) {
                            // if (!_.contains(matches, value)) {
                            //     matches.push(value);
                            // }
                             matches.push(value);
                        }
                    } else {
                        if (value === query) {
                            // if (!_.contains(matches, value)) {
                            //     matches.push(value);
                            // }
                            matches.push(value);
                        }
                    }
                }
            });
            return matches;
        }
        console.log(search(data, 'snake'));
        console.log('search was called ', count, 'times');

        //console.log(isComplex(true));
    })
    .fail(function (e) {
        console.log("Yer JSON maybe malformed!");
    });


function firstToUpper(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function isComplex(value) {
    if (value !== null && typeof value === "object") return true;
    if (Array.isArray(value)) return true;
    return false;
}
