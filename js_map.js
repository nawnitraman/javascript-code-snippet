var animals = [
    { name: 'Caro', species: 'dog'},
    { name: 'Hamilton', species: 'cat'},
    { name: 'Harold', species: 'rabbit'},
    { name: 'David', species: 'fish'},
    { name: 'Walter', species: 'dog'},
    { name: 'Jimmy', species: 'cat'},
];

//Using for loop
var names_oldway = [];
for(i = 0; i < animals.length; i++){
    names_oldway.push(animals[i].name + ' is a ' + animals[i].species)
}
console.log('Using for loop \n', names_oldway);

//Using map
var names = animals.map(animal=>animal.name + ' is a ' + animal.species);
console.log('Using map \n', names);