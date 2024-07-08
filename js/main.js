class Persona {
    nombre;
    edad;
    sexo;
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setEdad(edad) {
        this.edad = edad;
    }
    get getEdad() {
        return this.edad;
    }
    set setSexo(sexo) {
        this.sexo = sexo;
    }
    get getSexo() {
        return this.sexo;
    }
    saludar() {
        return `Buen dia ${this.nombre} espero te encuentres bien`;     
    }
}

class Estudiante extends Persona{
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }
    get getCarrera() {
        return this.carrera;
    }
    estudiar() {
        return `${this.saludar()}, tienes ${this.getEdad} años con genero ${this.getSexo}, y estudias ${this.carrera}`
    }
}
let estudiante1 = new Estudiante("Diego","23","Masculino","Programacion");

document.querySelector("#resultado").innerHTML = /*html*/`
    <h1>Info:<span> ${persona1.estudiar()}</span></h1>
`;