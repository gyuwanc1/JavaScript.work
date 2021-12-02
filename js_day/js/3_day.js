// 3_day.js

//삼각형의 빝변
var base = 5;

//삼각형의 높이
var height = 10;

//삼각형의 넓이
var area = 0;

area = base * height / 2;

console.log('삼각형의 면적 ' + area);

console.clear();
//==============================================

//변수 선언 및 초기화

var x = 10
var y = 4
var z;

//연산수행

z= x + y;
console.log('x+y='+z);

z= x * y;
console.log('x*y='+z);

z= x % y;
console.log('x % y =' +z);

x= '홍';
y= '길동';
console.log(x+y);

console.clear();
//==================================================

//대입연산자
var x = 20;
console.log ('x ='+x);

x+=5;
console.log('x+='+x);

x*=5;
console.log('x*='+x);

x%=5;
console.log('x%=5---x='+x)

console.clear();
//=======================================================

//삼각형의 넓이 구하기

//삼각형의 밑변
var base = 5;

//삼각형의 높이
var height = 10;

//삼각형의 넓이
var area = 0;

area = base * height / 2;
console.log('삼각형의 면적 = ' + area);

console.clear();
//============================================================

//비교연산자.

var x = 5
var y = 8;
console.log('x == y - > '+(x == y))
console.log('x === y - > '+(x === y))
console.log('x > y - >' + (x > y))
console.log('x < y - >' + (x < y))

x = 5;
console.log ('x== \'5\'->' + (x == '5')); 
console.log ('x===\'5\'->' + (x === '5'));

console.clear();
//=============================================================

//논리 연산자

var x = true
var y = false

console.log('x||y->'+(x||y))
console.log('x && y ->' + (x&&y))
console.log('!x->' + (!x));

console.clear();
//==========================================================

//삼항조건연산자

var x = 10
var y = 5

var result = (x >= y) ? 'x >=y' : 'x < y';

console.log ('result => ' + result);

console.clear();

//==========================================================

//연습문제 1

var height = 1.7
var weight = 50
var normal = 23

var BMI = weight/(height*height)
BMI = BMI.toFixed(0);

console.log('신장 ' + height+'m');
console.log('몸무게(kg) '+ weight);
console.log ('BMI ' + BMI);

var result = (BMI > normal ) ? '비만입니다':'비만이 아닙니다';

console.log ('판정결과: ' + result);

console.clear();

//===============================================================

//연습문제 2

var x=1
var y=1
var z=1

y=x++;
console.log('1번 x ='+ x + ' y = ' + y) //x=2 y=1

z= ++x;
console.log ('2번 x ='+ x + ' z='+ z) //x=3 z=3

y += z
console.log('3번 y = ' + y + ' z=' +z) //y=4 z=3
