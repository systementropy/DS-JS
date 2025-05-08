class Queue {
	constructor(){
		this.items = [];
	}
	enqueue(item){
		this.items.push(item)
	}
	dequeue(item){
		if(this.isEmpty()){
			return "Empty"
		}
		return this.items.shift();
	}
	front(){
		if(this.isEmpty()){
			return "Empty::::"
		}
		return this.items[0];
	}
	isEmpty(){
		return this.items.length === 0;
	}
	printQueue(){
		let str ="";
		for (let index = 0; index < this.items.length; index++) {
			str += this.items[index]+'==>';
		}
		return str
	}
}
module.exports = Queue