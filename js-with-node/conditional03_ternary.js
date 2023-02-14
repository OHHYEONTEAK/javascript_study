
// if문 vs 삼항연산자 비교

  // 1-1. if문
  let array=[];
  // let array=[2,2,2,2,2,2]; 
  let text="";
  if(array.length===0){ 
      // if(array.length=0){  
      // =0은 대입연산자로 if(0){ 와 같고  false로 판단되는 상황중에 하나이다.
      // 참고: false로 판단하는 종류 - https://developer.mozilla.org/ko/docs/Glossary/Falsy
    text ="array 배열은 빈상태!"}
    else{text="array 배열안에 요소들이 존재!"}

    console.log(text)

  // 1-2. 삼항연산자 (조건식: 연산공식)
  let array2=[1,1,1,1];
  let text2 = array2.length===0?"array 배열은 빈상태!":"array 배열안에 요소들이 존재!"
  console.log(text2);

  // 2-1. 삼항연산자 (조건식: 매개변수)
 function trueOrFalse(isMember){
  return (isMember?'참':'거짓');
 }

 // trueOrFalse함수호출구문 + isMember라는 parameter매개변수 저장공간에 true데이터를 넣음: trueOrFalse(true) 
 console.log(trueOrFalse(true));

 console.log(trueOrFalse(false)); // false 
 console.log(trueOrFalse(0)); // false
 console.log(trueOrFalse(-0));
 console.log(trueOrFalse(""));
 console.log(trueOrFalse(null));
 

  
 

