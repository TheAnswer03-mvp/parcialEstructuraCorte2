let colas = [];

colas.push(1);

console.log("agregaste un numero el numero actual de elemento es: ", colas.length);

colas.push(2);

console.log("agregaste un numero el numero actual de elemento es: ", colas.length);

colas.push(3);

console.log("agregaste un numero el numero actual de elemento es: ", colas.length);

colas.push(4);

console.log("agregaste un numero el numero actual de elemento es: ", colas.length);

console.log(colas);

colas.shift(0);

console.log("Eliminaste un numero el numero actual de elemento es: ", colas.length);

console.log(colas);

colas.shift(0);

console.log("Eliminaste un numero el numero actual de elemento es: ", colas.length);

colas.shift(0);

console.log("Eliminaste un numero el numero actual de elemento es: ", colas.length);

console.log(colas);

colas.push(5);

console.log("agregaste un numero el numero actual de elemento es: ", colas.length);

colas.push(6);

console.log("agregaste un numero el numero actual de elemento es: ", colas.length);

colas.shift(0);

console.log("Eliminaste un numero el numero actual de elemento es: ", colas.length);

console.log(colas);

colas.shift(0);

console.log("Eliminaste un numero el numero actual de elemento es: ", colas.length);

colas.shift(0);

console.log("Eliminaste un numero el numero actual de elemento es: ", colas.length);

if(colas.length === 0){
    console.log("La cola esta vacia");
}