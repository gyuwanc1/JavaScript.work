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