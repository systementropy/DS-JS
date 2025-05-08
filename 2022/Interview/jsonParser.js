const inputObj = {
	name: "Saket",
	address: {
		personal : {
			city : "patna",
			state: "delhi"
		},
		office: {
			city: {
				location : "sector62",
				landmark: "metro"
			},
			state: "UP"
		}
	}
}

let finalObj = {}
const transformer = (obj, parentKey) => {
	for(let key in obj){
		if(typeof obj[key] === 'object'){
			transformer(obj[key], parentKey+"_"+key)
		}else{
			finalObj[parentKey+"_"+key] = obj[key]
		}
	}
}
transformer(inputObj, "user")
console.log(finalObj)