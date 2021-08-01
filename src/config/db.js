const mysql=require('mysql');
const conexion_bd = {
	host : "us-cdbr-east-04.cleardb.com",
	user : "b8ecdce97e031d",
	database : "heroku_061e30f49b88c2b",
	password : "a9e4bfcd",
}

function handleDisconnect(conexion_bd){
	connection = mysql.createPool(conexion_bd);


	connection.getConnection(function(error){
		if(error){
			console.log('error en la conexion de bases de datos:', error);
			setTimeout(handleDisconnect, 2000);
		}
	});

	connection.on('error', function(error){
		console.log('db error', error);
		if (error.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw error;
		}
	});
	}
handleDisconnect(conexion_bd);