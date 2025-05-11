let count = 0;
const search = (nums, target, start, end) => {
	// if(count<10){
	// 	count++;
	// }else{
	// 	return;
	// }
	let startIndex = start || 0;
	let endIndex = end || nums.length -1;

	if((endIndex - startIndex) === 0){
		if(nums[startIndex] === target){
			return startIndex
		}else{
			return -1
		}
	}
	// if(startIndex)
	
	const middle = Math.floor((endIndex-startIndex)/2) + startIndex;
	console.log(nums, target);
	console.log(startIndex, middle, end, nums[middle]);
	if(target===nums[middle]){
		console.log("target found");
		return middle
	} else if(nums[middle] > target){
		console.log("target less");
		if(nums[middle-1] && nums[startIndex]){
			return search(nums, target, startIndex, middle-1)
		}else{
			return nums[startIndex] === target ? startIndex : nums[middle-1] === target ? middle-1 : -1
		}
		
	}else if(nums[middle] < target){
		console.log("target more");
		if(nums[middle+1] && nums[startIndex]){
			return search(nums, target, middle+1, endIndex)
		}else{
			return nums[startIndex] === target ? startIndex : nums[middle+1] === target ? middle+1 : -1
		}
	}
};
console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));
console.log(search([5], -5));
console.log(search([2,5], 5));
console.log(search([2,5], 2));
console.log(search([2,5], 0));
console.log(search([-1,0,5], -1));