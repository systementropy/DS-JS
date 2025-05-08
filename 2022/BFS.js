const Queue = require('./queue')
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
let queue = new Queue();
function bfs(start, destination){
	let prev = solve(start);
	return recontructionPath(start, destination,prev)
}
function solve(node){
	queue.enqueue(node);
	
}
bfs(0,1);
console.log(visited)