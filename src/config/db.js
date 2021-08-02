const mysql=require('mysql');
const conexion_bd = {
	host : process.env.DB_HOST,
	user : process.env.DB_USER,
	database : process.env.DB_DATABASE,
	password : process.env.DB_PASSWORD,
};

function handleDisconnect(conexion_bd){
	connection = mysql.createPool(conexion_bd);


	connection.getConnection(function(error){
		if(error){
			console.log('error en la conexion de bases de datos:', error);
			setTimeout(handleDisconnect, 3000);
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