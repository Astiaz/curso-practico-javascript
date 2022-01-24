// Cálculo de precio con descuento

function calcularPrecio(precioOriginal, descuento){

    const porcentajeDelDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajeDelDescuento)/100;

    return precioConDescuento;   
}

function calculoPrecioFinal(){
    const {value: precio} = document.getElementById('input-price');
    const {value: discount} = document.getElementById('input-discount');

    const finalPrice = calcularPrecio(precio, discount);
    return document.getElementById('finalPrice').innerHTML = '<p>El precio final es: </p>' + finalPrice + '$';
}

// Cupones activos

let cupones = ['SAFE15', 'SUMMER20', 'BLACKFRIDAY'];

// Validar Cupón

function coupon(coupon){

    const price = document.getElementById('price');
    const priceNumber = parseInt(price.innerHTML);
    const couponBox = document.getElementById('coupon');

    for(let i = 0; i <= cupones.length; i++){
        if(coupon == cupones[i]){
            let finalPrice;
            if(coupon === 'SAFE15'){

                finalPrice = calcularPrecio(priceNumber, 15);

            } else if(coupon === 'SUMMER20'){

                finalPrice = calcularPrecio(priceNumber, 20);

            } else if(coupon === 'BLACKFRIDAY'){

                finalPrice = calcularPrecio(priceNumber, 50);

            } else {
                return 'No sé qué ha pasado';
            }
                
            const newPrice = document.getElementById('new-price').innerHTML = finalPrice + '$';
            couponBox.innerHTML = 'Cupón aplicado';
            price.className = 'discount-applied';
            
            return newPrice;
        } else if (i >= cupones.length){
            return couponBox.innerHTML = 'El cupón no existe';
        }
    }
}

// Versión simplificadad


/* function coupon(coupon){

    const price = document.getElementById('price');
    const priceNumber = parseInt(price.innerHTML);
    const couponBox = document.getElementById('coupon');

    if(!cupones.includes(coupon)){
        couponBox.innerHTML = 'El cupón no existe'
    } else {
        let finalPrice;
        if(coupon === 'SAFE15'){

            finalPrice = calcularPrecio(priceNumber, 15);

        } else if(coupon === 'SUMMER20'){

            finalPrice = calcularPrecio(priceNumber, 20);

        } else if(coupon === 'BLACKFRIDAY'){

            finalPrice = calcularPrecio(priceNumber, 50);

        } else {
            return 'No sé qué ha pasado';
        }
            
        const newPrice = document.getElementById('new-price').innerHTML = finalPrice + '$';
        couponBox.innerHTML = 'Cupón aplicado';
        price.className = 'discount-applied';
        
        return newPrice;
    }
}
*/


function validateCoupon(){
    const {value} = document.getElementById('input-coupon');

    const couponApplied = coupon(value);
    return couponApplied;
}