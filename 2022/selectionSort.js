let arrNum = [29, 20, 73, 34, 64, 14,16,10,8,7,9,3,2,4,1];
function selectionSort(arr){
	const arrLength = arr.length;
	for (let i = 0; i < arrLength; i++) {
        let minAtIndex = i;
        let minValue = arr[i];
        for (let j = i; j < arrLength; j++) {
            if(arr[j]<arr[minAtIndex]){
                minAtIndex =j;
            }
        }
        if(minAtIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minAtIndex]
            arr[minAtIndex] = temp;
        }
        console.log('MinAt'+minAtIndex+' && Step '+i+' : ==>'+arr);
    }
}
selectionSort(arrNum);
console.log(arrNum)