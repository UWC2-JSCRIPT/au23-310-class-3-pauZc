// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
const logReceipt = (... items) =>{
  let total = 0;
  items.forEach((item)=>{
    total += item.price;
    console.log(`${item.descr} - $${item.price.toFixed(2)}`)
  })
  console.log(`Total - ${total.toFixed(2)}`)
}
const obj1 = { descr: 'Burguer', price: 11.50 }
const obj2 = { descr: 'Fish', price: 5.00 }
const obj3 = { descr: 'French Fries', price: 9.70 }
const obj4 = { descr: 'Coffe', price: 7.00 }

//logReceipt(obj1, obj2, obj3, obj4)

// Check
logReceipt( { descr: 'Burrito', price: 5.99 },
{ descr: 'Chips & Salsa', price: 2.99 },
{ descr: 'Sprite', price: 1.99 });


// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
