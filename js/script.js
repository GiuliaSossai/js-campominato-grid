/**
 * di default quando apro la pagina vedo la scritta
 * poi devo selezionare una difficoltà
 * al click su play allora genero la griglia in base alla difficoltà che ho impostato
 */
const container = document.querySelector('.gs-container');
console.log(container);

// init();

const level = document.querySelector('.form-select');

let difficoltàScelta = parseInt(level.value);


const play = document.querySelector('.btn');
console.log(play);

const text = document.querySelector('.default-text');
console.log(text);

play.addEventListener('click', function(){
  //premo play e la scritta va in display none e la griglia va in display block

  text.classList.add('disabled');
  console.log(text);
  container.classList.add('active');
  console.log(container);

  

  if (difficoltàScelta === 1){
    for (let i = 0; i < 100; i++){
      const mySquare = createSquare(container);
      mySquare.innerHTML = [i + 1];
      mySquare.addEventListener('click',function(){
        this.classList.add('clicked');
      });
    }
  }else if (difficoltàScelta === 2){
    for (let i = 0; i < 81; i++){
      createSquare(container);
      mySquare.innerHTML = [i + 1];
      mySquare.addEventListener('click',function(){
        this.classList.add('clicked');
      });
    }
  } else {
    for (let i = 0; i < 49; i++){
      createSquare(container);
      mySquare.innerHTML = [i + 1];
      mySquare.addEventListener('click',function(){
        this.classList.add('clicked');
      });
    }
  }


})


/**
 * generatore di square
 * @param {HTMLDivElement} target 
 * @returns 
 */
 function createSquare(target){
   //creo elemento div
  const mySquare = document.createElement('div');

  //aggiungo classi a div a seconda della difficoltà
  if (difficoltàScelta === 1){
    mySquare.classList.add('square','easy');
  }
  if (difficoltàScelta === 2){
    mySquare.classList.add('square','hard');
  }
  if (difficoltàScelta === 3){
    mySquare.classList.add('square','crazy');
  }
  
  //appendo il div al suo contenitore
  target.append(mySquare);
  //ottengo il quadrato
  return mySquare;
}
