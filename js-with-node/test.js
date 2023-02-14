// Node.js를 활용하면 자바스크립트의 console.log를 terminal창에서 바로 출력할수있다.
// 즉, 기존에는 javascript 출력을위해 html파일을 생성하고 연결한후 브라우저 개발자도구 콘솔탭에서 확인하는 
// 번거로운 절차가 간소화 된다.

// 이 폴더안의 자바스크립트 부터는 Node.js를 통한 개발환경을 구축하여 js 연습을 진행한다. 
// node.js 다운로드 링크: https://nodejs.org/ko/download/
// node.js다운 이후 Terminal을 열어 'node js파일명' 을(확장자명빼고) 입력하면 console을 출력해 볼수 있다. 

let num = 123;
console.log(num)

// node.js 다운받은 이후부터 
// js코드s는 Terminal을 열어 'node js파일명' 을(확장자명빼고) 입력하면 console을 출력해 볼수 있다. 

// 구체적인 방법 순서
// 1) 터미널을 연다. ( 상단 terminal 메뉴 또는 단축키 ctrl Shift `)
// 2) 터미널 경로는 js파일이 들어있는 상단의 폴더까지 들어간다. 
//   여기서는 현재 터미널 경로가 tt_js-workspace 폴더이면, js-with-node 폴더로 한번 더 들어가야한다. 
//   참고할 경료이동 명령어 2개 - 하위폴더로 이동할때 : cd 하위폴더명  , 상위폴더로 뒤로가기 할때: cd .. 
//   그러므로, 여기서는 cd js-with-node 를 입력하여 js 파일이 들어있는 경로로 이동후
//   node test 를 입력하면 js파일이 실행되고 console 결과를 터미널에서 확인 가능하다. 