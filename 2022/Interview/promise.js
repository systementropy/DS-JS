setTimeout(() => {
	console.log("timeout")
},0)

const aPromise = new Promise((resolve, rejects) => {
	resolve("promise")
})
aPromise.then(data => console.log(data))