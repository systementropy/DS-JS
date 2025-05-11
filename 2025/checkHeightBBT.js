function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val)
	this.left = (left === undefined ? null : left)
	this.right = (right === undefined ? null : right)
}

const getHeight = (root) => {
	if (root === null)
		return 0;

	return (Math.max(getHeight(root.left), getHeight(root.right)) + 1);
}

const isBalanced = (root) => {
	if (root === null) {
		return true
	}

	const leftHeight = getHeight(root.left)
	const rightHeight = getHeight(root.right)
	console.log(leftHeight, rightHeight);
	if (Math.abs(leftHeight - rightHeight) > 1) {
		return false
	}

	return isBalanced(root.left) && isBalanced(root.right)

}

let root = new TreeNode(1);
root.right = new TreeNode(2);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
root.right.right = new TreeNode(3);

console.log(isBalanced(root));