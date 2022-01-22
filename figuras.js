

// Código del cuadrado
function areaCuadrado(ladoCuadrado){
    return ladoCuadrado*ladoCuadrado;
} 

function perimetroCuadrado(ladosCuadrado){
    return ladosCuadrado*4;
}

// Código del triángulo

function perimetroTriangulo(lado1, lado2, ladobase){

    return parseInt(lado1)+parseInt(lado2)+parseInt(ladobase);
}
function areaTriangulo(ladobase, AlturaTriangulo){
    return (ladobase * AlturaTriangulo)/2;
}

// Código del círculo
const pi = Math.PI;

function calcularDiametro(radio){
    return radio*2;
}

function calcularCircunferencia(radio){
    const diametro = calcularDiametro(radio);
    return diametro*pi;
}

function areaCircunferencia(radio){
    return (radio*radio)*pi;
}

// *** Mostrar resultados en HTML ***

// funciones de Cuadrado

function calcularPerimetroCuadrado(){
    const {value} = document.getElementById("InputCuadrado");

    const perimetro = perimetroCuadrado(value);
    return document.getElementById("resultadoCuadrado").innerHTML = perimetro;
}

function calcularAreaCuadrado(){
    const {value} = document.getElementById("InputCuadrado");

    const area = areaCuadrado(value);
    return document.getElementById("resultadoCuadrado").innerHTML = area;
}

// funciones de triangulo

function calcularPerimetroTriangulo(){
    const {value:LadoA} = document.getElementById("InputTrianguloLadoA");
    const {value:LadoB} = document.getElementById("InputTrianguloLadoB");
    const {value:LadoBase} = document.getElementById("InputTrianguloBase");
    
    const perimetro = perimetroTriangulo(LadoA, LadoB, LadoBase);
    return document.getElementById("resultadoTriangulo").innerHTML = perimetro;
}

function calcularAreaTriangulo(){
    const {value:LadoBase} = document.getElementById("InputTrianguloBase");
    const {value:Altura} = document.getElementById("InputTrianguloAltura");
    
    const area = areaTriangulo(LadoBase, Altura);
    return document.getElementById("resultadoTriangulo").innerHTML = area;
}

// funciones del circulo

function calculardiametro(){
    const {value} = document.getElementById("radioCirculo");

    const diametro = calcularDiametro(value);
    return document.getElementById("resultadoCirculo").innerHTML = diametro;
}

function calcularPerimetroCircunferencia(){
    const {value} = document.getElementById("radioCirculo");

    const perimetro = calcularCircunferencia(value);
    return document.getElementById("resultadoCirculo").innerHTML = perimetro;
}

function calcularAreaCircunferencia(){
    const {value} = document.getElementById("radioCirculo");

    const area = areaCircunferencia(value);
    return document.getElementById("resultadoCirculo").innerHTML = area;
}