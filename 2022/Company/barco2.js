const str1 = "aaabc"

const formatString = (str) => {
	let opString = str.split('')
	let i =0, j = opString.length-1;
	while(i<=j){
		if(opString[i] === opString[i+1]){
			let temp = opString[j]
			opString[j] = opString[i]
			opString[i+1] = temp
			i++
			j--
		}else{
			i++
		}
	}
	// console.log(opString)
	return opString.join()
}
console.log(formatString(str1))


const str = "swiss"
const uniqueStr = (str) => {
	let mapStr = {}
	for(let i = 0; i< str.length; i++){
		if(mapStr[str[i]] && mapStr[str[i]]!=="-9999"){
			mapStr[str[i]] = "-9999"	
		}else{
			mapStr[str[i]] = true
		}
		// console.log(mapStr);
		// mapStr[str[i]] = true
	}
	let opStr = ""
	// console.log(mapStr)
	for(let key in mapStr){
		// console.log(key)	
		if(mapStr[key] === true){opStr += key}
	}
	// console.log("HERE"+opStr)
	return opStr
}
let op = uniqueStr(str)
console.log(op);


// lazy loading
	// sqs +> 

// real time
	// query is late
	//	indexing => 

	// diff btw read and write
	//	master + slave

	// sharding

	// clustering
	
	 
