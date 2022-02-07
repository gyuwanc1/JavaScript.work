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

{
const colors = ['red', 'orange', 'yellow', 'green', 'blue']

function search(){
  var item = document.getElementsByTagName('li'); //배열형식
  console.log(item.length)

  for(let i = 0; i<item.length; i++){
    item[i].style.backgroundColor=colors[i];
  }
}

}

