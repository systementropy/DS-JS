const nodesCount = 18 										// No of nodes
let visited = [999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999];
const adjacencyList ={
	0:[4,8,13,14],
	1:[5],
	2:[9,15],
	3:[9],
	4:[0,8],
	5:[1,16,17],
	6:[7,11],
	7:[6,11],
	8:[0,4,14],
	9:[2,3,15],
	10:[15],
	11:[6,7],
	12:[],
	13:[0,14],
	14:[0,8,13],
	15:[2,9,10],
	16:[5],
	17:[5],
};

function dfs(node,assignVal){
	if(visited[node] !== 999){
		return;
	}else{
		visited[node]=assignVal;
		let neighbours = adjacencyList[node];
		for (const neighbor of neighbours) {
			dfs(neighbor,assignVal);
		}
	}
}
for (let node = 0; node < nodesCount; node++) {
	if(visited[node] === 999){
		dfs(node,node)
	}
}
// const start_node = 0;
console.log(visited)