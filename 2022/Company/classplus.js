function call(){
    var a=b=10;
    }
call();
console.log(b);
console.log(a);
var b=15;
function foo(){
    var b=5;

    function baz (){
        console.log(b)
    }
    exec(baz);
}

function exec(func){
    var b=10;
    func();
}
foo();


// const throttle = (fn, delay) => {
// 	let throttleFlag = true
// 	return function(){
// 		if(throttleFlag){
// 			throttleFlag = false
// 			fn()
// 			setTimeout(()=>{
// 				throttleFlag = true
// 			}, delay)
// 		}
		
// 	}
	
// }
// var name = "Classplus";
// var myObject = {
// 	name: "myObject",
//   	property: this.name,       
// 	regularFunction: function() {
// 		return this.name  
// 	},
// 	arrowFunction: () => {
// 		return this.name; 
// 	},
// 	iife: (function() {
// 		return this.name  
// 	})()
// }

//this.name => Classplus
// myObject.name => "myObject"
// myObject.property => "myObject"
// myObject.iife => Classplus
// const regFn = myObject.regularFunction; 
// regFn.call(myObject) => "myObject" 
// regFn()  => "Classplus" 
//  regFn.call(window) => "Classplus" 
// myObject.arrowFunction.call(myObject) => "myObject"
// myObject.arrowFunction() => "Classplus"
const cal = (a) => {
	this.result = a
	this.add = (val) => {
		this.result += val
		return this
	},
	this.sub = (val) => {
		this.result -= val
		return this
	},
	this.mul = (val) => {
		this.result *= val
		return this
	},
	this.val = () => {
		return this.result
	}
	return this
}

console.log(cal(1).add(2).sub(1).mul(3).val());

//ServiceWorker
//preloading , prefetching
//Mixed content error

//

Function.prototype.customBind = (context, ...agrs) => {
	let callee = this,
	params = agrs
	return function(...args2){
		this.apply(callee, [...params, ...args2])
	}
}
