let cesion_cliente=[ ];

function agregarcliente(nombre, email){
    sesion_cliente.push({nombre, email});
}
function obtenercliente(){
    return cesion_cliente;
}

module.exports={
    agregarcliente,
    obtenercliente
};