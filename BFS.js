const nodesCount = 14 										// No of nodes
let visited = [false,false,false,false,false,false,false,false,false,false,false,false,false,false];
const adjacencyList ={
	0:[7,9,11],
	1:[8,10],
	2:[3,12],
	3:[2,4,7],
	4:[3],
	5:[6],
	6:[5,7],
	7:[0,3,6,11],
	8:[1,9,12],
	9:[0,8,10],
	10:[1,9],
	11:[0,7],
	12:[2,8],
	13:[]
};
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
let queue = new Queue();
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 
console.log(queue.printQueue())
function bfs(node){
	if(visited[node]){
		return;
	}else{
		visited[node] = true;
		for (const neighbour of adjacencyList[node]) {
			if(!visited[neighbour]){
				bfs(neighbour)
			}
		}
	}
}
bfs(0);
console.log(visited)