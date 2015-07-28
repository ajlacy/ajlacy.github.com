//Use this file to implement Part One of your project



$.getJSON("data/animals.json", function(data) {
        

        var animal;

        //example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
        //example output: "species tagline noises"

        function objKeyPrinter(obj) {
            return Object.keys(obj).join(" ");
            
        }    
        console.log(objKeyPrinter(data[0]));
});
