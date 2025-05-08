const findPair = (arr, num) => {
	let mapFromArr = {

	}
	arr.map(i = > {mapFromArr[i] = i})
	
	for(let i = 0; i< arr.length; i++ ){
		//loop
			//  i + j < num, map[]
 		if(mapFromArr[num - arr[i]]){

			return [mapFromArr[i], mapFromArr[num - arr[i]]]
		}
	}



}


// Sort array => nlogn
// Find index arr[i]>num || m
// for(0,m => x) 
	// 