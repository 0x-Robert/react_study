"use strict";
// //const message : string  = 'hello world';
// //console.log(message);
// let count = 0; //숫자
// count +=1;
// //count = '갑자기 분위기 문자열';
// const message : string = 'heelo world'
// const done: boolean = true; //불리언 값
// const numbers: number[] = [1,2,3] //숫자 배열
// const messages: string[] = ['hello', 'world'] //문자열 배열
// //message.push(1) //숫자 넣으려고 하면 안됨..
// let mightBeUnderfined: string | undefined = undefined; //string일수도 있고 undefined일수도 있음
// let nullableNumber: number | null = null; //number일수도 있고 null일수도 있음
// let color: 'red' | 'orange' | 'yellow' = 'red'; //red, orange, yellow 중 하나임 
// color = 'yellow';
// //color = 'green'; 
// function sum(x: number, y: number): number {
//     return x + y; 
// }
// sum(1,2);
// function sumArray(numbers: number[]):number {
//     return numbers.reduce((acc, current)=> acc + current, 0);
// }
// const total = sumArray([1,2,3,4,5]);
// function returnNothing(): void {
//     console.log("i am just saying hello world");
// }
// interface Shape{
//     getArea(): number; //Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당함수의 반환값은 숫자입니다. 
// }
// class Circle implements Shape {
// //implements 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시하기
// //radius: number;//멤버 변수 radius 값을 설정함
// constructor( public radius: number){
//     this.radius = radius;
// }
// getArea(){
//     return this.radius * this.radius * Math.PI; 
// }
// }
// class Rectangle implements Shape {
//     constructor( private width: number, private height: number){
//         this.width = width;
//         this.height=height;
//     }
//     getArea(){
//         return this.width * this.height;
//     }
// }
// const circle = new Circle(5);
// const rectangle = new Rectangle(10,5);
// console.log("test",circle.radius);
// //console.log(rectangle.width);
// const shapes: Shape[] = [ new Circle(5), new Rectangle(10, 5)];
// shapes.forEach(shape => {
//     console.log(shape.getArea());
// })
// interface Developer extends Person {
//     skills: string[];
// }
// Interface의 Declaration Merging이 가장 큰 차이이다
// interface는 같은 이름으로 여러 번 선언을 해도 컴파일 시점에서 합쳐지기 때문에 확장성이 좋다. 따라서 일반적으로는 interface를 사용하고 union, tuple 등이 필요한 경우에만 type 별칭을 사용하라는 TypeScript Handbook의 내용은 현재에도 유효하다.
// declaration merging으로 확장할 수 있기 때문에, 외부에 노출해야 하는 public API에 사용되는 타입은 항상 interface를 사용하여 작성해야 한다.
// type 별칭으로 작성된 타입은 조금 더 제한적이기 때문에 private API같이 외부에 노출할 필요가 없는 경우에 사용하는 것이 좋다.
// React Component의 Props와 State의 타입을 기술하려면 어떤 것이 좋을까?
// interface와 type alias에 대해 알아보기 시작한 이유이다.
// 일반적으로는 interface를 사용해도 무리가 없다.
// React component를 사용하는데 declaration merging이나 implements는 필요 없다.
// interface는 union이 사용되었다면 extends 할 수 없기 때문에 해당 경우에는 type 별칭을 사용해서 타입을 기술해야 한다.
// interface Person {
//     name: string;
//     age?: number;  //물음표가 들어간 것은 설정을 해도되고, 안해도 되는 값이라는 것을 의미함 
// }
// type Developer = Person & {
//     skills: string[];
// };
// const person: Person={
//     name: '김사랑',
//     age:20
// };
// const expert: Developer={
//     name: '김개발',
//     skills: ['JavaScript','react']
// };
// //const people: Person[] = [person, expert];
// type People = Person[]; //Person[]을 이제 앞으로 People 이라는 타입으로 사용할 수 잇음
// const people: People = [person, expert];
// type Color = 'red' | 'orange' | 'yellow';
// const color: Color = 'red';
// const colors: Color[] = ['red','orange'];
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
