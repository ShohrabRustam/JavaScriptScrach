let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'mango', 'apple'],
    Liquids: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time)
        } else {
            reject(console.log('Our Shop is closed'));
        }
    })
}
order(2000, () => console.log(`${stocks.Fruits[0]}` + ` was selected from stocks`))

    .then(() => {
        return order(0000, () => console.log('Production has started'))
    })

    .then(() => {
        return order(2000, () => console.log(`${stocks.Fruits[0]}` + ` Fruit was chopped`))
    })
    .then(() => {
        return order(1000, () => console.log(`Add ` + `${stocks.Liquids[0]}` + ' and ' + `${stocks.Liquids[1]}`))
    })

    .then(() => {
        return order(1000, () => console.log('Start the Machine'))
    })
    .then(() => {
        return order(2000, () => console.log(`Ice cream placed on ` + `${stocks.holder[0]} `))
    })
    .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[0]} was added as toppings `))
    })
    .then(() => {
        return order(2000, () => console.log(`Serve Ice Cream !!! `))
    })

    .catch(()=>{
        console.log("Customer Left !"); 
    })
.finally(()=>console.log("Day Ended !! ,Our shop is Closed!"))