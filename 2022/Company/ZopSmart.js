// // //
// // <body>

// // </body>


// // <App>
// // 	<Comp />
// // 	<Comp />
// // 	<Comp />
// // </App>

// let state = Math.random(0,1)
// let confirmedState;


// const consumers = []

// const init = () => {
	
// }
// init()

// const checkChange = () => {
// 	if(confirmedState && confirmedState !== state){
// 		confirmedState = state
// 	}
// }

// const change = () => {
// 	const num = parseInt(Math.random(0, 100))
// 	if(num  % 2){
// 		state = num
// 	}
// }

// requestAnimationFrame(function(){
// 	// change()
// 	checkChange()
// 	requestAnimationFrame()
// })()

// // function render(state, elem){
// // 	if(elem.data === state){
// // 		return false
// // 	}else{
// // 		updateDom()
// // 	}
// // }

// // function renderAll(){
	
// // }


// // requestAnimationFrame(function(){
// // 	renderAll()
// // })


// multiply => (a) {
// 	return function(b){
// 		return a* b
// 	}
// }

// constmultiply(2)
// multiply(3)
let cache = {}
const multiply  = (...args) => {
	
	const res = 1
	
	if(cache[args.join("_")]){
		return cache(args.join("_"))
	}else{
		let key = ""
		args.forEach(element => {
			res *= element
			key.join(element+"_")
		});
		cache = {...cache, key: res}
	}
	return res
}
const result = multiply(62,34,42,32,43,562)
