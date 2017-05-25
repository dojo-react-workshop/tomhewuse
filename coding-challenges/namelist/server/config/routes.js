'use strict'

module.exports = function(app){

	let users = [
	 	{name: 'AJ'},
	 	{name: 'Tom'}
	];


	app.get('/', function(request, response){
		response.render('index');
	})
    app.get('/api/userList', function(request, response){
        response.json(users);
    })

	app.post('/postName', function(request, response){
		users.push(request.body);
		response.json(users);
	})

	app.post('/removeName', function(request, response){
		let indexToRemove = users.findIndex((value,index,array)=>{
			if(value.name==request.body.name){
        		return true;
			}
		});
		users.splice(indexToRemove,1);
		console.log(indexToRemove);
		response.json(users);

    })

}