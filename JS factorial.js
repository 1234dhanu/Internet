//  for(let 1=0; 1<10; 1++)

for(let i=1; i<=-1; i++) {
    console.log(i);

}

// factorial n!=1*2*3*...*n

let n=5;
let factorial=1;
for(let i=1; i<=n; i++){
    factorial=factorial*i;
}
//factorial=1
//factorial=1*1;
//factorial=1*1*2;
//factorial=1*1*2*3;
//factorial=1*1*2*3*4;
//factorial=1*1*2*3*4*5;
console.log("factorial of", n, "is", factorial)

// ---------while loop--------
//while(condition)
let count=0;
let sum=0;
let last=100;

while(count <=last) {
    sum=sum+count;
     count++;
}
console.log('sum is', sum);

//multiplication table
let num=3;
let table=[];

for(let i=1; i<=10; i++){
    table.push(num*i);
}
console.log('table of', num, 'is', table)