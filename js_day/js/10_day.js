{
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

}

{
  console.log('1번째')

  window.onload = ()=>{
    console.log('2번째')
  }

  console.log('3번째')
}

{
  window.onresize=()=>{
    console.log('브라우저의 크기 - viewport')
    console.log(window.innerWidth + 'X' + window.innerHeight);

    console.log('모니터의 크기 - device size')
    console.log(window.screen.width + 'X' + window.screen.height);
  }


}