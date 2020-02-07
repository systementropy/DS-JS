let arrNum = [35,33,42,19,27,44,29,20,73,34,64,14,16,10,8,7,9,3,2,4,1,62,83,18,53,17,95,86,47,69,25,28,0,99];
// let arrNum = [35,33,42,19,30,43,12,99];
function merge(leftArray, rightArray){
	let leftIndex = 0;
	let rightIndex = 0;
	let resultArray = [];
	while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
		if(leftArray[leftIndex]<rightArray[rightIndex]){
			resultArray.push(leftArray[leftIndex]);
			leftIndex++;
		}else{
			resultArray.push(rightArray[rightIndex]);
			rightIndex++;
		}
	}
	while (leftIndex < leftArray.length){
		resultArray.push(leftArray[leftIndex]);
		leftIndex++;
	}
	while (rightIndex < rightArray.length){
		resultArray.push(rightArray[rightIndex]);
		rightIndex++;
	}
	return resultArray;
}


function mergeSort(array){
	if(array.length>1){
		const midPoint = Math.floor((array.length)/2);
		const leftArray = [...array].slice(0,midPoint);
		const rightArray = [...array].slice(midPoint);
		return merge(mergeSort(leftArray),mergeSort(rightArray));
	}else{
		return array;
	}
}
let retVal = mergeSort(arrNum)
console.log(retVal);
