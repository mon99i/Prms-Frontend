/*
자바스크립트 함수의 특징
1. 함수의 실제 매개변수가 될 수 있다.
2. 함수의 반환값이 될 수 있다.
3. 할당 명령문의 대상이 될 수 있다.
4. 동일 비교의 대상이 될 수 있다.
*/

// 1. 함수의 실제 매개변수가 될 수 있다.
function foo1(arg) {
    arg();
}

function bar1() {
    console.log('bar');
}

foo1(bar1);

// 2. 함수의 반환값이 될 수 있다.
function foo2(arg) {
    return arg;
}

function bar2() {
    console.log('bar');
}

foo2(bar2)();

// 3. 할당 명령문의 대상이 될 수 있다.
// 4. 동일 비교의 대상이 될 수 있다.
const foo3 = function(arg) {
    return arg;
}
console.log(foo3(1));

/*
1. 기본값 매개변수
2. 나머지 매개변수
3. arguments 객체
*/

// 1. 기본값 매개변수
function foo4(arg=2) {
    console.log(arg);
}
foo4();

// 2. 나머지 매개변수
function foo5(arg, ...rest) {
    console.log(rest);
}

foo5(1, 2, 3, 4);

// 3. arguments 객체
function foo6(arg) {
    console.log(arguments);
}

foo6(1, 2, 3);

/*
1. 함수 선언문
2. 함수 표현식
3. Function 생성자 함수
4. 화살표 함수 표현식
*/

// 익명 함수
const foo = function () {
    console.log('foo');
}

foo();

// 생성자 함수
const foo10 = new Function("console.log('foo10')");
foo10();

//화살표 함수 표현식
const foo11 = () => {
    console.log('foo11');
};
foo11();

// IIFE (즉시 실행 함수)
(function foo0() {
    console.log('foo0');
})();

// 재귀함수
function foo00(arg) {
    if(arg == 3) return;
    console.log(arg);
    foo00(arg+1);
}
foo00(0);

// 중첩함수
function foo000(arg) {
    function bar() {
        console.log(arg);
    }
    bar();
}

foo000(1);

// 콜백함수
function call(arg) {
    arg();
}

call(()=> {
    console.log('call');
});

