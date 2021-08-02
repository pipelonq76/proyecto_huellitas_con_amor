const mysql=require('mysql');
const conexion_bd = {
	host : "us-cdbr-east-04.cleardb.com",
	user : "b8ecdce97e031d",
	database : "a9e4bfcd",
	password : "heroku_061e30f49b88c2b",
};

function handleDisconnect(conexion_bd){
	connection = mysql.createPool(conexion_bd);


	connection.getConnection(function(err){
		if(err){
			console.log('error en la conexion de bases de datos:', err);
			setTimeout(handleDisconnect, 2000);
		}
	});

	connection.on('err', function(err){
		console.log('db err', err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
	}
handleDisconnect(conexion_bd);