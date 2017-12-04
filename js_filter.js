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
// var dogs = [];
// for (var i = 0; i < animals.length; i++){
//     if(animals[i].species ==='dog'){
//         dogs.push(animals[i]);
//     }
// }

var dogs = animals.filter(animal=> animal.species === 'dog');
console.log('Using Native Filter: \n',dogs);

var no_dogs = _.reject(animals,(animal) => animal.species =='dog')
console.log('Using reject from underscore : \n', no_dogs);