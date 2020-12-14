function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

/* 
首先我们弄懂上面代码的运行流程：首先var results = count();之后，函数count已经被调用了，
所以一次执行函数内的各段代码：var arr = [];，for (var i=1; i<=3; i++)，
这个for循环尤其值得注意。因为此时循环体执行了push方法，
将一个个函数function () { return i * i;}添加到数组内，但是这个函数并没有被调用，还只是一个变量，
所以for循环依次执行，直到i = 4。因为闭包，内部函数function () { return i * i;}引用的i就是外部变量，
for循环中的i = 4。所以，之后数组arr内的函数的i都是4。
​ 调用函数count后，变量results已经是数组arr了。
数组里面元素依次是function f1() { return i * i;} function f2() { return i * i;} function f3() { return i * i;}。
但是三个函数都没有被调用，直到var f1 = results[0];，此时function f1() { return i * i;}开始执行，如上段所写，此时的i = 4，
所以，返回值就是16了。后面两个调用也是类似情况
*/

function count(){
	var arr = [];
	for(var i=1;i<=3;i++){
		arr.push((function(n){
			return function(){
				return n*n;
			}
		})(i));
	}
	return arr;
}




var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];


console.log(f1()); //16
console.log(f2()); //16
console.log(f3());  

