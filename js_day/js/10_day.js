
document.querySelector('.container > div:nth-of-type(1)').onclick=function(){
  this.style.backgroundColor='lightgreen'
  this.style.borderRadius=0
}

document.querySelector('.container > div:nth-of-type(2)').onmouseover=function(){
  this.style.borderRadius=0;
}

document.querySelector('.container > div:nth-of-type(2)').onmouseout=function(){
  this.style.borderRadius='100%';
}