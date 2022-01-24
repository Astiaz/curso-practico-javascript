// Calcular Promedio

function calcularMediaAritmetica(lista){    
    // let sumaLista = 0;
    
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    // Reduce suma/mult/lo que sea todos los elementos dentro de la lista
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista/lista.length;
    
    return promedioLista
}