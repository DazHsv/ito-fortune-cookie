if(process.argv.length > 3) {
	console.log("Resultado: " + (parseInt(process.argv[2]) + parseInt(process.argv[3]) ) );
} else {
	console.log("Se necesitan 2 numeros como parametros.");
}