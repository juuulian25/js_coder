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

for (const productos of zapas){
    console.log(productos.marca, productos.talle, productos.precio);
}

const resultadoA = zapas.filter((el) => el.marca.includes("a"))

console.log(resultadoA)


//zapatillas que contengan letra E

for (const productos of zapas){
    console.log(productos.marca, productos.talle, productos.precio);
}

const resultadoE = zapas.filter((el) => el.marca.includes("e"))

console.log(resultadoE)



//precio mayor a 25

console.log("Todos estos productos cuestan mas de $26")

for (const productos of zapas){
    console.log(productos.marca, productos.talle, productos.precio);
}

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