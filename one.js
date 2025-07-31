// const nums=[1,2,3,4,5,6,7,8,9,10];

// const getNum= nums.filter((nums)=> nums>4);
// console.log(getNum);


// const getNum = nums.filter((nums)=>{
//     return nums>4  //beacuse we have started a scope therefor we have to write return here
// })
// console.log(getNum);

// const getNum= nums.map((num)=>num+10);
// console.log(getNum);


// chaining 

const nums=[1,2,3,4,5,6,7,8,9,10];

const newNum = nums.map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=>num>40);
console.log(newNum);
