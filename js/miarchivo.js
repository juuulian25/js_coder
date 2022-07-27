console.log("Bienvenidos a ZapasCenter")

console.log( new Date ())




//retornar funciones

function asignarOperacion(op){
    if (op=="sumar"){
        return (a,b) => a+b
    } else if (op=="restar") {
        return(a,b) => a-b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar") 

console.log (suma(4,6))
console.log (resta(8,4))


//funcion por parametro

function porCadaUno(arr,fn){
    for (const el of arr){
        fn(el)
    }
}


const numerosDelArray= [1,2,3,4,12]

porCadaUno(numerosDelArray,console.log)

//funcion acumuladora por parametro

let total = 0
function acumular(num){
    total+= num
}

porCadaUno(numerosDelArray,acumular)
console.log(total)



//

const duplicado = []
porCadaUno(numerosDelArray,(el)=> {
    duplicado.push(el*2)
})
 
console.log(duplicado)


// aplicando forEach

const probando = [1,2,3,4,5,6]

probando.forEach((prob)=> {
    console.log(prob*2-5)
})


// metodo MAP

function CrearZapatilla (marca, talle, precio) {
    this.marca = marca;
    this.talle = talle;
    this.precio = precio;
}




const zapas = [];

zapas.push (new CrearZapatilla ("Adidas", 41 , 25));
zapas.push (new CrearZapatilla ("Nike", 40 , 30));
zapas.push (new CrearZapatilla ("Fila", 39 , 23));
zapas.push (new CrearZapatilla ("Puma", 38 , 38));
zapas.push (new CrearZapatilla ("Topper", 46 , 37));
zapas.push (new CrearZapatilla ("DC", 42 , 40));


const marca = zapas.map((el) => el.marca)
console.log(marca)

const talle = zapas.map((el)=> el.talle)
console.log(talle)


const precio = zapas.map((el)=> el.precio)
console.log(precio)

// aplicando iva a precios

const actualizandoPrecios = zapas.map ((el)=>{
    return {
        precio: el.precio * 1.21
    }
})

console.log(actualizandoPrecios)

// aplicando REDUCE al array precio

const sumandoArrayPrecio = precio

const totalPrecio = sumandoArrayPrecio.reduce ((acumular, elemento)=> acumular+elemento,0)
console.log(totalPrecio)


// SORT ordenando precios de menor a mayor

const precioOrdenado = precio
precioOrdenado.sort((a,b) => a-b);
console.log(precioOrdenado)

//SORT ordenando precios de mayor a menor
precioOrdenado.sort ((a,b) => b-a);
console.log(precioOrdenado)


console.log(Math.random() *10)





function CrearZapatilla (marca, talle, precio) {
    this.marca = marca;
    this.talle = talle;
    this.precio = precio;
}

//zapatillas que contengan letra A
/*
for (const productos of zapas){
    console.log(productos.marca, productos.talle, productos.precio);
}
*/
const resultadoA = zapas.filter((el) => el.marca.includes("a"))

console.log(resultadoA)


//zapatillas que contengan letra E
/*
for (const productos of zapas){
    console.log(productos.marca, productos.talle, productos.precio);
}
*/
const resultadoE = zapas.filter((el) => el.marca.includes("e"))

console.log(resultadoE)



//precio mayor a 25

console.log("Todos estos productos cuestan mas de $25")
/*
for (const productos of zapas){
    console.log(productos.marca, productos.talle, productos.precio);
}
*/
const resultadoPrecio = zapas.filter((el) => el.precio>25)

console.log(resultadoPrecio)




//funciones de orden superior

function mayorQue(n){
    return (m) => m > n
}

let mayorQueDiez = mayorQue(10)
console.log(mayorQueDiez(12))
console.log(mayorQueDiez(8))


function numero_x (j){
    return (k) => k == j
}

let esIgual = numero_x(8)
console.log(esIgual(8))
console.log(esIgual(9))


/////////////////////////////////

//arrancamos con dom
/*
let domElemento
domElemento=document.all
domElemento=document.head
domElemento=document.body
domElemento=document.scripts
domElemento=document.images


console.log(domElemento)
*/
document.addEventListener("DOMContentLoaded", function(){
    //Tus funciones



let cardtitle = document.querySelector(".card-title");
console.log(cardtitle)

let cardbody=document.querySelector(".card-body")
console.log(cardbody)

let h5 = document.querySelector("h5")
console.log(h5)

let allcardtitle = document.querySelectorAll(".card-title")
console.log(allcardtitle)

let probandollamardom = document.querySelector("#probando-llamar-dom")
console.log(probandollamardom)

// reemplazando titulo a la pagina

const encabezado = document.querySelector("h1").textContent="Nuevo heading"
console.log(encabezado)


//cambiando nombre a zapatillas puma
const etiquetaPuma = document.querySelector("#probando-llamar-dom").textContent="cambiando nombre a Puma desde JS"
console.log(etiquetaPuma)

//cambiando text a consultar stock zapa adidas

const probandoSiHayStock = document.querySelector("#tieneStock").textContent="Hay Stock. No hace falta consultar."
console.log(probandoSiHayStock)




const subtituloOff = document.querySelector("h2")
subtituloOff.remove()

let agregandoSubtitulo = document.createElement("h2")
agregandoSubtitulo.innerHTML="<p>Agregando Subtitulo via JS</p>"

const encabeZado = document.querySelector(".encabeZado")
console.log(encabeZado.children)
encabeZado.insertBefore(agregandoSubtitulo, encabeZado.children[0])


//agregando array en pantalla

let listaVacia = document.querySelector("#listaVacia")

let otrosCursos = [
    "Nike",
    "Adidas",
    "Fila",
    "Puma"
]

for (let curso of otrosCursos){
    let listado=document.createElement("div")
    listado.innerHTML=curso
    listaVacia.appendChild(listado)
}


//agregando array


const zapaTillas = [
    {id: 1, titulo:"Nike", precio: 43},
    {id: 2, titulo:"Adidas", precio: 55},
    {id: 3, titulo:"Puma", precio: 44},
    {id: 4, titulo:"Fila", precio: 23},
];




for ( const probandoArray of zapaTillas){
    let li = document.createElement("div");
    
    li.innerHTML = `<h3>ID: ${probandoArray.id}</h3>
                    <p>Producto: ${probandoArray.titulo}</p>
                    <b>$ ${probandoArray.precio}</b>`;
    
    document.body.appendChild(li);
    
    }
    

    //interactuando con html



    console.log("Que zapatilla quiere comprar? Nike, Adidas, Puma o Fila?")

   let mensajePantalla = parseInt(prompt("Ingrese 1 = Nike, 2 = Adidas, 3 = Puma, 4 = Fila"))

    if (mensajePantalla==1){
        
        let li = document.createElement("div");
    
        li.innerHTML = `<h3>ID: ${zapaTillas[0].id}</h3>
                        <p>Producto: ${zapaTillas[0].titulo}</p>
                        <b>$ ${zapaTillas[0].precio}</b>`;
                        document.body.appendChild(li);

    } else if (mensajePantalla==2){
        let li = document.createElement("div");
    
        li.innerHTML = `<h3>ID: ${zapaTillas[1].id}</h3>
                        <p>Producto: ${zapaTillas[1].titulo}</p>
                        <b>$ ${zapaTillas[1].precio}</b>`;
                        document.body.appendChild(li);
    }
    else if (mensajePantalla==3){
        let li = document.createElement("div");
    
        li.innerHTML = `<h3>ID: ${zapaTillas[2].id}</h3>
                        <p>Producto: ${zapaTillas[2].titulo}</p>
                        <b>$ ${zapaTillas[2].precio}</b>`;
                        document.body.appendChild(li);
    }
  else if (mensajePantalla==4){
        let li = document.createElement("div");
    
        li.innerHTML = `<h3>ID: ${zapaTillas[3].id}</h3>
                        <p>Producto: ${zapaTillas[3].titulo}</p>
                        <b>$ ${zapaTillas[3].precio}</b>`;
                        document.body.appendChild(li);
    }

    else {
        alert("El numero ingresado no es valido.")
    }








/*
function cargarHTML(){

    zapaTillas.forEach( id => { 
        let lista = document.getElementById("s1")
        lista.insertAdjacentHTML
    })
}
*/




//plantillas literales
/*
let zapaTillas = 
    {id: 1, titulo:"Nike", precio: 55};
  /*  {id: 2, titulo:"Adidas", precio: 55}, /funciona solo con un array
    {id: 3, titulo:"Puma", precio: 55},


let concatenado = "id:" + zapaTillas.id + "- producto:" + zapaTillas.titulo + "$"+zapaTillas.precio;

let plantilla =`id: ${zapaTillas.id} - Nombre ${zapaTillas.titulo} $${zapaTillas.precio}`;

console.log(concatenado)
console.log(plantilla)
*/


}

)

;


