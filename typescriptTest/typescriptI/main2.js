"use strict";
// Iteradores
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var listaNumeros = [100, 200, 300];
for (var _i = 0, listaNumeros_1 = listaNumeros; _i < listaNumeros_1.length; _i++) {
    var numero = listaNumeros_1[_i];
    console.log(numero); //100,200,300
}
for (var numero in listaNumeros) {
    console.log(numero); // 1,2,3
}
// LISTAS GENERICAS
var ColeccionCustom = /** @class */ (function () {
    function ColeccionCustom() {
        this.objetoCualquiera = [];
    }
    ColeccionCustom.prototype.Add = function (item) {
        this.objetoCualquiera.push(item);
    };
    return ColeccionCustom;
}());
var PersonaInfo = /** @class */ (function () {
    function PersonaInfo(name) {
        this.name = name;
    }
    return PersonaInfo;
}());
// se le pueden asignar cualquier tipo a los objetos genericos
var listaNombres = new ColeccionCustom();
listaNombres.Add('Paco');
var listaEdades = new ColeccionCustom();
listaEdades.Add(1);
var listaPersonaInfo = new ColeccionCustom();
listaPersonaInfo.Add(new PersonaInfo('Pedro'));
function escribeMensaje(mensaje) {
    console.log(mensaje.titulo);
}
// MODULOS y NAMESPACE
var Validador;
(function (Validador) {
    var ValidadorCodigoPostal = /** @class */ (function () {
        function ValidadorCodigoPostal() {
        }
        ValidadorCodigoPostal.prototype.esValido = function (value) {
            return value > 0 && 10 < value;
        };
        return ValidadorCodigoPostal;
    }());
    Validador.ValidadorCodigoPostal = ValidadorCodigoPostal;
})(Validador || (Validador = {}));
var validador = new Validador.ValidadorCodigoPostal;
validador.esValido(5);
// DECORADORES
function Logeado() {
    return function (target) {
        console.log('Estas Logeado!!');
    };
}
var TestDecoradores = /** @class */ (function () {
    function TestDecoradores() {
    }
    TestDecoradores.prototype.metodo = function () {
        return true;
    };
    TestDecoradores = __decorate([
        Logeado()
    ], TestDecoradores);
    return TestDecoradores;
}());
