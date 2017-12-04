var orders = [
    {amount: 250},
    {amount: 350},
    {amount: 450},
    {amount: 550},
    {amount: 650}
];

//Using for loop
var totalAmount = orders.reduce((sum, order)=>{
    return sum + order.amount
}, 0);

console.log('totalAmount: ', totalAmount);