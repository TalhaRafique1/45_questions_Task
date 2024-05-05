let animalPet: string[] = ['Dog', 'Cat', 'Rabbit']

console.log('Animals Names :\n');

for(let i=0; i<animalPet.length; i++){
    console.log(`${animalPet[i]}`);
    
}

console.log("\nStatments :\n");

for(let i=0; i<animalPet.length; i++){
    console.log(`\nA ${animalPet[i].toLowerCase()} would make a great pet`);
    
}

console.log("\nAny of these animals would make a great Pet");
