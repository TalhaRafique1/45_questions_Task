"use strict";
// EX 11
// let friends: string[] = ["Hamza", "Zaid", "Fahad", "Maaz"];
// for(let i=0; i<friends.length; i++){
//     console.log(friends[i]);
// }
// EX 12
let friends = [`Hamza`, `Zaid`, `Fahad`, `Maaz`];
let messsage = `You are invited for a dinner tomorrow `;
for (let i = 0; i < friends.length; i++) {
    console.log(messsage + friends[i]);
}
