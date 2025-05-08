const nodesCount = 13 										// No of nodes
let visited = [false,false,false,false,false,false,false,false,false,false,false,false,false];
const adjacencyList ={
	0:[1,9],
	1:[0,8],
	2:[3],
	3:[2,4,5,7],
	4:[3],
	5:[3,6],
	6:[5,7],
	7:[3,6,8,10,11],
	8:[1,7,9],
	9:[0,8],
	10:[7,11],
	11:[7,10],
	12:[]
};

function dfs(node){
	if(visited[node]){
		console.log(node);
		return;
	}else{
		visited[node]=true;
		let neighbours = adjacencyList[node];
		for (const neighbor of neighbours) {
			dfs(neighbor);
		}
	}
}
const start_node = 0;
dfs(start_node);
console.log(visited)