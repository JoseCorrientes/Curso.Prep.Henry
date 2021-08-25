// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = []
  let elemento
  for (key in objeto) {
    elemento =[];
    elemento[0] = key;
    elemento[1] = objeto[key];
    matriz.push(elemento);
  }  
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let retorno = {};
  letras = [];  //letras distintas encontradas
  let estaEnLetra;     //bandera de letra encontrada encontrada con anterioridad
  for (let i = 0; i<string.length; i++ ) {
      estaEnLetra = false;
      
      for (let j of letras) {
        if (string[i]==j) {
          estaEnLetra = true;
          break;
        }
      }
      if (estaEnLetra===false) {
        letras.push(string[i]);  //genera arreglo de caracteres distintos
      } 
  }
  //   cuenta total de caracteres de cada tipo y genere el par clave valor
  for (let elemento of letras) {
    let sumador = 0;
    for (let i=0; i<string.length; i++) { 
      if (elemento==string[i]) { 
        sumador++;
      }
    }
    retorno[elemento] = sumador;
  }
  return retorno;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  
  function esMayuscula (letra) {      // ve el codigo ascii 65 A ---- 90 Z mayusculas
    let valorASCII = letra.charCodeAt(0);
    return valorASCII > 64 && valorASCII <91
  }


  let cadenaMayuscula ="";
  let cadenaMinuscula ="";

  for (let x = 0; (x< s.length);  x++) {
    if (esMayuscula(s[x])===true) { 
      cadenaMayuscula += s[x];
      } 
      else
      { 
      cadenaMinuscula += s[x];
    }
  }
  return cadenaMayuscula + cadenaMinuscula;
}

 


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  function espejo(cad) {
    let acumula = "";
    for (let i = cad.length-1; i>=0 ; i--) {
      acumula += cad[i];
    }
    return acumula;
  }
  
  let retornar1 ="";
  let frase =str.split(' ');
  for (let j=0; j<frase.length; j++) {
    retornar1 += espejo(frase[j]);
    if (j<frase.length-1) {
      retornar1 +=" ";
    }
    }  
  return retornar1;
}




function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let reversoStr =""
  let numeroStr = numero.toString();
  for (let i = ((numeroStr.length)-1); i>=0; i--) {
    reversoStr += numeroStr[i];
  }
  if (numeroStr === reversoStr) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }

}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevaCadenaABC = "";
  let bandera = false;
  for (let i = 0; i<cadena.length; i++) {
    if ( (cadena[i]==="a") || (cadena[i]==="b") || (cadena[i]==="c") ||
        (cadena[i]==="A") || (cadena[i]==="B") || (cadena[i]==="C") ) {
          bandera = true;  
          continue;
    }
    nuevaCadenaABC += cadena[i];
  }
  return ( bandera? nuevaCadenaABC : cadena);
}




function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arregloDeLongitudes = [];
  let arregloFinal = [];
  for (let i =0; i< arr.length; i++) {      // hago un arreglo de longitudes
    arregloDeLongitudes.push (arr[i].length);
  }

  let arrASet = new Set (arregloDeLongitudes);  // hago un set del array y elimino duplicacion del set y luego a arreglo
  let arrSetND = [...arrASet];

  // ordener arrSetND de menor a mayor
  let guardar2 = 0;
  let tempo;
    
  for (let i = 0; i< arrSetND.length; i++) {
      for (let j= i+1; j< arrSetND.length; j++) {
          if (arrSetND[j] < arrSetND[i]) {
            tempo=arrSetND[i];
            arrSetND[i]=arrSetND[j];
            arrSetND[j]=tempo;
          }
      }
  }
  
// con el arreglo ordenado de mayor a menor de las longitudes recorre el arreglo y recupera las palabras
  for (let i = 0; i< arrSetND.length; i++) {
      for (let j = 0; j< arr.length; j++) {
          if (arrSetND[i]== arr[j].length ) {
             arregloFinal.push(arr[j]);
          }
      }
  }
return arregloFinal;
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arr1ASet = new Set (arreglo1);
  let arr2ASet = new Set (arreglo2);
  let arr1ND = [...arr1ASet];
  let arr2ND = [...arr2ASet];
  console.log(arr2ND);
  console.log(arr1ND);
  let comunes = [];

  for (let i = 0; i<arr1ND.length; i++) {

    for (let j = 0; j<arr2ND.length; j++) {

        if (arr1ND[i]===arr2ND[j]) {
          comunes.push(arr1ND[i]);
        }

    }
  }
return comunes;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

