const str = "ab2(cd)3(e)f";

const computeStr = (str) => {
	let opStack = []
	for (let i = 0; i < str.length; i++) {
		if(str[i] === ")"){
			let popStr = ""
			while(opStack.length> 0 || opStack.peek() === "("){
				popStr += opStack.pop()
			}
			const num = opStack.pop()
			opStack.push(popStr*num)
		}
	}
	let computedStr = ""
	for (let j = 0; j < opStack.length; j++) {
		computeStr += opStack[j]
	}
	return computeStr
}
console.log(computeStr(str))