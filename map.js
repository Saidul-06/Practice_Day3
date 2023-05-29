const Arrays = [2,3,4,5];



function sum(num){
    let a = [];
    for(const number of num){
         const ab =  doubleit(number);
         a.push(ab)
    }
    return a;
}


// function doubleit(number) { 
//     return number*2;
// }

const doubleit = numb => numb*2;

const result = sum(Arrays)
console.log(result);

const makeDouble = Arrays.map(numb => numb*2);
console.log(makeDouble); 


const fivetimes = [1,2,3,4,5,6].map(x=>x*5);
console.log(fivetimes);