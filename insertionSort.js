let arrNum = [35,33,42,19,27,44,29,20,73,34,64,14,16,10,8,7,9,3,2,4,1,62,83,18,53,17,95,86,47,69,25,28];
let swapCounter =0; 
function insertionSort(arr){
	const arrLength = arr.length;
	for (let i = 1; i < arrLength; i++) {
		let holePosition = i;
		let valueToInsrt = arr[i];
		for (let j = i; j > 0; j--) {
			if(arr[i]<arr[0]){
				let temp = arr[0]
				arr[0] = arr[i];
				arr[i] = temp;
			}else if(arr[i]>arr[i-1]){
				continue;
			}else{
				for (let j = 1; j < i; j++) {
					swapCounter+=1;
					if(arr[i]>arr[j-1] && arr[i]<arr[j]){
						let temp = arr[j]
						arr[j] = arr[i];
						arr[i] = temp;
					}
				}
			}
		}
		console.log('Step '+i+' : ==>'+arr);
	}
	
}
insertionSort(arrNum);
console.log(arrNum)
console.log(swapCounter)