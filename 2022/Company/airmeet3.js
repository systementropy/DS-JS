// add(1)(2)(3)

const add = (...a) => {
	// console.log(a);
	let aSum = 0
	aSum = a.reduce((prev,curr)=>{return curr += prev},0)
	console.log("a:"+a);
	console.log(arguments.length);
	return function(...b){
		console.log(arguments.length);
		console.log("b:"+b);
		if(b && b.length> 0){
			let bSum = 0
			bSum = b.reduce((prev,curr)=>{return curr += prev},0)
			return add(aSum+bSum)
		}else{
			return aSum
		}
	}
}

console.log(add(1)(2)(3)(4))
// console.log(add(1)())

// console.log(add(2)(3)(4)())
// console.log(add(4,3,8)())
// console.log(add(4)(3,4)())
// console.log(add(4,3)(1)())



// Optimise rendering of components Event
// 	U1...5000

// Host
// Presentor
// Presentation
// Myself

// Others

