class Persona {
    
    //atributo static
    //pertenece a la clase y no a los objetos que nacen de ella
    static atributoStatic = "Atributo static"; //atributo de la clase
    static contadorStatic = 0;
    static contadorId = 0;
    email = "valor default del email"; // atributo del objeto fuera del constructor
    
    
    //variable static no modificable (no usamos la keyword const como en el resto de las variables)
    //llamada a metodo static
    //declaramos un maximo de objetos que se pueden crear con la clase persona
    //no es una variable pero se pude usar como tal ya que solo imprime un valor
    static get MAX_OBJ() {
        return 5;
    }
    
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        //aplicar el MAX_OBJ
        if(Persona.contadorId > Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorId;
        } else {
            console.log("se han superado el max de objetos permitidos")
        }  

        //no se usa this.contadorStatic ya que 'this' es un objeto de la clase
        Persona.contadorStatic++;
        //crear un id por cada objeto Persona crada con este constructor
        
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    } 

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    nombreCompleto() {
        return this.idPersona + " " + this._nombre + " " + this._apellido;
    }
    //sobreescribiendo el metodo de la clase padre
    toString() {
        //aplicando polimorfismo (multpiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto()
    }

    //es un metodo que no puede ser usado por 
    //objetos que hayan sido creados por esta clase
    static saludar() {
        return console.log("saludos desde metodo static");
    }
    static saludar2(persona){
        console.log(persona.nombre + " " + persona.apellido);
    }

}

let persona1 = new Persona("Carlos", "Funez", 25);
console.log(persona1);

let persona2 = new Persona("Pedro", "Lara", 26);
console.log(persona2);

//get
console.log(persona1.nombre)

//set
persona1.nombre = "Pato";
console.log(persona1);


//herencia
class Empleado extends Persona {
    constructor(nombre, apellido, edad, departamento) {
        super(nombre,apellido, edad);
        this._departamento = departamento;

    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    //sobreescritura de metodo
    nombreCompleto() {
        return super.nombreCompleto() + ", " + this._departamento;
    }

}

let empleado1 = new Empleado("Ruben", "Garcia", 33, "Mantenimiento");
console.log(empleado1);
console.log(empleado1.departamento);
console.log(empleado1.nombreCompleto());

// la clase padre de todos los objetos es Object
// por ejemplo en la clase perosna si no definimos un extends 
// JS automaticamente le da un extends a la clase Object

class Persona1 extends Object {

}

// metodo toString() viene de Object.prototype

console.log(empleado1);
//el navegador en realidad lo que va a mostrar es:
//console.log(empleado1.toString()); = [object Object] 
// para corregir esto loq ue hacemos es ir a la clase Persona y sobreeescribir el metodo
//toString


//console.log(persona1.saludar()) no es posible llamar a un metodo static desde el objeto pero si desde la clase
//pero si desde la clase
//los metodos static solo se puden ver en consola
Persona.saludar();
//pasasndo argumentos de tipo persona a un metodo static
Persona.saludar2(persona1);
//se pueden usar los metodos static desde las clases hijas
//pero no desde los objetos
Empleado.saludar();
Empleado.saludar2(empleado1);


//usando atributos static
//persona1 al ser un objeto no puede usar los atributos static
//solo puden ser llamados a travez de la clase
console.log(persona1.contadorStatic);
//suma las veces que se uso el constructor
//en este caso fueron dos personas y un empleado
console.log(Persona.contadorStatic);
console.log(Empleado.contadorStatic);

//acceder a una atributo de objeto declarado fuera del constructor
console.log(persona1.email);
console.log(empleado1.email);
//no es un atributo de clase, son atributos del los objetos que crean las clases, y pueden ser usados por los objetos.
console.log(Persona.email);
console.log(Empleado.email);

console.log(Persona.MAX_OBJ);
//si trataramos de modificar la variable no podriamos
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);