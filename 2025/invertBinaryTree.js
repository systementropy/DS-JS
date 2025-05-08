function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let tree = new TreeNode(4);
let treeL = new TreeNode(2);
let treeR = new TreeNode(7);
treeL.left = new TreeNode(1);
treeL.right = new TreeNode(3);
treeR.left = new TreeNode(6);
treeR.right = new TreeNode(9);
tree.left = treeL;
tree.right = treeR;

let treeRoot = ''
const invertTree = (root) => {
	treeRoot ? null : treeRoot = root
	if(root === null || root.val === null) return root
	if(root.left && root.right){
		const temp = root.left;
		root.left = root.right;
		root.right = temp;
		invertTree(root.left)
		invertTree(root.right)
	}else if(root.left){
		root.right = root.left;
		root.left = null;
		invertTree(root.right)
	}else{
		root.left = root.right;
		root.right = null;
		invertTree(root.left)
	}
	return root
}
console.log(invertTree(tree));