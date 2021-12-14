// 5_day

let multiplier = (x , y) => {
  let result;
  result = x * y

  return result;

}

let result = multiplier(5,11);
console.log(result);

console.clear();

//======================================

let myIntro = ( name,age ) => {
  console.log('내이름은'+name+'입니다');
  console.log('내 나이는' +age+'입니다');
}

myIntro('홍길동','12세')

console.clear();
//===================================

let BigNumber = ( num1, num2) => {
  let num3;
  if(num1 >  num2){
    num3=num1;
  }else {
    num3=num2;
  }
  return num3;
}

let big;
big = BigNumber(123,352); 
console.log('큰수'+ big);

let a,b;
a=200
b=100
big =BigNumber(a,b)
console.log('큰수'+big);

console.clear();
//---------------------------------------

let printStar = (number) => {
  if (number<1){
    console.log('잘못입력');
    return
  }
  let i;
  for(i=1;i<=number;i++)
  console.log('*');
}

printStar(-1);
printStar(1);

console.clear();
//===========================================


// let multiple = (a,b)=>{

//   if (a <= 0 || b <= 0){
//     console.log('양수입력')
//     return
//   }
//   if (a % b ===0){
//     console.log('a는 b의 배수입니다.')
//   }else {
//     console.log('a는 b의 배수가 아닙니다')
//   }  
// }

// let a=-10 
// let b=2
// multiple(a,b); //결과값이  '양수입력'이 나와야한다.

//============================================
var starX =1;
function prinstStar(num){
  for(starX=1; starX <= num; starX++){
    printStarX(starX);
  }
}

function printStarX(num){
  var starX;
  for(starX;starX <= num;starX++){
    console.log('*')
  }
}
printStar(3);

