const findLCA = (root, p, q) => {
	if (root === null) {
		return null
	}

	if (p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor(root.right, p, q)
	} else if (p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor(root.left, p, q)
	} else {
		return root
	}
}