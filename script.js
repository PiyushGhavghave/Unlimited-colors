const displayColor = document.querySelector('.display');

//generate color (string)
function generate(){
  const colors = '0123456789abcdef';
  let myColor = '#'
  for(let i=0; i< 6;i++){
    let randomNum = Math.floor(Math.random() * 16);
    myColor += colors[randomNum];
  }
  return myColor;
}



let change;   //Global scope
function startChangingColor(){
  //once it start.... it will again only starts when change becomes 'null' or 'falsy value'
  if(!change){
    change = setInterval( function(){
      let generatedColor = generate();
      document.body.style.backgroundColor = generatedColor;
      displayColor.innerHTML = `<span>${generatedColor}</span>`;
    },1000)
  }
}
function stopChanginColor(){
  clearInterval(change);
  change =null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChanginColor)


