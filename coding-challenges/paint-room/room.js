/**
 * Created by Hew4803 on 5/23/17.
 */
'use strict';
const orderSupplies = (item, callback) => {
    // The orderSupplies function first finds the item you requested
    const warehouse = [
        { item: 'paint', action(){ return 'start mixing!' } },
        { item: 'brush', action(){ return 'start painting!' } }
    ];

    const deliveryTime = Math.random()*3000 + 1000
    setTimeout( () => {
        const foundItem = warehouse.find((obj) => obj.item === item);

        if (foundItem) {
            callback(foundItem);
        }

    }, deliveryTime )
};

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);

let needPaint = true;
let brush = null;

orderSupplies('paint', (item)=>{
    needPaint=false;
    printItem(item);
    if(brush){
        printItem(brush);
    }
});


orderSupplies('brush', (item)=>{
    if(needPaint){
        console.log('Brush going into garage')
        brush=item;
    }else{
        printItem(item);
    }
});























// let needPaint = true;
// let brush = null;
//
// orderSupplies('paint', (item) => {
//     printItem(item);
//     needPaint = false;
//
//     if(brush){
//         printItem(brush)
//     }
// });
//
// orderSupplies('brush', (item) => {
//     if(needPaint) {
//         brush = item;
//     }else{
//         printItem(item);
//     }
// });


// orderSupplies('paint', (item) => {
//     printItem(item);
//     needPaint=false;
// });
//
// orderSupplies('brush', (item) => {
//     printItem(item)
//     if(needPaint){
//         console.log('Put brush in the garage');
//         var myVar = setInterval(() => {
//             if (needPaint === false) {
//                 console.log('Get brush out to start painting.')
//                 clearInterval(myVar);
//             }
//         }, 1000);
//     }
// });

//this works but increase run time by creating sync calls
// orderSupplies('paint', (delivery) =>{
//     console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);
//     orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`))
//     });




