let sesion_cliente=[ ];

function agregarcliente(nombre, email){
    sesion_cliente.push({nombre, email});
}
function obtenercliente(){
    return sesion_cliente;
}

module.exports={
    agregarcliente,
    obtenercliente
};