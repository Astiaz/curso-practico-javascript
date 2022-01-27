// Helpers
function esPar(number){
    return (number % 2 === 0);
}

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

// Mediana General

const salariosVe = venezuela.map(
    function (persona) {
        return persona.salary;    
    }
);

const salariosVEOrdenados = salariosVe.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function medianaSalary(lista){
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad];
        const personaMitad2 = lista[mitad - 1];
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneral = medianaSalary(salariosVEOrdenados);

// Mediana del top 10%

const spliceStart = (salariosVEOrdenados.length * 90) / 100;
const spliceCount = salariosVEOrdenados.length - spliceStart; 

const salariosVETop10 = salariosVEOrdenados.splice(spliceStart, spliceCount);
const medianaTop10VE = medianaSalary(salariosVETop10);

console.log(medianaGeneral, medianaTop10VE);