
let today = new Date(); 


console.log(today)


let hours = today.getHours(); // 시
let minutes = today.getMinutes();  // 분
let seconds = today.getSeconds();  // 초


console.log(hours)
console.log(minutes)
console.log(seconds)

// 브라우저화면 html 로 출력 
document.write(today.toLocaleDateString() + '<br>'); // 2022. 12. 3.
document.write(today.toLocaleTimeString() + '<br>'); // 오후 12:04:55
document.write(today.toLocaleString() + '<br><br>'); // 2022. 12. 3. 오후 12:05:00
document.write(today.toLocaleDateString('en-US'));  //  12/3/2022  --> 월, 일 , 연도