// 비동기에 대하여

// 예제1

console.log(1);
// console.log(2);
setTimeout(()=>{console.log(2);}, 3000); // 1000은 1초 , 즉 여기서는 3초대기후 앞의 함수실행
console.log(3);