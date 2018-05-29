   // Iteradores


let listaNumeros : Array<number> = [100,200,300];



for(let numero of listaNumeros){
    console.log(numero); //100,200,300
}

for(let numero in listaNumeros){
    console.log(numero);// 1,2,3
}




// LISTAS GENERICAS

class ColeccionCustom <T>{
    private objetoCualquiera: Array<T>;
    constructor(){
        this.objetoCualquiera = []
    }
    Add(item: T){
        this.objetoCualquiera.push(item);
    }
}



class PersonaInfo{
    readonly name:string;
    constructor(name:string){
        this.name=name;
    }
}


// se le pueden asignar cualquier tipo a los objetos genericos

let listaNombres = new ColeccionCustom <string>();
listaNombres.Add('Paco');
let listaEdades = new ColeccionCustom <number>();
listaEdades.Add(1);
let listaPersonaInfo = new ColeccionCustom <PersonaInfo>();
listaPersonaInfo.Add(new PersonaInfo('Pedro'));




// INTERFACES

interface Mensaje{
    titulo: string;
    mensaje: string;
    numeroError?: number;
}

function escribeMensaje (mensaje:Mensaje){
    console.log(mensaje.titulo);
}




// MODULOS y NAMESPACE

namespace Validador {
    export interface ValidadorNumero{
        esValido(value:number): boolean;
    }

    export class ValidadorCodigoPostal implements ValidadorNumero{
       esValido(value: number): boolean {
           return value > 0 && 10 < value;
       }
    }
}


let validador: Validador.ValidadorNumero = new Validador.ValidadorCodigoPostal;

validador.esValido(5);


// DECORADORES

function Logeado (){
    return function (target: any){
        console.log('Estas Logeado!!');
    }
}


@Logeado()
class TestDecoradores {
    metodo(): boolean{
        return true;
    }
}