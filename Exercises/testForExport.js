
// 有几种export方式,提供示例代码，包括常用的会报错的方式
// 1. 默认导出
export default function exampleDefaultExport() {
    console.log("This is a default export function.");
}
// 2. 命名导出
export function exampleNamedExport() {
    console.log("This is a named export function.");
}
// 3. 导出常量
export const exampleConstant = "This is a constant export.";
// 4. 导出类
export class ExampleClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
// 5. 导出对象
export const exampleObject = {
    key: "value",
    method() {
        console.log("This is a method in an exported object.");
    }
};
// 6. 导出函数表达式
export const exampleFunctionExpression = function() {
    console.log("This is a function expression export.");
}
// 7. 导出箭头函数
export const exampleArrowFunction = () => {
    console.log("This is an arrow function export.");
}   
// 8. 导出多个命名导出
export const anotherNamedExport = () => {
    console.log("This is another named export function.");
};
// 9. 导出时重命名
export { exampleNamedExport as renamedExport };
// 10. 导出时使用别名
export { exampleConstant as renamedConstant };
// 11. 导出时使用别名的类
export { ExampleClass as RenamedExampleClass };
// 12. 导出时使用别名的对象
export { exampleObject as renamedObject };
// 13. 导出时使用别名的函数表达式
export { exampleFunctionExpression as renamedFunctionExpression };
// 14. 导出时使用别名的箭头函数
export { exampleArrowFunction as renamedArrowFunction };
// 15. 导出时使用别名的另一个命名导出
export { anotherNamedExport as renamedAnotherNamedExport };
// 16. 导出时使用别名的默认导出
export { exampleDefaultExport as renamedDefaultExport };
// 17. 导出时使用别名的默认导出函数
export { exampleDefaultExport as renamedDefaultFunction };
// 18. 导出时使用别名的默认导出类
export { ExampleClass as RenamedDefaultClass };
// 19. 导出时使用别名的默认导出对象
export { exampleObject as renamedDefaultObject };
// 20. 导出时使用别名的默认导出函数表达式
export { exampleFunctionExpression as renamedDefaultFunctionExpression };
// 21. 导出时使用别名的默认导出箭头函数
export { exampleArrowFunction as renamedDefaultArrowFunction };
// 22. 导出时使用别名的默认导出另一个命名导出
export { anotherNamedExport as renamedDefaultAnotherNamedExport };
// 23. 导出时使用别名的默认导出常量
export { exampleConstant as renamedDefaultConstant };
// 24. 导出时使用别名的默认导出常量对象
export { exampleObject as renamedDefaultConstantObject };
// 25. 导出时使用别名的默认导出常量函数
export { exampleFunctionExpression as renamedDefaultConstantFunction };
// 26. 导出时使用别名的默认导出常量箭头函数
export { exampleArrowFunction as renamedDefaultConstantArrowFunction };
// 27. 导出时使用别名的默认导出常量另一个命名导出
export { anotherNamedExport as renamedDefaultConstantAnotherNamedExport };
// 28. 导出时使用别名的默认导出常量另一个命名导出函数
export { exampleNamedExport as renamedDefaultConstantAnotherNamedExportFunction };