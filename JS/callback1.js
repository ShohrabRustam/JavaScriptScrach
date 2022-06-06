let order = (call_production) => {
    console.log("Order Placed , Please Call Production ");
    setTimeout(() => {
        call_production();
    }, 3000);
}

let produnction = () => {
    console.log("Order Received , Start Production ");
};

order(produnction);