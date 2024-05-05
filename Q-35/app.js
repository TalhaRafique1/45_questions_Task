var animalPet = ['Dog', 'Cat', 'Rabbit'];
console.log('Animals Names :\n');
for (var i = 0; i < animalPet.length; i++) {
    console.log("".concat(animalPet[i]));
}
console.log("\nStatments :\n");
for (var i = 0; i < animalPet.length; i++) {
    console.log("\nA ".concat(animalPet[i].toLowerCase(), " would make a great pet"));
}
console.log("\nAny of these animals would make a great Pet");
