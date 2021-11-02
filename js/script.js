/**
 * di default quando apro la pagina vedo la scritta
 * poi devo selezionare una difficoltà
 * al click su play allora genero la griglia in base alla difficoltà che ho impostato
 */

const container = document.querySelector('.gs-container');

init ();

let select = document.getElementById('difficult');
//let value = select.options[select.selectedIndex].value;

const play = document.querySelector('.btn');
console.log(play);

play.addEventListener('click', function(){
  //premo play e la scritta va in display none e la griglia va in display block


})


function init(){
  for (let i = 0; i < 100; i++){
    //creo ogni volta l'elemento square e lo aggiugno al container - con funzione
    const mySquare = createSquare(container);

    //inserisco numero
    mySquare.innerHTML = [i + 1];
  
    //gestisco comportamento - aggiungo colore sfondo al click
    mySquare.addEventListener('click',function(){
      console.log(this);
      this.classList.add('clicked');
  
    });
  }

};

/**
 * generatore di square
 * @param {HTMLDivElement} target 
 * @returns 
 */
 function createSquare(target){
   //creo elemento div
  const mySquare = document.createElement('div');

  //aggiungo classi a div
  const classes = ['square', 'easy' ]
  mySquare.classList.add(...classes);

  //appendo il div al suo contenitore
  target.append(mySquare);
  //ottengo il quadrato
  return mySquare;
}
