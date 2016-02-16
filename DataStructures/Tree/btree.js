//not working
function BTree(order){
	this.order=order;
	this.vals=[];
	this.children=[];
}

BTree.prototype.insert=function(val){
	if(this.vals.length===2*this.order-1){
		var s=new BTree(this.order);
		s.children.push(this);
		s.splitChild(1,this);
		s.insertNotFull(val);
	}else{
		this.insertNotFull(val);
	}
};

BTree.prototype.delete=function(val){

};

BTree.prototype.splitChild=function(ind,node){
	var z=new BTree(this.order);
	for(var i=this.order;i<node.vals.length;i++){
		z.vals.push(node.vals[i]);
	}
	if(node.children.length>0){
		for(var j=this.order;j<node.children.length;j++){
			z.children.push(node.children[j]);
		}
	}
	node.vals.splice(this.order);
	node.children.splice(this.order);
	this.children.splice(ind,0,z);
	this.vals.splice(ind,0,node.vals[this.order+1]);
};

BTree.prototype.insertNotFull=function(val){
	var j;
	if(this.children.length===0){
		for(var i=this.vals.length-1;i>=0;i--){
			if(val<this.vals[i]){
				j=i;
			}
			this.vals.splice(j,0,val);
		}
	}else{
		for(var i=this.vals.length-1;i>=0;i--){
			if(val<this.vals[i]){
				j=i;
			}
		}
		j++;
		if(this.children[j].vals.length===2*this.order-1){
			this.splitChild(j,this.children[j]);
			if(val>this.vals[j]){
				j++;
			}
		}
		this.children[j].insertNotFull(val);
	}
};
