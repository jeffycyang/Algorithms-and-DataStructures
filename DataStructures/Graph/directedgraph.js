function DirectedGraph(){
	this.nodes=[];
}

DirectedGraph.prototype.addNode=function(node){
	if(!(node instanceof Node)){
		node=new Node(node);
	}
	this.nodes.push(node);
};

DirectedGraph.prototype.removeNode=function(node){
	var i=this.nodes.indexOf(node);
	if(i!==-1){
		this.nodes.splice(i,1);
		while(node.inEdges.length>0){
			node.inEdges[0].severTo(node);
		}
		while(node.outEdges.length>0){
			node.severTo(node.outEdges[0]);
		}
		return node;
	}
	throw Error('The node cannot be removed because it does not belong in this graph.');
};

DirectedGraph.prototype.addEdgeTo=function(m,n){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.nodes.indexOf(m)===-1||this.nodes.indexOf(n)===-1){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	m.connectTo(n);
};

DirectedGraph.prototype.addEdgeFrom=function(m,n){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.nodes.indexOf(m)===-1||this.nodes.indexOf(n)===-1){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	n.connectTo(m);
};

DirectedGraph.prototype.removeEdgeTo=function(m,n){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.nodes.indexOf(m)===-1||this.nodes.indexOf(n)===-1){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	m.severTo(n);
};

DirectedGraph.prototype.removeEdgeFrom=function(m,n){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.nodes.indexOf(m)===-1||this.nodes.indexOf(n)===-1){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	n.severTo(m);
};

DirectedGraph.prototype.size=function(){
	return this.nodes.length;
};

function Node(val){
	this.val=val;
	this.inEdges=[];
	this.outEdges=[];
}

Node.prototype.connectTo=function(node){
	if(!(node instanceof Node)){
		node=new Node(node);
	}
	if(node===this){
		throw Error('A node cannot be connected to itself.');
	}
	if(this.outEdges.indexOf(node)!==-1||node.inEdges.indexOf(this)!==-1){
		throw Error('This node is already connected TO that node.');
	}
	node.inEdges.push(this);
	this.outEdges.push(node);
};

Node.prototype.severTo=function(node){
	if(!(node instanceof Node)){
		throw Error('The entry is not a node.');
	}
	if(node===this){
		throw Error('A node cannot be severed from itself.');
	}
	if(this.outEdges.indexOf(node)===-1){
		throw Error('This node is not connected TO that node.');
	}	
	node.inEdges.splice(node.inEdges.indexOf(this),1);
	this.outEdges.splice(this.outEdges.indexOf(node),1);
};

module.exports=DirectedGraph;
