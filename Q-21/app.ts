interface item {
    name: string
    price: number
}

// two objects

const vegetable: item = {
    name: 'Tomato',
    price: 100
}
const fruit: item = {
    name: 'Orange',
    price: 200
}

console.log(`vegetable name: ${vegetable.name}, vegetable price: ${vegetable.price}`);
console.log(`fruit name: ${fruit.name}, fruit price: ${fruit.price}`);