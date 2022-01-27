// 이벤트 배우기

//1 마우스 이벤트

function overBox(obj){
  obj.style.backgroundColor="#00BAEF";
} //마우스가 가면 색변환

function downBox(obj){
  obj.style.backgroundColor="#88184D";
}//마우스 왼쪽버튼을 누르면 색변환

function upBox(obj){
  obj.style.backgroundColor="#fdd";
}//마우스 왼쪽버튼을 때면 색 변환

function outBox(obj){
  obj.style.backgroundColor="#171717";
}//마우스가 해당영역을 나가면 색변환

//2 마우스 이벤트

function clickBox(obj){
  obj.style.backgroundColor='lightgreen';
}//마우스로 한번클릭

function dblclickBox(obj){
  obj.style.backgroundColor='lightblue';
}//마우스로 두번클릭

//3. 키보드이벤트-1

function downinput(){
  console.log('keydown')  
}

function upinput() {
  console.log('keyup')
}

function pressinput() {
  console.log('keypress')
}