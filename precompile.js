/*
预编译
js的运行主要为
    语法分析 -> 预编译 -> 解析运行

预编译有两个特点
    1、函数声明整体提升
    2/变量声明提升

    imply global 暗示全局变量

函数预编译的过程
1、创建AO对象（Activation object）
    AO{}
2、找形参和变量声明，将变量和形参名作为AO属性名，值为undefined
    AO{
        a：undefined
    }
3、将实参和形参相统一，即赋值
    AO{
        a：1
    }
4、找函数体里面的函数声明，作为AO属性名，值为函数体
    AO{
        a：function a（）{}
    }
*/ 

//例子

function test(a){
    console.log(a + " " + b + " " + c);
    var b = 10;
    c = 20;
    var c;
    a = 10;
    console.log(a + " " + b + " " + c);
    function a (){}
    c = 4;
    b = "str";
    console.log(a + " " + b + " " + c);
    function b (){}
    a = 5;
    console.log(a + " " + b + " " + c);
}

test(2);

/*
解析
1、AO{}
2、找形参和变量声明
AO{
    a: undrfined,
    b: undefined,
    c: undefined
}
3、将实参和形参相统一
AO{
    a: 2,
    b: undefined,
    c: undefined
}
4、找函数体里面的函数声明
AO{
    a: function a(){},
    b: function b(){},
    c: undefined
}

第一次打印结果为
function a(){} function b(){} undefined
往下执行
b = 10; c = 20; a = 10;

第二次打印
10 10 20
往下执行
c = 4; b = "str"

第三次打印
10 "str" 4

往下执行
a = 5;

第四次打印
5 "str" 4


*/


/*
全局预编译
1、创建GO对象（Activation object）
    GO{}
2、找变量声明，将变量名作为GO属性名，值为undefined
    GO{
        a：undefined
    }
3、找函数体里面的函数声明，作为GO属性名，值为函数体
    GO{
        a：function a（）{}
    }
*/ 