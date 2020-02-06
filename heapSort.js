let arrNum = [29, 20, 73, 34, 64, 14,16,10,8,7,9,3,2,4,1];
function heapify (arr , length, index){
	let max = index;
	const left = 2*index+1;
	const right = 2*index+2;
	if(arr[left]>arr[max] && left<length){
		max = left;
	}
	if(arr[right]>arr[max] && right<length){
		max = right;
	}
	if(max!==index){
		let temp = arr[index]
		arr[index] = arr[max];
		arr[max] = temp;
		heapify(arr, length, max);
	}
	return arr;
}

function heapSort(){
	const length = arrNum.length;
	for (let i = 0; i < length; i++) {
		heapify(arrNum, length, i)
	}
	for (let i = 0; i < length; i++) {
		heapify(arrNum, length-i-1, 0);
		const temp = arrNum[0];
		arrNum[0] = arrNum[length-i-1];
		arrNum[length-i-1] = temp;
		console.log('Step '+i+' : ==>'+arrNum);
	}
	console.log(arrNum);
}
heapSort();