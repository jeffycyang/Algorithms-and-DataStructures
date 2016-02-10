var Tree=require('../../DataStructures/tree');

Tree.prototype.depthFirstSearch=function(target){
	var f=false;
	function recurse(n){
		if(n.val===target){
			f=true;
			return;
		}
		for(var i=0;i<n.children.length;i++){
			recurse(n.children[i]);
		}
	}
	recurse(this);
	return f;
};

Tree.prototype.depthFirstSelect=function(filter){
	var f=[];
	function recurse(n){
		if(filter(n.val)){
			f.push(n.val);
		}
		for(var i=0;i<n.children.length;i++){
			recurse(n.children[i]);
		}
	}
	recurse(this);
	return f;
};

module.exports=Tree;
