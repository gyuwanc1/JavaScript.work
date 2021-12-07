//조건문

// if (조건문) {실행문};

var x = 99;
if(x < 100){
  console.log('x값은' + x + '입니다.');
  console.log('x값은 100보다 작습니다.');
}

//if-else 문 

// if(조건문){실행문1} else {실행문};

var y = 100;
if ( y < 50 ){
  console.log ('y값은 50보다 작습니다.')
}else{
  console.log('y값은 50보다 큽니다.')
}

var z = 25;
if (z%2 === 0){
  console.log('z는 짝수입니다.')
}else{
  console.log ('z는 홀수 입니다.')
} 

//if-else-if문

//if (조건문1){실행문1} else if (조건문2) {실행문2} else {실행문3};

var runningTime = 9.7;

if (runningTime <= 10){
  console.log('매우빠릅니다')
}else if (runningTime <= 12) {
  console.log('빠릅니다')
}else if (runningTime <= 15){
  console.log('잘했어요')
}else {
  console.log('연습이 필요합니다')
};

//for 문
// for(초기값;조건식;증감식){ 실행문}

var x
for(x=1; x<=5; x+=1){
  console.log(x);
};

//예제

// var week = prompt('요일을 입력하세요(월~금');

// if (week==='월'||week==='수'||week==='금'){
//   console.log('정상수업')
// }else if (week==='화'||week==='목'){
//   console.log('수업없음')
// }else{console.log('잘못입력');}

// console.clear();
//=============================
//for문


var ID = 'car' //저장된 아이디
for(i=0; i<3 ; i+=1){
  var idInput = prompt('아이디를 입력하세요')
  if (idInput === ID){
    console.log(idInput + '님 반갑습니다.')
     break;
  }else {
    console.log ('ID가 잘못 입력 되었습니다.')
  }
}


