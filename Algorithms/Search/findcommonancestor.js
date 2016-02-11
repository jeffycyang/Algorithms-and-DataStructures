var Tree=require('../../DataStructures/tree');

Tree.prototype.closestCommonAncestor=function(m,n){
	var ca;
	if(m===this||n===this){
		return this;
	}
	if(!this.isDescendant(m)||!this.isDescendant(n)){
		return null;
	}
	var path1=this.ancestorPath(m);
	var path2=this.ancestorPath(n);
	var l=Math.max(path1.length,path2.length);
	for(var i=0;i<l;i++){
		if(path1[i]!==path2[i]){
			return ca;
		}
		ca=path1[i];
	}
	return ca;
};

Tree.prototype.ancestorPath=function(n){
	var path=[];
	if(!this.isDescendant(n)){
		return null;
	}
	function recurse(node,target){
		if(node===target){
			path.push(node);
			return;
		}
		if(node.children.length>0){
			if(node.isDescendant(target)){
				path.push(node);
				for(var i=0;i<node.children.length;i++){
					recurse(node.children[i],target);
				}
			}
		}
	}
	recurse(this,n);
	return path;
};
