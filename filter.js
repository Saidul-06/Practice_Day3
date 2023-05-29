const namess = ['saidul','robi' , 'shetu'];


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];

const prices  = products.filter( pri => pri.price>30000);

console.log(prices);

