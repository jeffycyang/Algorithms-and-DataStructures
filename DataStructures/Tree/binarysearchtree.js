var Queue=require('../Queue/queue');

function Node(val){
	this.val=val;
	this.left=null;
	this.right=null;
}

function BinarySearchTree(){
	this.root=null;
}

BinarySearchTree.prototype.insert=function(val){
	if(!this.root){
		this.root=new Node(val);
		return;
	}
	var currNode=this.root;
	var node=new Node(val);
	while(currNode){
		if(val<currNode.value){
			if(!currNode.left){
				currNode.left=node;
				return;
			}
			currNode=currNode.left;
		}else{
			if(!currNode.right){
				currNode.right=node;
				return;
			}
			currNode=currNode.right;
		}
	}
};

BinarySearchTree.prototype.search=function(val){
	if(!this.root){
		return false;
	}
	var currNode=this.root;
	while(currNode){
		if(currNode.val===val){
			return true;
		}
		if(val<currNode.val){
			currNode=currNode.left;
		}else{
			currNode=currNode.right;
		}
	}
	return false;
};

BinarySearchTree.prototype.BFS=function(val){
	var cn;
	var q=new Queue();
	q.enqueue(this.root);
	while(q.size()>0){
		cn=q.dequeue();
		if(cn.val===val){
			return true;
		}
		q.enqueue(cn.left);
		q.enqueue(cn.right);
	}
	return false;
};

BinarySearchTree.prototype.DFS=function(val){
	var found=false;
	function recurse(node){
		if(node.val===val){
			found=true;
			return;
		}
		recurse(node.left);
		recurse(node.right);
	}
	recurse(this.root);
	return found;
};

BinarySearchTree.prototype.DFSwithStack=function(val){
	var cn;
	var s=[];
	s.push(this.root);
	while(s.length>0){
		cn=s.pop();
		if(cn.val===val){
			return true;
		}
		s.push(cn.left);
		s.push(cn.right);
	}
	return false;
};

module.exports=BinarySearchTree;
