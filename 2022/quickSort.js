let arrNum = [35,33,42,19,27,44,29,20,73,34,64,14,16,10,8,7,9,3,2,4,1,62,83,18,53,17,95,86,47,69,25,28,0,99];
function partitionFunction(left,right,pivot){
	while(left<=right){
		while(arrNum[left] < pivot){
			left++;
		}
		while(arrNum[right] >= pivot){
			right--;
		}
		if(left<=right){
			let temp = arrNum[left]
			arrNum[left] = arrNum[right];
			arrNum[right] = temp;
			left++;
			right--;
		}
	}
	return left;
}
function quickSort(left,right){
	const pivot = arrNum[right];
	const partition = partitionFunction(left,right,pivot);
	arrNum[right]=arrNum[partition];
	arrNum[partition]=pivot;
	
	if(left<partition-1){
		quickSort(left,partition-1);
	}
	if(right>(partition+1)){
		quickSort(partition+1,right);
	}
}
quickSort(0,arrNum.length-1);
console.log(arrNum)