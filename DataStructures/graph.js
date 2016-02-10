function Graph(){
	this.nodes=[];
}

Graph.prototype.addNode=function(node){
	if(!(node instanceof Node)){
		node=new Node(node);
	}
	this.nodes.push(node);
};

Graph.prototype.removeNode=function(node){
	var i=this.nodes.indexOf(node);
	if(i!==-1){
		this.nodes.splice(i,1);
		for(var j=0;j<node.edges.length;j++){
			node.edges[j].splice(node.edges[j].edges.indexOf(node),1);
		}
		node.edges=[];
		return node;
	}
	throw Error('The node cannot be removed because it does not belong in this graph.');
};

Graph.prototype.addEdge=function(m,n){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.edges.indexOf(m)===-1||this.edges.indexOf(n)===-1||){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	m.connect(n);
};

Graph.prototype.removeEdge=function(m,n){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.edges.indexOf(m)===-1||this.edges.indexOf(n)===-1||){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	m.sever(n);
};

Graph.prototype.size=function(){
	return this.nodes.length;
};

function Node(val){
	this.val=val;
	this.edges=[];
}

Node.prototype.connect=function(node){
	if(!(node instanceof Node)){
		node=new Node(node);
	}
	if(this.edges.indexOf(node)!==-1||node.edges.indexOf(this)!==-1){
		throw Error('This node is already connected.')
	}
	this.edges.push(node);
	node.edges.push(this);
};

Node.prototype.sever=function(node){
	if(!(node instanceof Node)){
		throw Error('The entry is not a node.')
	}
	if(this.edges.indexOf(node)===-1){
		throw Error('These two nodes are not connected.');
	}
	this.edges.splice(this.edges.indexOf(node),1);
	node.edges.splice(node.edges.indexOf(this),1);
}

module.exports=Graph;
