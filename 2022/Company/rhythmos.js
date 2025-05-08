// const p = new Promise()

// const f1  = () => {
// 	return new Promise((resolve,reject) => {resolve(1)})
// }
// const f2  = () => {
// 	return new Promise((resolve,reject) => {reject(2)})
// }
// const f3  = () => {
// 	return new Promise((resolve,reject) => {resolve(3)})
// }

// const promiseAll = (arrPromises) => {
// 	let countResponses = 0
// 	let responseArr = new Array(arrPromises.length -1)
// 	const handleResponse = (resp, type, i) => {
// 		countResponses += 1;
// 		responseArr[i] = {resp: resp, type: type}
// 		if(countResponses === arrPromises.length){
// 			arrPromises.forEach((promise, i) => {
// 				if(responseArr[i].type === "res"){
// 					promise.resolve(responseArr[i].resp)
// 				}else{
// 					promise.reject(responseArr[i].resp)
// 				}
// 			});
// 		}
// 	}
// 	arrPromises.forEach((promise, i) => {
// 		let response = promise((resolve,reject)).then(resp => handleResponse(resp,"res" , i)).catch(err => handleResponse(err, "rej", i))
// 	});
// }


// function foo(a){
// 	var count = 100
// 	function bar(){
// 		console.log(count*a)
// 	}
// 	return bar()
// }
// const ex1 = foo(2)
// const ex2 = foo(3)
// console.log(ex1, ex2)


const arrIp = [{p:1},{p:2},{p:1, o:"o1"},{p:2, o:"o2"},{p:1, o:"o3"}]
const findOutletCount = (arr) => {
	let mapArrayByProperty = {}
	arr.forEach((item,i) => {
		console.log(`p:${item.p}`)
		if(!mapArrayByProperty[`p:${item.p}`]){
			item.o? mapArrayByProperty[`p:${item.p}`] = 1 : null
		}else{
			item.o? mapArrayByProperty[`p:${item.p}`] += 1 : null
		}
	})
	return mapArrayByProperty
}	
console.log(findOutletCount(arrIp))