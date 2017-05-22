/**
 * Created by Hew4803 on 5/22/17.
 */

'use strict';

function myFunc(){
    console.log(this);
}

var obj={
    someFunc: myfunc
}

var newFunc = myFunc.bind('Charlie');
newFunc();

var thing = new myFunc();


