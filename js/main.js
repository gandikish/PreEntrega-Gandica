let btn = document.querySelector('#btn').addEventListener('click',btnClick);
let btn2 =document.querySelector('#btn2').addEventListener('click',btnClick2);

let precioFinal = document.querySelector('#precioFinal');

let inputPrecio = document.querySelector('#ingresarPrecio');

let inputDescuento= document.querySelector('#ingresarDescuento');

inputPrecio.addEventListener('click', function(){
    inputPrecio.value=""
})
inputDescuento.addEventListener('click', function(){
    inputDescuento.value=""
})




function btnClick(){
    dato1 = document.querySelector('#ingresarPrecio').value;

    dato2 = document.querySelector('#ingresarDescuento').value;

    descuento= dato1/100 * dato2;

    resultado= dato1-descuento;

    precioFinal.value=resultado;
}

function btnClick2(){

    inputPrecio.value=0;
    inputDescuento.value=0;
    precioFinal.value=0;

}

