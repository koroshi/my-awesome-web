// 给一些poptype变化和hasown变化的例子
const obj = {
    name: 'Alice',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// 检查对象是否有特定的属性
console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('age')); // true
console.log(obj.hasOwnProperty('greet')); // true
console.log(obj.hasOwnProperty('address')); // false
// 检查对象是否有继承的属性
console.log('toString' in obj); // true，toString是继承自Object.prototype的方法
console.log(obj.hasOwnProperty('toString')); // false，toString是继承的属性 
console.log(obj.hasOwnProperty('hasOwnProperty')); // false，hasOwnProperty是继承的属性
// 检查对象是否有自定义属性
console.log(obj.hasOwnProperty('name')); // true，自定义属性
console.log(obj.hasOwnProperty('age')); // true，自定义属性
console.log(obj.hasOwnProperty('greet')); // true，自定义方法
// 检查对象是否有原型链上的属性
console.log('constructor' in obj); // true，constructor是继承自Object.prototype的
console.log(obj.hasOwnProperty('constructor')); // false，constructor是继承的属性
// 检查对象是否有原型链上的方法
console.log('toString' in obj); // true，toString是继承自Object.prototype的方法
console.log(obj.hasOwnProperty('toString')); // false，toString是继承的
// 检查对象是否有原型链上的方法
console.log('valueOf' in obj); // true，valueOf是继承自Object
// 检查对象是否有原型链上的方法
console.log(obj.hasOwnProperty('valueOf')); // false，valueOf是继承的属性
// 检查对象是否有原型链上的方法
console.log('hasOwnProperty' in obj); // true，hasOwnProperty是继承自Object.prototype的方法
console.log(obj.hasOwnProperty('hasOwnProperty')); // false，hasOwnProperty是继
// 检查对象是否有原型链上的方法
console.log('isPrototypeOf' in obj); // true，isPrototypeOf是继承
console.log(obj.hasOwnProperty('isPrototypeOf')); // false，isPrototypeOf是继承的属性
// 检查对象是否有原型链上的方法
console.log('propertyIsEnumerable' in obj); // true，propertyIsEnumerable是继承
console.log(obj.hasOwnProperty('propertyIsEnumerable')); // false，propertyIsEnumerable是继承的属性
//设置__proto__属性之后的例子
const proto = {
    greet: function() {
        console.log(`Hello from prototype, my name is ${this.name}`);
    }
};
const objWithProto = Object.create(proto);
objWithProto.name = 'Bob';
objWithProto.age = 25;
// 检查对象是否有继承的属性
console.log(objWithProto.hasOwnProperty('name')); // true，自定义属性
console.log(objWithProto.hasOwnProperty('age')); // true，自定义属性
console.log(objWithProto.hasOwnProperty('greet')); // false，greet是继承的属性
console.log('greet' in objWithProto); // true，greet是继承的属性
// 调用继承的方法
objWithProto.greet(); // Hello from prototype, my name is Bob
// 检查对象的原型链
console.log(objWithProto.__proto__ === proto); // true，objWithProto的原型链指向proto
// 检查原型链上的属性
console.log(proto.hasOwnProperty('greet')); // true，greet是proto的自定义方法
console.log(proto.hasOwnProperty('name')); // false，name不是proto的自定义属性
console.log(proto.hasOwnProperty('age')); // false，age不是proto的自定义属性
// 检查原型链上的方法
console.log(proto.hasOwnProperty('toString')); // false，toString是继承的属性
console.log(proto.hasOwnProperty('hasOwnProperty')); // false，hasOwnProperty是继承的属性
// 检查原型链上的方法
console.log(proto.hasOwnProperty('valueOf')); // false，valueOf是继承的
// 检查原型链上的方法
console.log(proto.hasOwnProperty('isPrototypeOf')); // false，isPrototypeOf是继
// 检查原型链上的方法
console.log(proto.hasOwnProperty('propertyIsEnumerable')); // false，propertyIsEnumerable是继
// 检查原型链上的方法
console.log(proto.hasOwnProperty('constructor')); // false，constructor是继承的属性
// 检查原型链上的方法
console.log(proto.hasOwnProperty('__proto__')); // false，__proto__是继承的属性
// 检查原型链上的方法
console.log(proto.hasOwnProperty('toLocaleString')); // false，toLocaleString是继
// 检查原型链上的方法
console.log(proto.hasOwnProperty('hasOwnProperty')); // false，hasOwnProperty是继
//使用__proto__属性的例子赋值的例子
const anotherProto = {
    sayHello: function() {
        console.log(`Hello from another prototype, my name is ${this.name}`);
    }
};
const anotherObj = {
    name: 'Charlie',
    age: 28
};
anotherObj.__proto__ = anotherProto;
// 检查对象是否有继承的属性
console.log(anotherObj.hasOwnProperty('name')); // true，自定义属性
console.log(anotherObj.hasOwnProperty('age')); // true，自定义属性
console.log(anotherObj.hasOwnProperty('sayHello')); // false，sayHello是继承的属性
console.log('sayHello' in anotherObj); // true，sayHello是继承的属性
// 调用继承的方法
anotherObj.sayHello(); // Hello from another prototype, my name is Charlie  