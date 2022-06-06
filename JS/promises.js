let stocks = {
    Fruits: ['strawberry', 'grapes', 'banana', 'mango', 'apple'],
    Liquids: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
}

let is_shop_open= true;

let order =(time,work)=>{
    return new Promise((resolve,reject)=>{
        if (is_shop_open){
            setTimeout(()=>{
                resolve(work());
            },time)
        }else{
            reject(console.log('Our Shop is closed'));
        }
    })
}
order(2000,() => console.log(`${stocks.Fruits[0]}`));