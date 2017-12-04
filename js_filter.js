var _ = require('underscore');

var animals = [
    { name: 'Caro', species: 'dog'},
    { name: 'Hamilton', species: 'cat'},
    { name: 'Harold', species: 'rabbit'},
    { name: 'David', species: 'fish'},
    { name: 'Walter', species: 'dog'},
    { name: 'Jimmy', species: 'cat'},
];
console.log('Original Array: \n',animals);

// Using traditional way (for loop)
var dogs_oldway = [];
for (var i = 0; i < animals.length; i++){
    if(animals[i].species ==='dog'){
        dogs_oldway.push(animals[i]);
    }
}
console.log('Using for loop filter: \n',dogs_oldway);

//using filter with arrow function
var dogs = animals.filter((animal)=> {
    return animal.species === 'dog'
});

console.log('Using Native filter: \n',dogs);

//using find with arrow (shorten) function
console.log('Using Native find: \n',animals.find(x=>x.species ==='dog'));

//using reject from underscore
var no_dogs = _.reject(animals,(animal) => animal.species =='dog')
console.log('Using reject from underscore : \n', no_dogs);