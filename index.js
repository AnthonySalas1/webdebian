const express = require('express');
const app = express();

var _ = require("underscore");

//var lista =[1,2,3,4,5,6,7,8,9,10]; _.each(lista, function(numero){ console.log(numero); });

var employeesCollection = [
    {
        "id": 1,
        "name": "John",
        "age": 30,
        "position": "Manager",
        "salary": 1000
    },
    {
        "id": 2,
        "name": "Jane",
        "age": 25,
        "position": "Developer",
        "salary": 2000
    },
    {
        "id": 3,
        "name": "Peter",
        "age": 35,
        "position": "Manager",
        "salary": 3000
    },
    {
        "id": 4,
        "name": "Paul",
        "age": 40,
        "position": "Developer",
        "salary": 4000
    }
];

var cargos = _.map(employeesCollection, function(employee)
{ return employee.position; });

console.log(cargos);
console.log(_.pluck(employeesCollection, "name"));
console.log(_.pluck(employeesCollection, "salary"));

var empleados_sse = _.chain(employeesCollection)
.filter(function(employee) 
{ return employee.position === "Manager"; })
.map(function
    (employee) { return {name: employee.name, id: employee.id };
})
.value();
console.log(empleados_sse);

exports.replace = function(objetivo, reemplazos){
    var param_encontrados = objetivo.match(/\{[^}]+\}/g);
    if(param_encontrados){
        var nombre_param = null,
            valor_reemplazo = null;
        for (var i = 0; i < param_encontrados.length; i++) {
            nombre_param = param_encontrados[i].replace(/[{}]/g, '');
            valor_reemplazo = reemplazos[nombre_param];
            if(valor_param){
                objetivo = objetivo.replace(param_encontrados[i], reemplazo);
            }
        }
        return objetivo;
    }
}

var param_replacer = require('./lib/replace');
var objetivo = "%hello% %world%! -- %world% %hello%";
var idioma = "es";
var reemplazos = {
    "en" : {
        "hello" : "Hello",
        "world" : "World"
    },
    "es" : {
        "hello" : "Hola",
        "world" : "Mundo"
    }
};

var resultado = param_replacer.replace(objetivo, reemplazos[idioma]);
console.log(resultado);

app.get('/',(req, res) => {
    res.send(resultado)
})
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})