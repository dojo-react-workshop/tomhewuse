'use strict'



module.exports = function(app){

	let users = [
	 	{name: 'AJ', key: 1},
	 	{name: 'Tom', key: 2}
	];


	app.get('/', function(request, response){
		response.render('index');
	});
    app.get('/api/userList', function(request, response){
        response.json(users);
    });

    app.put('/updateName', function(request, response){
        let indexToUpdate = users.findIndex((value)=>{
            if(value.key==request.body.key){
                return true;
            }
        });
        users[indexToUpdate].name=request.body.name;
    	response.json(users);
    });

	app.post('/postName', function(request, response){
		let user=request.body;
		user.key = Math.floor(Math.random()*1000000);
		users.push(user);
		response.json(users);
	});

	app.delete('/removeName', function(request, response){
		let indexToRemove = users.findIndex((value)=>{
			if(value.key==request.body.key){
				return true;
			}
		});
		users.splice(indexToRemove,1);
		response.json(users);

    })

};