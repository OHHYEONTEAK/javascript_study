// 1. 리터럴  literal
console.log('hello');
console.log("hello");
console.log("hello")

console.log("2022-12-03")  // 문자
console.log(2022-12-03)    // 숫자 , 뺄셈

// 2. 변수 
// 변수 종류 : var, let , const 

var num = 123
var greeting = 'hi'

console.log(num)
console.log(greeting)

var x =2
var y ='2'

console.log(x+x)
console.log(y+y)



// 3. javascript 이스케이프 시퀀스 ( \ 역슬래시를 활용한 특수문자표현 )

console.log('it\'s a book')
console.log("it's a book")
console.log("New York is called \"The Big Apple\".")
console.log('hello\nworld')


// 4. 변수 3가지 종류 비교 ( var let const )
// Block Scope 지역범위{ } VS Global Scope 전역범위


// 4-1. var
// var : 과거에 사용, 현재는 let, const 권함
// var hoisting ( move declaration from bottom to top )

 { age = 10
   var age }
  console.log(age) 

  // 4-2. let  
  let globalName ='global'  // let을 {}밖에서 변수선언을 할 경우 {} 안과 밖 모두에서 출력가능! 
  {
    console.log(globalName);
     
    // Block Scope 지역범위{ }
    let name ='ana';   // 변수 선언과 동시에 데이터를 할당=정의 함
    console.log(name)  
    
    // let name ='lisa';  오류발생 
    // let을 붙이게되면 새로운 변수를 생성하는 것인데, let은 변수명 중복을 허용하지 않는다
      
        name ='lisa';
        console.log(name)  

        name='nick';
        console.log(name)  

  }

  console.log(globalName);

  // console.log(name);   출력안되는 현상발생!! 
  //  let은 {} 안에 변수선언 (예: let name ) 하면 --> { } 범위scope 안에서만 출력 가능! 
  //  즉, {} 밖에서 출력시 오류발생 



  // 4-3 const 상수 ( constants )

  const daysInWeek = 7;
  console.log('일주일은 몇일인가? 답: ' + daysInWeek + '일') 
  console.log(`일주일은 몇일인가? 답: ${daysInWeek}일`)   // 주의: 역따옴표 (tab 키위 물결표시 ~)
  
  price = 6000;   // 콘솔창 확인시 오류 
    console.log(price)  // 오류이유: const name = 5000으로 정의를 이미 했고, const성격상 재정의 불가 (let과 차이점)