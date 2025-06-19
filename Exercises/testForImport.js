// 有几种import方式,提供示例代码，包括常用的会报错的方式,结合testForExport.js的导出
import { a, b, c } from './testForExport.js'; // 正确导入方式
import * as allExports from './testForExport.js'; // 导入所有导出内容
import defaultExport from './testForExport.js'; // 导入默认导出
// 注意：以下导入方式会报错，因为testForExport.js没有默认导出
// import { d } from './testForExport.js'; // 错误：没有名为'd'的导出
// import { a, b, c, d } from './testForExport.js'; // 错误：没有名为'd'的导出 
// import defaultExport, { a, b, c } from './testForExport.js'; // 错误：不能同时导入默认导出和命名导出
// 注意：以下导入方式会报错，因为testForExport.js没有默认导出
// import * as allExports, defaultExport from './testForExport.js'; // 错误：不能同时使用命名空间导入和默认导入
console.log(a); // 输出: 1
console.log(b); // 输出: 2  
console.log(c); // 输出: 3
console.log(allExports); // 输出: { a: 1, b: 2, c: 3, default: [Function: exampleDefaultExport], ... }
console.log(defaultExport); // 输出: [Function: exampleDefaultExport]
defaultExport(); // 调用默认导出函数
// 调用命名导出函数
import { exampleNamedExport } from './testForExport.js';
exampleNamedExport(); // 输出: This is a named export function.
// 调用导出常量
import { exampleConstant } from './testForExport.js';
console.log(exampleConstant); // 输出: This is a constant export.
// 调用导出类
import { ExampleClass } from './testForExport.js';
const exampleInstance = new ExampleClass('Test Class');
exampleInstance.greet(); // 输出: Hello, my name is Test Class.
// 调用导出对象的方法
import { exampleObject } from './testForExport.js';
exampleObject.method(); // 输出: This is a method in an exported object.
// 调用导出函数表达式
import { exampleFunctionExpression } from './testForExport.js';
exampleFunctionExpression(); // 输出: This is a function expression export.
// 调用导出箭头函数
import { exampleArrowFunction } from './testForExport.js';
exampleArrowFunction(); // 输出: This is an arrow function export.
// 调用另一个命名导出
import { anotherNamedExport } from './testForExport.js';
anotherNamedExport(); // 输出: This is another named export function.
// 调用重命名的导出
import { renamedExport } from './testForExport.js';
renamedExport(); // 输出: This is a named export function.
// 调用重命名的常量
import { renamedConstant } from './testForExport.js';
console.log(renamedConstant); // 输出: This is a constant export.
// 调用重命名的类
import { RenamedExampleClass } from './testForExport.js';
const renamedInstance = new RenamedExampleClass('Renamed Class');
renamedInstance.greet(); // 输出: Hello, my name is Renamed Class.
// 调用重命名的对象的方法
import { renamedObject } from './testForExport.js';
renamedObject.method(); // 输出: This is a method in an exported object.
// 调用重命名的函数表达式
import { renamedFunctionExpression } from './testForExport.js';
renamedFunctionExpression(); // 输出: This is a function expression export.
// 调用重命名的箭头函数
import { renamedArrowFunction } from './testForExport.js';
renamedArrowFunction(); // 输出: This is an arrow function export.
// 导出的哪些值可以直接修改赋值
// 注意：导出的常量和对象是不可变的，不能直接修改
// 但是可以修改对象的属性
import { exampleObject } from './testForExport.js';
exampleObject.key = 'new value'; // 修改对象的属性是允许的
console.log(exampleObject.key); // 输出: new value
// 但是不能重新赋值整个对象
// exampleObject = { newKey: 'new value' }; // 错误：不能重新赋值常量对象
// 导出的函数和类是可以被调用的
import { ExampleClass } from './testForExport.js';
const exampleInstance = new ExampleClass('Test Class');
exampleInstance.greet(); // 输出: Hello, my name is Test Class.
// 导出的函数表达式和箭头函数是可以被调用的
import { exampleFunctionExpression, exampleArrowFunction } from './testForExport.js';
exampleFunctionExpression(); // 输出: This is a function expression export.
exampleArrowFunction(); // 输出: This is an arrow function export.
// 导出的常量是不可变的，不能重新赋值
// import { exampleConstant } from './testForExport.js';
// exampleConstant = 'new value'; // 错误：不能重新赋值常量
// console.log(exampleConstant); // 输出: This is a constant export.    
// 导出的对象的属性可以被修改，但不能重新赋值整个对象
// import { exampleObject } from './testForExport.js';
// exampleObject = { newKey: 'new value' }; // 错误：不能重新赋值常量对象
// exampleObject.key = 'new value'; // 修改对象的属性是允许的
// console.log(exampleObject.key); // 输出: new value   
// 导出的类可以被实例化
// import { ExampleClass } from './testForExport.js';
// const exampleInstance = new ExampleClass('Test Class');
// exampleInstance.greet(); // 输出: Hello, my name is Test Class.
// 导出的函数可以被调用
// import { exampleNamedExport } from './testForExport.js';
// exampleNamedExport(); // 输出: This is a named export function.
// 导出的函数表达式和箭头函数可以被调用
// import { exampleFunctionExpression, exampleArrowFunction } from './testForExport.js';
// exampleFunctionExpression(); // 输出: This is a function expression export.
// exampleArrowFunction(); // 输出: This is an arrow function export.
// 导出的常量可以被访问，但不能被修改
// import { exampleConstant } from './testForExport.js';
// console.log(exampleConstant); // 输出: This is a constant export.
// // 导出的对象的属性可以被修改，但不能重新赋值整个对象
// import { exampleObject } from './testForExport.js';
// exampleObject.key = 'new value'; // 修改对象的属性是允许的
// console.log(exampleObject.key); // 输出: new value
// // 导出的类可以被实例化
// import { ExampleClass } from './testForExport.js';   
// const exampleInstance = new ExampleClass('Test Class');
// exampleInstance.greet(); // 输出: Hello, my name is Test Class.
// // 导出的函数可以被调用
// import { exampleNamedExport } from './testForExport.js';
// exampleNamedExport(); // 输出: This is a named export function.
// // 导出的函数表达式和箭头函数可以被调用
// import { exampleFunctionExpression, exampleArrowFunction } from './testForExport.js';
// exampleFunctionExpression(); // 输出: This is a function expression export.
// exampleArrowFunction(); // 输出: This is an arrow function export.
// // 导出的常量可以被访问，但不能被修改
// import { exampleConstant } from './testForExport.js';    
// console.log(exampleConstant); // 输出: This is a constant export.
// // 导出的对象的属性可以被修改，但不能重新赋值整个对象
// import { exampleObject } from './testForExport.js';
// exampleObject.key = 'new value'; // 修改对象的属性是允许的
// console.log(exampleObject.key); // 输出: new value
// // 导出的类可以被实例化
// import { ExampleClass } from './testForExport.js';
// const exampleInstance = new ExampleClass('Test Class');