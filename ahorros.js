// Helpers
function calculoPorcentaje(valorInicial, porcentaje){
    const valorDelPorcentaje = (valorInicial * porcentaje) / 100;
    return valorDelPorcentaje
}

// Método 50/30/20

function calcularAhorro(ingresos){
    let porcentajes = [];
    const valorPorcentaje50 = calculoPorcentaje(ingresos, 50);
    const valorPorcentaje30 = calculoPorcentaje(ingresos, 30);
    const valorPorcentaje20 = calculoPorcentaje(ingresos, 20);

    porcentajes.push(valorPorcentaje50, valorPorcentaje30, valorPorcentaje20);

    return porcentajes;
}

// Implementación con HTML

function calculoValores(){
    const {value} = document.getElementById('ingresosInput');

    const resultados = calcularAhorro(value);
    const resultado1 = document.getElementById('result1').innerHTML = '<p class="porcentaje"> El 50% es: '+ resultados[0] +'</p>';
    const resultado2 = document.getElementById('result2').innerHTML = '<p class="porcentaje"> El 30% es: '+ resultados[1] +'</p>';
    const resultado3 = document.getElementById('result3').innerHTML = '<p class="porcentaje"> El 20% es: '+ resultados[2] +'</p>';
    return;
}


// Cumpliendo gastos

function calcularAhorroConGastos(ingresos, porcentaje){
    let porcentajes = [];
    const valorAhorrado = calculoPorcentaje(ingresos, porcentaje);
    const valorRestante = ingresos-valorAhorrado;

    porcentajes.push(valorAhorrado, valorRestante);

    return porcentajes;
}

// Implementación con HTML

function calculoAhorroConGastos(){
    const {value: ingresos} = document.getElementById('ingresosInput2');
    const {value: gastos} = document.getElementById('gastosInput');
    const {value: porcentaje} = document.getElementById('porcentajeInput');

    const cantidadNeta = ingresos - gastos;
    
    if(porcentaje>100){
        const porcentajeInvalido = document.getElementById('resultAhorrado').innerHTML = '<p class="porcentaje"> El '+ porcentaje + '% no es válido </p>';
        return porcentajeInvalido;
    } else {
        const resultado = calcularAhorroConGastos(cantidadNeta, porcentaje);

        const resultado1 = document.getElementById('resultAhorrado').innerHTML = '<p class="porcentaje"> El '+ porcentaje + '% ahorrado es: ' + resultado[0] +'</p>';
        const resultado2 = document.getElementById('resultRestante').innerHTML = '<p class="porcentaje"> El dinero restante es: '+ resultado[1] +'</p>';
        return;
    }
}

