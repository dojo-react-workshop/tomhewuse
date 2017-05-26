module.exports=function routes(app){

    app.get('/',(req,res)=>{
        res.render('index.ejs')
    });

    app.post('/result',(req,res)=>{
        console.log(req);
        if(req.body.name === ''){
            res.status(400);
            res.json(false);

        }else {
            res.json(req.body);
        }
    });

};