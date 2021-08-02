const mysql=require('mysql');
const connection = mysql.createConnection({
	host : "us-cdbr-east-04.cleardb.com",
	user : "b8ecdce97e031d",
	database : "heroku_061e30f49b88c2b",
	password : "a9e4bfcd",
});


connection.connect((error)=>{
	if(error){
		console.log("este error se presenta " + error)
		return;
	}
	console.log("conectados exitosamente a la base de datos")
})

module.exports=connection;