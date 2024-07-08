class Persona {
    #nombre;
    #edad;
    #sexo;
    constructor(nombre, edad, sexo) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#sexo = sexo;
    }
    get getNombre() {
        return this.#nombre;
    }
    get getEdad() {
        return this.#edad;
    }
    get getSexo() {
        return this.#sexo;
    }
    saludar() {
        return `Buen dia ${this.#nombre} espero te encuentres bien`;     
    }
}

let persona1 = new Persona("Diego","23","Masculino");

document.querySelector("#resultado").innerHTML = /*html*/`
    <h1>Saludo:<span> ${persona1.saludar()}</span></h1>
    <h1>Edad: <span>${persona1.getEdad}</span></h1>
    <h1>Sexo: <span>${persona1.getSexo}</span></h1>
`;