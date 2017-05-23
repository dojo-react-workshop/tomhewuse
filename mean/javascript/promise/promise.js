/**
 * Created by Hew4803 on 5/23/17.
 */

//declare new promise
const receiptA = new Promise( (resolve,reject) => {
    const rand = Math.random()*1000;
    setTimeout(function(){
        resolve();
    });
});

const receiptB = new Promise( (resolve,reject) => {
    const rand = Math.random()*1000;
    setTimeout(function(){
        resolve();
    });
});

console.log(receiptA.status);
receiptA
    .then(() => {
        console.log('A has resolved');
        return receiptB;
    })

//receipt // Promise