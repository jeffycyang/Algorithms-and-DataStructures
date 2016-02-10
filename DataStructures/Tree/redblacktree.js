function RedBlackTree(val){
	BinaryTree.call(this,val);
}

RedBlackTree.prototype=Object.create(BinaryTree.prototype);

RedBlackTree.prototype.constructor=RedBlackTree;


