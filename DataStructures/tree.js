function Tree(val){
	this.val=val;
	this.children=[];
}

Tree.prototype.addChild=function(child){
	if(!(child instanceof Tree)){
		child=new Tree(child);
	}
	if(!this.isDescendant(child)){
		this.children.push(child);
	}else{
		throw Error('That node is already a child of this tree.')
	}
};

Tree.prototype.removeChild=function(child){
	var i=this.children.indexOf(child);
	if(i!==-1){
		this.children.splice(i,1);
	}else{
		throw Error('That node is not an immediate child of this tree node.');
	}
};

Tree.prototype.isDescendant=function(node){
	if(this.children.indexOf(node)!==-1){
		return true;
	}
	for(var i=0;i<this.children.length;i++){
		if(this.children[i].isDescendant(node)){
			return true;
		}
	}
	return false;
};

module.exports=Tree;
