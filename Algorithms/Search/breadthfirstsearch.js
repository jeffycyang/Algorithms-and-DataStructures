var Queue=require('../../DataStructures/queue');
var Tree=require('../../DataStructures/tree');

Tree.prototype.breadthFirstSearch=function(target){
	var q=new Queue();
	var n;
	q.enqueue(this);
	while(q.size()>0){
		n=q.dequeue();
		if(n.val===target){
			return true;
		}
		for(var i=0;i<n.children.length;i++){
			q.enqueue(n.children[i]);
		}
	}
	return false;
};

Tree.prototype.breadthFirstSelect=function(filter){
	var f=[];
	var q=new Queue();
	var n;
	q.enqueue(this);
	while(q.size()>0){
		n=q.dequeue();
		if(filter(n.val)){
			f.push(n.val);
		}
		for(var i=0;i<n.children.length;i++){
			q.enqueue(n.children[i]);
		}
	}
	return f;
};

module.exports=Tree;
