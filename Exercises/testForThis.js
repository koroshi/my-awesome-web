// 打印this
console.log(this,'golbal'); // 在浏览器中，this指向window对象
class MyClass {
    constructor() {
        this.value = 42;
    }

    printThis() {
        console.log(this); // 在类方法中，this指向当前实例
    }
}

function testThis() {
    console.log(this); // 在函数中，this指向全局对象（在浏览器中是window）
}
const myInstance = new MyClass();
myInstance.printThis(); // 调用类方法，this指向myInstance
testThis(); // 调用函数，this指向全局对象
const myObject = {
    name: 'Test Object',
    showThis: function() {
        console.log(this); // 在对象方法中，this指向myObject
    }
};
myObject.showThis(); // 调用对象方法，this指向myObject
// 使用箭头函数，this指向外部作用域
const myArrowFunction = () => {
    console.log(this); // 在箭头函数中，this指向外部作用域（在浏览器中是window）
}
myArrowFunction(); // 调用箭头函数，this指向外部作用域
// 使用bind方法改变this指向
const boundFunction = myObject.showThis.bind(myInstance);
boundFunction(); // 调用绑定后的函数，this指向myInstance
// 使用call方法改变this指向
myObject.showThis.call(myInstance); // 调用call方法，this指向myInstance
// 使用apply方法改变this指向
myObject.showThis.apply(myInstance); // 调用apply方法，this指向myInstance
// 使用call方法直接调用函数
function showThis() {
    console.log(this); // 在函数中，this指向全局对象（在浏览器中是window）
}
showThis.call(myInstance); // 调用call方法，this指向myInstance
// 使用apply方法直接调用函数
function showThisApply() {
    console.log(this); // 在函数中，this指向全局对象（在浏览器中是window）
}
showThisApply.apply(myInstance); // 调用apply方法，this指向myInstance
// 使用bind方法直接调用函数
const boundShowThis = showThis.bind(myInstance);
boundShowThis(); // 调用绑定后的函数，this指向myInstance
// 使用箭头函数直接调用
const arrowShowThis = () => {
    console.log(this); // 在箭头函数中，this指向外部作用域（在浏览器中是window）
}   
arrowShowThis(); // 调用箭头函数，this指向外部作用域
// 使用箭头函数作为对象方法
const myArrowObject = {
    name: 'Arrow Object',
    showThis: () => {
        console.log(this); // 在箭头函数中，this指向外部作用域（在浏览器中是window）
    }
};
myArrowObject.showThis(); // 调用箭头函数作为对象方法，this指向外部作用域
// 使用箭头函数作为类方法
class ArrowClass {
    constructor() {
        this.value = 'Arrow Class';
    }

    showThis = () => {
        console.log(this); // 在箭头函数中，this指向当前实例
    }
}   
const arrowInstance = new ArrowClass();
arrowInstance.showThis(); // 调用箭头函数作为类方法，this指向arrowInstance
// 使用箭头函数作为回调
const myCallback = () => {
    console.log(this); // 在箭头函数中，this指向外部作用域（在浏览器中是window）
}
setTimeout(myCallback, 1000); // 调用箭头函数作为回调，this指向外部作用域
// 使用bind方法作为回调 
const myBoundCallback = myObject.showThis.bind(myInstance);
setTimeout(myBoundCallback, 1000); // 调用绑定后的函数作为回调，this指向myInstance
// 使用call方法作为回调
setTimeout(function() {
    myObject.showThis.call(myInstance); // 调用call方法作为回调，this指向myInstance
}, 1000);