"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
maxValue(3, 1);
function maxValue(v1, v2) {
    return Math.max(v1, v2);
}
var test = 'test';
var edads = 12;
var listaNombre = ['A', 'B', 'C'];
// Tupla --> Array clave/valor
var personaTupla;
personaTupla = ['J', 24];
// Enumerado
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Amarillo"] = 2] = "Amarillo";
    Color[Color["Azul"] = 3] = "Azul";
})(Color || (Color = {}));
;
// Color.   ---> Accede al enumerado.
//Void
function alertaUsuario() {
    alert('Alerta por subnormal');
}
//Null
var nulo;
// Indefinido
var indefinido;
// CLASES
var Animal = /** @class */ (function () {
    function Animal(name, edad, colorPiel) {
        this.name = name;
        this.edad = edad;
        this.colorPiel = colorPiel;
    }
    ;
    //Metodos
    Animal.prototype.saludo = function () {
        return "Hola, " + name;
    };
    return Animal;
}());
var animal = new Animal('Perro', 2, Color.Rojo);
alert(animal.saludo());
// HERENCIA
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.saludo = function () {
        return "Adios " + name;
    };
    return Perro;
}(Animal));
// CLASES ABSTRACTAS
var Persona = /** @class */ (function () {
    function Persona(name) {
        this.name = name;
    }
    return Persona;
}());
// CONDICIONALES
var Desarrollador = /** @class */ (function (_super) {
    __extends(Desarrollador, _super);
    function Desarrollador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Desarrollador;
}(Persona));
var jdesarrollo = new Desarrollador('J');
if (jdesarrollo.name == 'J') {
    console.log('Correcto');
}
;
switch (animal.colorPiel) {
    case Color.Amarillo:
        console.log('Amarillo');
        break;
    case Color.Azul:
        console.log('Azul');
        break;
    case Color.Rojo:
        console.log('Rojo');
        break;
    default:
        console.log('No se ecnontro color');
        break;
}
