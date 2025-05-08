const inputarr = [1,2,3,4]
const sum = inputarr.reduce((agg, curr) => {
	return agg + curr
}, 0)

const onlyUnique = (arr) => {
	const tempMap = {}
	for (let index = 0; index < arr.length; index++) {
		if(!tempMap[arr[i]]){
			tempMap[arr[i]] = true
		}
	}
	let output = []
	for(let key in tempMap){
		output.push(key)
	}
	return output
}