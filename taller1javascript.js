 //Talleres para el dia lunes:
 
 // Taller: Definir dos variables, asignarles un valor y utilizando decisiones imprimir en la consola la que tenga menor valor
 let a = 11;
 let b = 22;

 if(a > b){
    console.log(`La variable A=${a} es mayor que la variable B=${b}`)
}else{
    console.log(`La variable A=${a} es menor que la variable B=${b}....`)
}

 // Taller: Definir tres variables, asignarles valores y utilizar decisiones para imprimir en la consola la que tenga el mayor valor
 console.log("Ejercicio 2************")
 
 let x = 10;
 let y = 150;
 let z = 888888;

 console.log(`Dadas las siguientes variables: (x=${x}), (y=${y}), (z=${z}), la variable mayor es:`)
 
 if(x > y && x > z){
    console.log(`X=${x}`)
}else{
    if(y > z && y > x){
        console.log(`y=${y}`)
    }else{
        console.log(`z=${z}`)
    }
}

