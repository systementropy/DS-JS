const isAnagram = (s,t) => {
	if (s.length === t.length && s.length > 0){
		let sMap = {};
		let tMap = {};
		
		for (let index = 0; index < s.length; index++) {
			sMap[s[index]] ? sMap[s[index]]+= 1 : sMap[s[index]] = 1
			tMap[t[index]] ? tMap[t[index]]+= 1 : tMap[t[index]] = 1
		}
		for (const key in sMap) {
			if(sMap[key] !== tMap[key]){
				return false
			}
		}
		return true
	}else{
		return false
	}
}
console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));