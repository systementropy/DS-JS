const isPalindrome = (s) => {
	const isAlphabet = (char) => {
		const code = char.charCodeAt(0);
		if(char && !isNaN(Number(char)) && char!==" " && (char > -1 && char < 10)){
			console.log("============>",char);
			return true
		}else if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
			return true
		}else{
			return false
		}
	}
	const charArr = s.split("");
	let L = 0;
	let R = charArr.length -1;
	let isValid = true
	while(L<R){
		console.log(charArr[L], charArr[R]);
		if(L === R){
			break;
		}else if(isAlphabet(charArr[L]) && isAlphabet(charArr[R])){
			if(charArr[L].toLowerCase()  === charArr[R].toLowerCase()){
				L++;
				R--;
			}else{
				L++;
				R--;
				isValid = false;
				break;
			}
		}else if(!isAlphabet(charArr[L])){
			// console.log("hrer");
			L++;
		}else if(!isAlphabet(charArr[R])){
			// console.log("hrer");
			R--;
		}
	}
	return isValid;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));