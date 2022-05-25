function sum(a){
	return function(...b){
		if(b.length>0){
			let bSum = b.reduce((curr,acc) => {
				return acc = acc + curr
			}, 0)
			
			return sum(a+bSum)
		}else{
			return a
		}
	}
}


const sum2 = a => b => b?sum2(a+b):a


console.log(sum(1)(2)(3)(4,5)())
console.log(sum2(1)(2)(3)(4)())