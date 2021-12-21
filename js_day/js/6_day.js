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

// 배열명(변수명).sort();  ->한글은 가나다순 영어는 abc순 정열 
var con =['d','a','b','c']
console.log(con.sort()) 

// 배열명(변수명).join('문자') => 배열의 모든원소를 '문자'로 연결

//배열명(변수명).pop() => 배열에 저장된 원소중에서 마지막 데이터 제거

//배열명(변수명).push(입력데이터) => 입력데이터를 배열에 저장된 원소의 마지막에 추가.

var u = ['d','b','c']
var t = u.push('감자');
console.log(t);//4 <= 배열안에  데이터의 갯수
console.log(u);//[d,b,c,감자]

//===================================================================12/21

//배열명(변수명).shift(); => 배열데이터중  첫번째 제거.

var op = ['a','b','c','d']
var uy = op.shift();
console.log(op); //[b,c,d]

//배열명(변수명).unshift(추가할 목록); => 배열의 첫번째에 입력데이터 추가

var dp = ['b','c','d']
dp.unshift('a');
console.log(dp)

//배열명(변수명).splice(index1,index2,데이타) => index1에 위치한 배열원소를 index2에적힌 개수만큼 제거하고 index1위치에 추가데이터 삽입.

//배열명(변수명).slice(1,2) 는 1부터 2-1까지의 원소를 반환 

var kk= ['a','b','c','d','e']

console.log(kk.slice(2,4))

//연습문제

function digitalTV (company,size,channel){
  this.company = company
  this.size = size
  this.channel = channel
  this.showDigitalTv = function(){
    console.log(this.company+'의 제품이며 크기는'+this.size+'입니다' )
  };

  this.upChannel = function(){
    this.channel++
    console.log('현재채널은'+this.channel+'입니다');
  };
  this.downChannel=function(){
    this.channel--
    console.log('현재채널은'+this.channel+'입니다');
  }
}

var aTV = new digitalTV('a회사',60,7);
var bTV = new digitalTV('b회사',45,7);

aTV.showDigitalTv();
aTV.upChannel();
