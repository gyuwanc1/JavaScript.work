//6_day.js

//object array

var car = ['소형차','중형차','대형차'];
var fruit = ['딸기','사과','오렌지']

console.log(car[0]);

//뒤에 원소 추가
car[3] = '스포츠카';
console.log('car배열의 원소:'+car.toString());

//원소 바꾸기
car[1] ='버스'
console.log('car배열의 원소:' + car.toString());

//to.String(); => 배열원소들을 문자화

// 배열명(변수명).length(); => 배열에 저장된 데이터의 개수 확인.

var con =['d','a','b','c']
console.log(con.sort()) // 배열명(변수명).sort();  ->한글은 가나다순 영어는 abc순 정열 

// 배열명(변수명).join('문자') => 배열의 모든원소를 '문자'로 연결

//배열명(변수명).pop() => 배열에 저장된 원소중에서 마지막 데이터 제거

//배열명(변수명).push(입력데이터) => 입력데이터를 배열에 저장된 원소의 마지막에 추가.

var u = ['d','b','c']
var t = u.push('감자');
console.log(t);//4 <= 배열안에  데이터의 갯수
console.log(u);//[d,b,c,감자]

//===================================================================12/21