//문자열 공부

let k = 'hello'

console.log(k);

let k2 = k.replace('hello', 'bye');// 문자열 변경 메소드

console.log(k2);

//==============리터럴

//변수에 텍스트를 작은따옴표(''), 큰 따옴표(" ")로 감싸서 문자열을 생성하는 방식.

let animal1 = "나는 호랑이를 좋아합니다.";
let animal2 = '나는 사자를 좋아합니다.';

console.log(animal1);
console.log(animal2);

// 주의사항!! -> 작은따옴표와 큰따옴표를 연속적으로 사용할때 겹치지 않도록 주의

//--------특수문자를 사용시 백슬래쉬(\) 사용

let cat = '나는 \'고양이\' 를 좋아합니다';
console.log(cat); 

//문자열과 문자열의 결합은 + 를 사용하여 연결

let ani = '나는 \'호랑이\' 와 ';
let ani2 = '\'사자\' 를 좋아합니다.'

console.log(ani+ani2);
//============================================ 문자열의 길이 확인.
// .length
let str = 'abcde';
console.log(str.length);
str='큉콩'
console.log(str.length); //한글도 적용됨.

//.indexOf('찾는문자열') 문자열에서 찾는 문자열의 인덱스 반환

let j = 'abcde'
console.log(j.indexOf('d'));

//.slice(인덱스1,인덱스2 -1)

let yu = '조규완';
console.log(yu.slice(0,3));
console.log(yu.substring(0,3));

//=============================================연습문제

// let userPhone = prompt('연락처(형식:010-1111-2222)');
// let part = userPhone.split('-');
// console.log(part[0]+'-'+part[1]+'-'+'****');

//===============================================연습문제2

let userEmail = prompt('이메일(입력방식(js@naver.com))');

if(userEmail.indexOf('@')>0){
  console.log('좋습니다')
}else{
  console.log('다시입력하세요.');
}
