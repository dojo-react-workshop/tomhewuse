module.exports=function routes(app){

    app.get('/',(req,res)=>{

        res.render('index.ejs')
    });


    app.post('/result',(req,res)=>{
        res.json(req.body);
    });

};