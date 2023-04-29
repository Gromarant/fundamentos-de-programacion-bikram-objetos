//Declaración
/* Answer: 1.- Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo, matricula */
let marca;
let modelo;
let matricula;
const Coche = { marca, modelo, matricula };

/*Answer:  2.- Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal, piso */
let codPostal;
let calle;
let portal;
let piso;
const Casa = { codPostal, calle, portal, piso };

/*Answer: 3.- Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes, array proyectos */
const FullStackDeveloper = { lenguajes: [], proyectos: [] }

/*Answer:  4.- Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3) */
const Perro = {
  nombre: 'Twinkie', 
  raza: 'mezcla de pequines', 
  color: 'blanca con manchas', 
  edad: 12, 
  ladrar() { console.log('woff') }, 
  popo() { return Math.random() * 3 }
}

//Lectura de propiedades
/*Answer: 5.- Dado un objeto de nombre Portatil obtén el valor de la propiedad marca con .marca guardándolo en la variable marcaPortatil */
const marcaPortatil = Portatil.marca;

/*Answer:  6.- Dado un objeto de nombre Portatil obtén el valor de la propiedad marca con ["marca"] guardándolo en la variable marcaPortatil2 */
const marcaPortatil2 = Portatil['marca'];

/* Answer: 7.- Dado un objeto de nombre Concierto obtén el valor de la propiedad array grupos guardándolo en la variable grupos */
const grupos = Concierto.grupos;    /* Otra manera: -->  const grupos = Concierto['grupos']; */

/* Answer: 8.- Dado un objeto de nombre Led obtén el valor de las propiedades rojo, verde y azul guardándolo en la variable array RGB[Rojo, Verde, Azul] */ 
const RGB = [ Led.rojo, Led.verde, Led.azul ]   /* Otra manera: -->  const RGB = [ Led['rojo'], Led['verde'], Led['azul']  */

//Modificación de propiedades
/* Answer: 9.- Dado un objeto de nombre Portatil modifica el valor de la propiedad modelo por el valor P345 */
Portatil.modelo = 'P345';   /* Otra manera: --> Portatil['modelo'] = 'P345'; */

/* Answer: 10.- Dado un objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad cartelera */
Concierto.cartelera.push("Guns N' Roses");

/* Answer: 11.- Dado un objeto de nombre Concierto modifica el valor de la propiedad fecha por el valor new Date() (fecha de hoy) */
Concierto.fecha = new Date();

/* Answer: 12.- Dado un objeto de nombre Impresora modifica el valor de la propiedad imprimiendo por el valor objeto con propiedades: nombreArchivo, copias, numPaginas */
let nombreArchivo;
let copias;
let numPaginas;
Impresora.imprimiendo = { nombreArchivo, copias, numPaginas };

//Declaración
/* Answer: 13.- Crea un objeto de nombre Noticia que tenga las propiedades: titular, cuerpo */
let titular;
let cuerpo;
const Noticia = {titular, cuerpo};

/* Answer: 14.- Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos, edad */
const Persona = { nombre: 'Richard', apellidos: 'Nicholas branson', edad: 72 };

/* Answer: 15.- Crea un objeto de nombre Avion que tenga las propiedades: numPasajeros, función despegar (imprime por consola 'despegando'), función volar (imprime por consola llegando al destino), función aterrizar (imprime por consola 'aterrizando' */
const Avion = { 
  numPasajeros: 60,
  despegar() { console.log('despegando') }, 
  volar() { console.log('llegando al destino') }, 
  aterrizar() { console.log('aterrizando') } 
};

/* Answer: 16.- Crea un objeto de nombre Paquete que tenga las propiedades: array contenido con todos los objetos que contenga el paquete */
let contenido = [];
const Paquete = { contenido };

/* Answer: 17.- Crea un objeto de nombre Pais que tenga las propiedades: numHabitantes, continente, gentilicio */
const Pais = { numHabitantes: 47615034 , continente: 'Europeo', gentilicio: 'Español', };

//Lectura de propiedades
/* Answer: 18.- Dado un objeto de nombre O_Error obtén el valor de la propiedad codigo guardándolo en la variable codError */
const codError = O_Error.codigo;    /* Otra manera: --> const codError = O_Error['codigo']; */

/* Answer: 19.- Dado un objeto de nombre Grupo obtén el valor de la propiedad array integrantes guardándolo en la variable integrantes */
const integrantes = Grupo['integrantes'];   /* Otra manera: --> const integrantes = Grupo.integrantes; */

/* Answer:  20.- Dado un objeto de nombre Impresora obtén el valor de la propiedad objeto tinta{rojo, verde, azul} guardándolo en la variable nivelesTinta*/
const nivelesTinta = Impresora.tinta;   /* Otra manera: --> const nivelesTinta = Impresora['tinta']; */

/* Answer:21.- Dado un objeto de nombre Pantalla obtén el valor de la propiedad array bidimensional pixeles guardándolo en la variable pixeles */
const pixeles = Pantalla['pixeles'];    /* Otra manera: --> const pixeles = Pantalla.pixeles; */

/* Answer: 22.- Dado un objeto de nombre Movil obtén el valor de la propiedad especificaciones con ["especificaciones"] guardándolo en la variable especificaciones */
const especificaciones = Movil['especificaciones'];

//Modificación de propiedades
/* Answer: 23.- Dado un objeto de nombre Grupo modifica el valor de la propiedad numIntegrantes por el valor 5 */
Grupo.numIntegrantes = 5;   /* Otra manera: --> Grupo['numIntegrantes'] = 5; */

/* Answer: 24.- Dado un objeto de nombre Pantalla modifica el valor de la propiedad dimensiones por el valor 1920x1080 */
Pantalla['dimensiones'] = '1920x1080';    /* Otra manera: --> Pantalla.dimensiones = '1920x1080'; */

/* Answer: 25.- Dado un objeto de nombre Led modifica el valor de la propiedad encendido por el valor false si vale true y true si vale false */
Led.encendido = false;    /* Otra manera: --> Led['encendido'] = false; */

/* Answer: 26.- Dado un objeto de nombre Movil modifica el valor de la propiedad temperatura por el valor 20º */
Movil['temperatura'] = '20º';   /* Otra manera: --> Movil.temperatura = '20º'; */