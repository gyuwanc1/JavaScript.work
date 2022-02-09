//선택자 공부

// ID선택
// function search(){
//   document.getElementById('third').style.backgroundColor='orange';
// }

// function search(){
//   var target = document.getElementById('third');
//   target.style.backgroundColor = 'orange';
// }


//태그네임

// {
// const colors = ['red', 'orange', 'yellow', 'green', 'blue']

// function search(){
//   var item = document.getElementsByTagName('li'); //배열형식
//   console.log(item.length)

//   for(let i = 0; i<item.length; i++){
//     item[i].style.backgroundColor=colors[i];
//   }
// }

// }

{
  function search(){
    const items = document.getElementsByClassName('selected');
    console.log('목록수:', items.length)

    for(let i=0; i < items.length; i++){
      items[i].style.backgroundColor='orange';
    }
  }
}

{
  function change(){
    let elms = document.getElementsByClassName('coral')
    let item = document.querySelectorAll('.coral')

    console.log('[byClassName 전]',elms.length);
    console.log('[SelectorAll 전]',item.length);

    document.getElementById('third').className='coral';

    console.log('[byClassName 후]',elms.length);
    console.log('[SelectorAll 후]',item.length);

    //동적으로 변한 상황을 인식하지 못한다 = SelectorAll
  }
}

