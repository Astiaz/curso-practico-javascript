function calcularMediaAritmetica(lista){    
    // Reduce suma/mult/lo que sea todos los elementos dentro de la lista
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista/lista.length;
    
    return promedioLista
}

function esPar(number){
    if(number%2 === 0){
        return true
    } else {
        return false;
    }
}

function ordenarLista(lista){
    let listaOrdenada = lista.sort(function(a, b) {
        return a - b;
    })
    return listaOrdenada;
}

function calcularMediana(listaMediana){
    
    const mitadLista = parseInt(listaMediana.length/2);
    let listaOrdenada = ordenarLista(listaMediana);
    let mediana;
    
    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista];
        const elemento2 = listaOrdenada[mitadLista-1];
        const promedio = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedio;
        return mediana;
    } else {
        mediana = listaOrdenada[mitadLista];    
        return mediana;
    }
}

function mostrarMediana(){
    let listaValores = [];
    let array = document.getElementsByClassName('input-mediana');
    const medianaBox = document.getElementById('mediana');
    
    for(let i = 0; i < array.length; i++){
        if(array[i].value){
            listaValores[i] = parseInt(array[i].value);
        }
    }
    
    const mediana = calcularMediana(listaValores);
    medianaBox.innerHTML = 'La mediana es ' + mediana;

    return 
}