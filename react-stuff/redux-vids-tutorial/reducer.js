/**
 * Created by Hew4803 on 6/8/17.
 */
'use strict';
const addCounter = (list)=>{
    return [...list,0];
};

const removeCounter = (list,index)=>{
    return [
        ...list.slice(0,index),
        ...list.slice(index+1)
    ];
};

const incrementCounter = (list,index) =>{
    return [
        ...list.slice(0,index),
        list[index]+1,
        ...list.slice(index + 1)
    ]
};

const testAddCounter = ()=>{
    const listBefore = [];
    const listAfter = [0];

}
