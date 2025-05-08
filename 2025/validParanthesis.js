const isValidParanthesis = (s) => {
	const charArr = s.split("");
	const validClose = {
		')':'(',
		'}':'{',
		']':'['
	}
	let validStack = [];
	let noMissingClose = true
	charArr.forEach(element => {
		if(element === '(' || element === '{' || element === '['){
			validStack.push(element)
		}else{
			const popelt = validStack.pop();
			if(validClose[element] !== popelt){
				noMissingClose = false;
			}
		}
	});
	return validStack.length === 0 && noMissingClose ? true : false  
}
console.log(isValidParanthesis("()"))
console.log(isValidParanthesis("()[]{}"))
console.log(isValidParanthesis("(]"))
console.log(isValidParanthesis("([])"))