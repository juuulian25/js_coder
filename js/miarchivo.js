

function CrearZapatilla (marca, talle, precio) {
    this.marca = marca;
    this.talle = talle;
    this.precio = precio;
}


console.log("Bienvenidos a ZapasCenter")

const zapas = [];

zapas.push (new CrearZapatilla ("Adidas", 41 , 25));
zapas.push (new CrearZapatilla ("Nike", 40 , 30));
zapas.push (new CrearZapatilla ("Fila", 39 , 23));
zapas.push (new CrearZapatilla ("Puma", 38 , 38));
zapas.push (new CrearZapatilla ("Topper", 46 , 37));
zapas.push (new CrearZapatilla ("DC", 42 , 40));


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
