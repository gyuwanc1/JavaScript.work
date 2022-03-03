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

{
  const redBox = document.querySelector('#red')
  redBox.addEventListener('click',()=>{
    redBox.style.boxShadow = '2px 2px 2px #888';
  })
  

  const blueBox = document.querySelector('#blue')
  blueBox.addEventListener('mouseover',function(){
    this.style.boxShadow='2px 2px 2px #888';
  })
  blueBox.addEventListener('mouseout',function(){
    this.style.boxShadow = 'none'
  })
}

{
  const lists = document.querySelectorAll('#mylist > li');
  
  for(let i=0; i<lists.length;i++){
    lists[i].addEventListener('mouseover', function(){
      this.style.backgroundColor='#eee';
    })

    lists[i].addEventListener('mouseout',function(){
      this.style.backgroundColor = 'transparent';
    })
    
    lists[i].onclick=clickList;
  }

  function clickList(){
    if(this.className === 'clicked'){
      this.className ='';
    }else{
      this.className = 'clicked';
    }
  }
}
