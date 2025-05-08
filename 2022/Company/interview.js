// Given an array of price of a commodity where the index of the array represents sequential
// days and the value represents the price on that day, write a function to calculate maximum profit
// you can earn by buying only once and selling only once.
// You cannot sell before you buy.
// Input: [9,2,4,3,8,5]
// Output: 6
// Explanation: Buy on day 1 (price = 2) and sell on day 4 (price = 8), profit = 8-2 = 6.

const input = [9,2,4,3,8,5]

const maximumProfit = (arr) => {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if(((a[j] - a[i])) > max){
				max = (a[j] - a[i])
			}
		}
	}
	return max
}

const maxProfit = maximumProfit(input)