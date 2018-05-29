maxValue(3, 1);
function maxValue(v1:number, v2:number) {
    return Math.max(v1, v2);
}



let test: string = 'test';
let edads: number = 12;
let listaNombre : Array<String> = ['A','B','C'];


// Tupla --> Array clave/valor

let personaTupla: [string, number];
personaTupla =['J', 24];


// Enumerado
enum Color {Rojo, Verde, Amarillo, Azul};
// Color.   ---> Accede al enumerado.


//Void
function alertaUsuario ():void{
    alert('Alerta por subnormal');

}

//Null
let nulo: null;


// Indefinido
let indefinido: undefined;










// CLASES

class Animal {
    readonly name: string;
    private edad: number;
    public colorPiel: Color;
    
    constructor(name:string, edad:number, colorPiel:Color){
        this.name=name;
        this.edad=edad;
        this.colorPiel=colorPiel;
    };

    //Metodos
    saludo():string{
        return `Hola, ${name}`;
    }

}

let animal = new Animal('Perro', 2, Color.Rojo);
alert(animal.saludo());


// HERENCIA

class Perro extends Animal{
    saludo(): string{
        return `Adios ${name}`
    }
}


// CLASES ABSTRACTAS

abstract class Persona{
    readonly name: string;
    constructor (name: string){
        this.name=name;
    }
}






// CONDICIONALES
class Desarrollador extends Persona{
}

let jdesarrollo = new Desarrollador('J');

if(jdesarrollo.name == 'J'){
    console.log('Correcto');
};

switch(animal.colorPiel){
    case Color.Amarillo:
        console.log('Amarillo');
        break;
    case Color.Azul:
        console.log('Azul');
        break;
    case Color.Rojo:
        console.log('Rojo');
        break

        default:
            console.log('No se ecnontro color');
            break
    }









    