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
    static esMayorDeEdad(edad) {
        if (edad >= 18){return "eres mayor de edad"} else {return "eres menor de edad"}
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
        return `${this.saludar()}, tienes ${this.getEdad} años por lo tanto ${Persona.esMayorDeEdad(this.edad)} con genero ${this.getSexo}, y estudias ${this.carrera}`
    }
}

let estudiante1 = new Estudiante("Diego","23","Masculino","Programacion");

document.querySelector("#resultado").innerHTML = /*html*/`
    <h2>Nombre:<input id="nombre" placeholder="Diego"></h2>
    <h2>Edad:<input id="edad" placeholder="23"></h2>
    <h2>Genero:<input id="genero" placeholder="Masculino"></h2>
    <h2>Carrera:<input id="carrera" placeholder="Programacion"></h2>

    <h1>Info:<span> ${estudiante1.estudiar()}</span></h1>
`;

let nombre = document.querySelector("#nombre");
let edad = document.querySelector("#edad");
let genero = document.querySelector("#genero");
let carrera = document.querySelector("#carrera");

nombre.addEventListener("change", function(){
    console.log(nombre.value);
});
