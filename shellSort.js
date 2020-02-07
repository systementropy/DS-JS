let arrNum = [35,33,42,19,27,44,29,20,73,34,64,14,16,10,8,7,9,3,2,4,1,62,83,18,53,17,95,86,47,69,25,28];
// let arrNum = [35,33,42,19,27,44];
function shellSort(arr){
	const arrLength = arr.length;
	console.log(arrLength);
	let interval = Math.floor(arrLength/2);
	while (interval>1) {
		const gapInstances = Math.floor(arrLength/interval)/2;
		for (let gapInstance = 0; gapInstance < gapInstances; gapInstance++) {
			for (let i = 0; i < interval; i++) {
				if(arr[i+(gapInstance*interval)]>arr[(i+interval)+(gapInstance*interval)]){
					let temp = arr[i+(gapInstance*interval)]
					arr[i+(gapInstance*interval)] = arr[(i+interval)+(gapInstance*interval)];
					arr[(i+interval)+(gapInstance*interval)] = temp;
				}
			}
		}
		console.log(gapInstances+'Interval '+interval+' : ==>'+arr);
		interval = Math.floor(interval/2)
	}
}
console.log(arrNum);
shellSort(arrNum);
console.log(arrNum);
let swapCounter = 0;
function bubbleSort(arr){
	const length = arr.length;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length-i; j++) {
			if (j+1<length && arr[j]>arr[j+1]){
				swapCounter+=1;
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
console.log(swapCounter);
