module.exports=function routes(app){

    app.get('/',(req,res)=>{
        res.render('index.ejs')
    });

    app.post('/result',(req,res)=>{
        if(req.body.name === ''){
            res.status(400);
            res.json(false);
        }
        console.log(req.body)
        res.json(req.body);
    });

};