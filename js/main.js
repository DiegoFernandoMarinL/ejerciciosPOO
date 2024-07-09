class Figura {
    color;
    ancho;
    largo;
    constructor(color, ancho, largo) {
        this.color = color
        this.ancho = ancho
        this.largo = largo
    }
    set setColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    set setAncho(ancho) {
        this.ancho = ancho;
    }
    get getAncho() {
        return this.ancho;
    }
    set setLargo(largo) {
        this.largo = largo;
    }
    get getLargo() {
        return this.largo;
    }
    calcularArea() {
        return `El area de la figura de color ${this.color} es ${this.ancho * this.largo}`;
    }    
}

let button_calcular = document.querySelector("#button_calcular");

button_calcular.addEventListener("click", function(){
    let input_color = document.querySelector("#color");
    let input_ancho = document.querySelector("#ancho");
    let input_largo = document.querySelector("#largo");
    let figura1 = new Figura(input_color.value, input_ancho.value, input_largo.value);
    document.querySelector("#resultado").innerHTML = /*html*/`
    <h5>${figura1.calcularArea()}</h5>`;
});

