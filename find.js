// const Array = [2,3,5,10,45,7567,67,45,7];
// const five = Array.find( x => x%5 === 0)
// console.log(five);



const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];

const prices = products.find( x => x.name ==='laptop')
console.log(prices);


