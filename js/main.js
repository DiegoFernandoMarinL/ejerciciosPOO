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


let button_save = document.querySelector("#button_save");

button_save.addEventListener("click", function(){
    let input_nombre = document.querySelector("#nombre");
    let input_edad = document.querySelector("#edad");
    let input_genero = document.querySelector("#genero");
    let input_carrera = document.querySelector("#carrera");

    let estudiante1 = new Estudiante(input_nombre.value,input_edad.value,input_genero.value,input_carrera.value);

    document.querySelector("#resultado").innerHTML = /*html*/`
    <h1>Info:<span> ${estudiante1.estudiar()}</span></h1>
`;
});

