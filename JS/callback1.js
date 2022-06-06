let stocks={
    Fruits:['strawberry', 'grapes','banana','mango','apple'],
    Liquids:['water','ice'],
    holder:['cone','cup','stick'],
    toppings:['chocolate','peanuts']

}
// console.log("Print Banana from Stocks :  "+stocks.Fruits[2])
// console.log("Print all Key of Stocks : "+ Object.keys(stocks))
// let step1order = (Fruit_name,call_production) => {
//     console.log("Order Placed , Please Call Production ");
//     setTimeout(() => {
//         call_production();
//     }, 3000);
// }

// let step2produnction = () => {
//     console.log("Order Received , Start Production ");
// };

// step1order(step2produnction);

let order = (Fruit_name,call_production)=>{
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected from stocks`)
        call_production();
    },2000)
}
let production=()=>{
    setTimeout(()=>{
        console.log("Production has started ")
        setTimeout(()=>{
            console.log(`The fruits has been chopped`)
            setTimeout(()=>{
                console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was Added `)
                setTimeout(()=>{
                    console.log(`Start Machine `);
                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]} was selected `);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as toppings `)
                            setTimeout(()=>{
                                console.log("Ice Cream Serve !!")
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0000)
}

order(0,production)