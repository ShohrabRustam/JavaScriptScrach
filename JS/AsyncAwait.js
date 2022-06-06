let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'mango', 'apple'],
    Liquids: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}

let is_shop_open = true;

// let order = () => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             resolve()
//         } else {
//             reject()
//         }
//     })
// }

async function order(){
try{
await abc;
}
catch(error){
console.log("Abc doesn't exist ",error);
}
finally{
    console.log("Run code Any way!");
}
}
order()
.then(() => {
    console.log("Then condition working successfully");
})