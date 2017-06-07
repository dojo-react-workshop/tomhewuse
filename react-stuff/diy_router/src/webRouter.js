/**
 * Created by Hew4803 on 6/5/17.
 */
'use strict';
const { history, location, addEventListener } = window;
const callbackContainer=[];

const runCallbacks = () => {

    callbackContainer.forEach((cb)=>{cb()})
};

addEventListener('popstate', runCallbacks);

const webRouter = {
    navigateTo(path){
        history.pushState({},null,path)
        runCallbacks();
    },
    path: ()=>location.pathname,
    subscribe(callback){
        callbackContainer.push(callback);
    },
};
export default webRouter;