// const inputObj = {
// 	name: "saket",
// 	age: "25",
// 	address: {
// 		city: "delhi",
// 		country: "india",
// 		code: {
// 			zip: "1010",
// 			pin: "0101",
// 		},
// 		current: {
// 			city: "delhi",
// 			country: "india",
// 			code: {
// 				zip: "1010",
// 				pin: "0101",
// 			}
// 		}

// 	}
// }
// // name
// // age
// // address_city
// let opObj = {}
// const flattenObj = (obj,parentStr = "") => {

// 	for(let key in obj){
// 		if(typeof(obj[key]) === 'object' ){
// 			flattenObj(obj[key], parentStr+key+"_")
// 		}else{
// 			opObj[parentStr+key] = obj[key]
// 		}
// 	}
// 	return opObj
// }
// let op = flattenObj(inputObj)
// console.log(op)



const ipSrr = [-4, -3, -1, 0, 2, 5, 8, 10]
ipSrr = [0,9,1,4,16,25,64,100]

i = 0

j = arr.length -1

while(i<=j){
	if(arr[i] < arr[j]){
		j--
	}
	if(arr[i] > arr[j]){
		swap(arr[i],arr[j])
		// j--
		i++
	}
}