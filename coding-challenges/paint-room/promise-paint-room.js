/**
 * Created by Hew4803 on 5/23/17.
 */
'use strict';
const orderSupplies = (item) => {
    // The orderSupplies function first finds the item you requested
    const warehouse = [
        { item: 'paint', action(){ return 'start mixing!' } },
        { item: 'brush', action(){ return 'start painting!' } }
    ];

    const deliveryTime = Math.random()*3000 + 1000

    return new Promise((resolve,reject)=>{
        setTimeout( () => {
            const foundItem = warehouse.find((obj) => obj.item === item);
            if (foundItem) {
                resolve(foundItem);
            }
        }, deliveryTime );
    });
};

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);

let brushPromise = orderSupplies('brush');

orderSupplies('paint')
    .then(function(item) {
        printItem(item);
        return brushPromise;
    })
    .then(function(item){
        printItem(item)
    });



