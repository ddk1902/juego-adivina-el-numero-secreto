let numeroMaximoPosible=10;
let contadorIntentos=0;
let listaNumerosSorteados= [];


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximoPosible)+1;   

   // console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números posibles
    if (listaNumerosSorteados.length== numeroMaximoPosible){
      asignarEstilos('p',` Ya se sorteó la cantidad de ${numeroMaximoPosible} números posibles..!`)
    } else{
     // Si el número generado se encuentra en la lista
     if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
      }
          else {
              listaNumerosSorteados.push(numeroGenerado);
              return numeroGenerado;
          }
  }
  
    }
    condicionesIniciales(); 



console.log(contadorIntentos)
function asignarEstilos(elemento,texto){
    let elementoHtml= document.querySelector(elemento);
    elementoHtml.innerHTML=texto;
}


function verificarIntento(){
let numeroUsuario= parseInt(document.getElementById('valorUsuario').value);

if(numeroUsuario===numeroSecreto){
    asignarEstilos('p',`Acertaste el número secreto en ${contadorIntentos} ${(contadorIntentos===1) ? 'intento':'intentos'}..!!`);
    //Cuando el usuario acierta, habilita un nuevo juego
      document.getElementById('reiniciar').removeAttribute('disabled');
}else{
    if(numeroUsuario>numeroSecreto){
        asignarEstilos('p','El número secreto es menor...! Intenta de nuevo');
        contadorIntentos++;
        limpiarCaja();
    }else{
        asignarEstilos('p','El número secreto es mayor...! Intenta de nuevo')
        contadorIntentos++;
        limpiarCaja();
    }
    console.log(contadorIntentos)
};
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function reiniciarJuego(){
     //Limpiamos la caja
     limpiarCaja();
     // Reiniciamos el contador, generamos el numero secreto e indicamos que vuelva a ingresar el numero
     // Deshabilitamos el botón de nuevo juego
     condicionesIniciales();
     
     

}

function condicionesIniciales(){
    asignarEstilos('h1','Juego del número secreto v2');
    asignarEstilos('p',`Seleccione un número del 1 al ${numeroMaximoPosible}`);
    numeroSecreto=generarNumeroSecreto();
    contadorIntentos=1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
