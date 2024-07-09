class Animal {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    hacerSonido() {
        switch (this.nombre) {
            case "CABALLO":
                return "../storage/audio/caballo.mp3"
            case "PATO":
                return "../storage/audio/pato.mp3"
            case "PERRO":
                return "../storage/audio/perro.mp3"
            case "ASNO":
                return "../storage/audio/asno.mp3"  
            case "GALLO":
                return "../storage/audio/gallo.mp3"
            case "GATO":
                return "../storage/audio/gato.mp3" 
            case "PAJARO":
                return "../storage/audio/pajaro.mp3" 
            case "TIGRE":
                return "../storage/audio/tigre.mp3"   
            case "VACA":
                return "../storage/audio/vaca.mp3"           
            default:
                "Audio no encontrado"
                break;
        }    
    }
}

class Perro extends Animal{
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }
    set setRaza(raza){
        this.raza = raza;
    }
    get getRaza() {
        return this.raza;
    }
    moverCola() {
        if (this.nombre == "PERRO"){
            return `Tu perro de raza ${this.getRaza}, esta sacudiendo la cola`
        }
    }
}

let button_sound = document.querySelector("#button_sound");

button_sound.addEventListener("click", function(){
    let input_animal = document.querySelector("#animal");
    if (input_animal.value.toUpperCase() == "PERRO"){
        let input_raza = document.querySelector("#raza");
        document.querySelector("#divraza").innerHTML = /*html*/`
        <h2>Raza:<input id="raza" placeholder="pitbull"></h2>`;
        let animal1 = new Perro(input_animal.value.toUpperCase(), input_raza.value);
        document.querySelector("#resultado").innerHTML = /*html*/`
        <audio controls autoplay loop><source src="${animal1.hacerSonido()}" type="audio/mpeg"></audio>
        <p>${animal1.moverCola()}</p>`;
    }else{
        let animal1 = new Animal(input_animal.value.toUpperCase());
        document.querySelector("#resultado").innerHTML = /*html*/`
        <audio controls autoplay><source src="${animal1.hacerSonido()}" type="audio/mpeg"></audio>`;
    }
});

