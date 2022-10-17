function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === 'audio' ){

            elemento.play();
    }
     else{
        alert('Elemento não encontrado ou seletor não inválido') 
     }
  }

const ListaDeTeclas = document.querySelectorAll('.tecla');


for ( let contador = 0; contador < ListaDeTeclas.length; contador++) { 

const tecla = ListaDeTeclas[contador];
const instrumento = tecla.classList[1];                                        
const idAudio = `#som_${instrumento}`; //template string


    tecla.onclick = function () {
        tocaSom(idAudio); 
    }
    tecla.onekeydown = function (evento) {
     
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
      

    }
    tecla.onekeyup = function () {
        tecla.classList.remove('ativa');
    }
}

