//1) Verificar si una de las cadenas de caracteres del array
//tiene más de 10 caracteres

const vectorCadenas = ["Ecuador", "Argentina", "Dinamarca","Coreal del Norte"];
function cadenaMayorq10(array){
    return array.some(item => item.length>10);
  }
  console.log("¿La cadena tiene mas de 10 caracteres? = ",cadenaMayorq10(vectorCadenas));
  //console.log("¿Los numeros son mayor a 10?: ", palabras);
  
  //2) Chequear si uno de los elementos de la matriz es true
  
  const vectorBooleano = [[false, false, false],[false, false, true], [false, false, false]];
  function ExisteUnVerdaderoMatriz(matriz){
    return matriz.some(element => {
      return element.some(item => {
        return item == true;
      })
    })
  }
  console.log("¿La cadena tiene elementos verdaderos? = ",ExisteUnVerdaderoMatriz(vectorBooleano));
  
  
  //3) verificar si la palabra 'Lost' existe dentro del siguiente array:
  
  var vectorParrafo = ["Strange is the night where black stars rise,", "And strange moons circle through the skies,",
    "But stranger Lost still is","Lost Carcosa."
    ];
  function ExistePalabraLost (matriz){
    const palabra="Lost";
    return matriz.some(data => {
      return data.indexOf(palabra) != -1;
    })
  }
  console.log("¿La cadena tiene la palabra lost? = ",ExistePalabraLost(vectorParrafo));
  
  //Se tiene la siguiente matriz =
  // const matriz1=[['Esmeraldas', '28C'], ['Guayaquil', '26C'], ['Quito', '18C']];
  //Se pide diseñar la funcion para convertir la matriz en un objeto
  //Resultado esperado:
  /* {
    'Esmeraldas' : '28C',
    'Guayaquil' : '26C',
    'Quito' : '18C'
  }
  */
  // Utilice reduce-(acomulador, valor actual, index, array), {}
  
  const matriz1=[['Esmeraldas', '28C'], ['Guayaquil', '26C'], ['Quito', '18C']];
  function objectify (array){
    return array.reduce((ac, va, index, array) => {
      ac[va[0]]=va[1];
     // console.log(va);
      return ac;
    }, {})
  }
  console.log("Convertir la matriz en un objeto = ");
  console.log(objectify(matriz1));
  
  //Se tiene el siguiente const Vector = ["A", "B", "C", "D", "E"];
  //Se pide diseñar la funcion shiftRight-significa(Desplazamiento a la derecha)
  // que permita mostrar o retornar el resultado siguiente:
  //["E", "A" "B", "C", "D"]
  // Utilizar map (element, index, array)
  const Vector = ["A", "B", "C", "D", "E"];
  function shiftRightIntento(array)
  {
   return array.map((element, index, arrayv) => {
    const x=index++; 
    //const vec=arrayv[4]
    const aux=arrayv[n-1];
    for(element=x-2;element>=0;element--){
     arrayv[element+1]= arrayv[element];
    }
    arrayv[-1]=aux;
    //arrayv[-2]=vec;
    //console.log(vec);
    return aux;
  
  })
  }
  console.log("Se muestra el siguiente resultado:  ",shiftRightIntento(Vector));