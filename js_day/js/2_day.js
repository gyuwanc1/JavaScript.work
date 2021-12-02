//2day.js

console.log(container);
var container ='javascript'  //변수선언이 나중에됨
console.log(container);

var myMoney=10;
console.log(myMoney);
//===================================================
console.clear();

var myContainer = 10; //전역변수

var myFunction = function(){
  var myContainer = '안녕';//지역변수
  console.log('지역변수', myContainer);
}
myFunction(); //함수호출
console.log('전역변수', myContainer);

console.clear();

var w = 5+10;
console.log(w); //15

var x = 5+'10';
console.log(x);//510

var x2 = 5+'명';
console.log(x2);

var y = true + 1;
console.log(y);

var z = '자바스크립트' + '재미있다';
console.log(z);

//========================================================
console.clear();

var initial;
console.log(initial); //undefined

var nothing = null
console.log(nothing);//null


console.clear();

//---------------------------------------------------------


//==================예제1============================
var myBox;
var yourBox = null;

console.log(myBox, typeof myBox); // undefined  변수의 값이 정의되지 않았음.
console.log( yourBox, typeof yourBox); //object 유의

console.log ('==', null==undefined);  //== 의미비교, ===완전 모든것을 비교, 타입까지 비교
console.log ('===', null==undefined);



//==================예제2==============================

var myBox='';
var yourBox='     ';

console.log(myBox == yourBox); //false인 이유는 myBox와 yourBox 다른이유는? 문자와 빈공간의 문자인 타입은 같지만 의미는 다르다.
console.log(typeof myBox, typeof yourBox); 

console.clear();


var insert = 'more';
var insert2 = 'more2';

var d2 ='d""a'

var d3 = 
console.log(d3);


