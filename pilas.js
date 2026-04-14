let pilas = [];

pilas.push({ nombre: "Colombia", codigo: "+57" });

pilas.push({ nombre: "Brazil", codigo: "+55" });

pilas.push({ nombre: "Argentina", codigo: "+54" });

pilas.push({ nombre: "Italia", codigo: "+39" });

console.log(pilas);

let elementoeliminado = pilas.pop();

console.log(elementoeliminado);

console.log(pilas.length);

console.log(pilas);

pilas.pop();
pilas.pop();

console.log(pilas);

pilas.pop();

if(pilas.length === 0){
    console.log("La pila esta vacia");
}