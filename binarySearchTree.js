class Node{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
		this.parent = null;
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null;
	}
	getRootNode(){
		return this.root;
	}
	insert(data){
		let newNode = new Node(data);
		if(this.root === null){
			this.root = newNode;
		}else{
			this.insertNode(this.root,newNode);
		}
	}
	insertNode(node, newNode){
		if(newNode.data < node.data){
			if(node.left == null){
				node.left = newNode;
				// newNode.parent = node;
			}else{
				this.insertNode(node.left, newNode);
			}
		}else{
			if(node.right == null){
				node.right = newNode;
				// newNode.parent = node;
			}else{
				this.insertNode(node.right, newNode);
			}
		}
	}
}
var BST = new BinarySearchTree();
const arrNum = [35,33,42,19,27,44,29,20,73,34,64,14,16,10,8,7,9,3,2,4,1,62,83,18,53,17,95,86,47,69,25,28,0,99];
for (let i = 0; i < arrNum.length; i++) {
	BST.insert(arrNum[i])
}
console.log(JSON.stringify(BST))