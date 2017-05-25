module.exports=function routes(app){

    app.get('/',(req,res)=>{
        res.render('index.ejs')
    });

    app.post('/result',(req,res)=>{
        res.render('result.ejs',{name:req.body.name,location:req.body.location,language:req.body.language,comments:req.body.comments})
    });

};