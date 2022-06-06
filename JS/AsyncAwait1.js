let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'mango', 'apple'],
    Liquids: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}

let is_shop_open = true;
let toppings_choices = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Which toppings would you love?"))
        }, 3000)
    })
}
async function kitchen() {
console.log(" A ")
console.log(" B ")
console.log(" C ")
await toppings_choices()
console.log(" D ")
console.log(" E ")

}

kitchen();
console.log("Cleaning plate...")
console.log("Cleaning table...")
console.log("Taking Order..")