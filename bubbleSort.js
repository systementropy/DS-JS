let arrNum = [29, 20, 73, 34, 64, 14,16,10,8,7,9,3,2,4,1];
function bubbleSort(arr){
	const length = arr.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length-i; j++) {
			if (j+1<length && arr[j]>arr[j+1]){
				let temp = arr[j]
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
		console.log('Step '+i+' : ==>'+arr);
	}
}
bubbleSort(arrNum);
console.log(arrNum)