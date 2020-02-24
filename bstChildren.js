class Node{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
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
		if(this.root!==null){
			// console.log(this.root.data, this.root.BF,this.root.childrenCount)
		}
		let newNode = new Node(data);
		if(this.root === null){
			this.root = newNode;
		}else{
			this.insertNode(this.root,newNode);
		}
	}
	insertNode(node, newNode){
		node.childrenCount +=1;
		if(newNode.data < node.data){
			if(node.left == null){
				node.left = newNode;
			}else{
				this.insertNode(node.left, newNode);
			}
		}else{
			if(node.right == null){
				node.right = newNode;
			}else{
				this.insertNode(node.right, newNode);
			}
		}
	}
	search(searchValue, node, cb){
		if(node && node.data === searchValue){
			cb(node);
		}else if(node.data>searchValue && node.left){
			this.search(searchValue, node.left, cb)
		}else if(node.data<searchValue && node.right){
			this.search(searchValue, node.right, cb)
		}else{
			cb(false);
		}
	}

	searchReturn(searchValue, node){
		if(node === null){
			return null
		}else if(searchValue<node.data){
			return this.searchReturn(searchValue, node.left)
		}else if(searchValue>node.data){
			return this.searchReturn(searchValue, node.right)
		}else{
			console.log("found it @"+node);
			return node;
		}
	}

	inorder(node){
		if(node !== null){
			this.inorder(node.left)
			console.log(` ${node.data} ${node.childrenCount}`)
			this.inorder(node.right)
		}
	}

	preorder(node){
		if(node !== null){
			console.log(` ${node.data} `)
			this.preorder(node.left)
			this.preorder(node.right)
		}
	}

	postorder(node){
		if(node !== null){
			this.postorder(node.left)
			this.postorder(node.right)
			console.log(` ${node.data} `)
		}
	}

	findMinNode(node){
		if(node.left !== null){
			return this.findMinNode(node.left)
		}else{
			return node;
		}
	}
	
	findMaxNode(node){
		if(node.right !== null){
			return this.findMaxNode(node.right)
		}else{
			return node;
		}
	}

	delete(data){
		this.root = this.removeNode(this.root, data);
	}
	removeNode(node, removeVal){
		if(node === null){														// If root is empty
			return null;
		}else if(removeVal < node.data){										// If value is less than node's data
			node.left = this.removeNode(node.left, removeVal);
			return node
		}else if(removeVal > node.data){										// If value is more than node's data
			node.right = this.removeNode(node.right, removeVal);						
			return node
		}else{																	//  ===== Delete this node =====
			if(node.left === null && node.right === null){ 						// If node has no children, delete node and return
				node = null;
				return node;
			}
			if(node.left === null){												// If either is empty make child the node and return
				node = node.right;
				return node;
			}else if(node.right === null){
				node = node.left;
				return node;
			}
			// If two children then find the min value in the right subtree, put node as that, and delete the min from the right subtree 
			let minInRightChild = this.findMinNode(node.right)
			node.data = minInRightChild.data;
			node.right = this.removeNode(node.right, minInRightChild.data);
			return node;
		}
	}
	getBalanceFactor(node){
		let leftHeight = this.getHeight(node.left);
		let rightHeight = this.getHeight(node.right);
		return leftHeight-rightHeight
	}
	getHeight(node){
		let height = -1;
		if(node === null){
			height = -1;
		}else{
			height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) +1;
		}
		return height;
	}
	inorderBF(node){
		if(node !== null){
			this.inorderBF(node.left)
			console.log(` ${node.data}`);
			console.log(this.getBalanceFactor(node));
			this.inorderBF(node.right)
		}
	}
}
var BST = new BinarySearchTree();
const arrNum = [37,35,33,42,19,27,44,29,20,73,34,64,14,16,10,8,7,9,3,2,4,1,62,83,18,53,17,95,86,47,69,25,28,0,99];
for (let i = 0; i < arrNum.length; i++) {
	BST.insert(arrNum[i])
}
let root = BST.getRootNode();
// console.log(JSON.stringify(BST))
// let root = BST.getRootNode();
// let k
// BST.search(42, root, function(val){
// 	k = val
// });
// console.log(k)
// BST.search(67, root, function(val){
// 	k = val
// });
// console.log(k)
// k = BST.searchReturn(42, root)
// console.log(k)
// k = BST.searchReturn(67, root)
// console.log(k)

// k = BST.inorder(root)
// console.log(k)
// k = BST.preorder(root)
// console.log(k)
// k = BST.postorder(root)
// console.log(k)
// k = BST.findMinNode(root)
// console.log(k)
// k = BST.findMaxNode(root)
// console.log(k)
// BST.inorder(root)
// k = BST.delete(99)
// console.log(k)
// root = BST.getRootNode();
// console.log(JSON.stringify(root))
// BST.inorder(root)
// console.log(BST.getRootNode().data);
// BST.delete(10)
// BST.delete(37)
BST.inorderBF(root)