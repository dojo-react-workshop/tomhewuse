/**
 * Created by Hew4803 on 6/2/17.
 */
'use strict';
/*
"ab"
Call #1, str='ab'
    Call #2, str='b'
        Call #3, str = '' =>['']
    ['','b']
    ['','b','a','ab']

 */


function subsets(str=''){
    if(str.length===0){
        return [''];
    }
    let subs = subsets(str.slice(1));
    let count = subs.length;
    for(let i=0; i<count; i++){
        //
        subs.push(str.slice(0,1) + subs[i]);
    }
    return subs;
}