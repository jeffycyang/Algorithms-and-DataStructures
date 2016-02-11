function DirectedWeightedGraph(){
	this.nodes=[];
}

DirectedWeightedGraph.prototype.addNode=function(node){
	if(!(node instanceof Node)){
		node=new Node(node);
	}
	this.nodes.push(node);
};

DirectedWeightedGraph.prototype.removeNode=function(node){
	var i=this.nodes.indexOf(node);
	if(i!==-1){
		this.nodes.splice(i,1);
		while(node.inEdges.length>0){
			node.inEdges[0][0].severTo(node);
		}
		while(node.outEdges.length>0){
			node.severTo(node.outEdges[0][0]);
		}
		return node;
	}
	throw Error('The node cannot be removed because it does not belong in this graph.');
};

DirectedWeightedGraph.prototype.addEdgeTo=function(m,n,weight){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.nodes.indexOf(m)===-1||this.nodes.indexOf(n)===-1){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	m.connectTo(n,weight);
};

DirectedWeightedGraph.prototype.addEdgeFrom=function(m,n,weight){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.nodes.indexOf(m)===-1||this.nodes.indexOf(n)===-1){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	n.connectTo(m,weight);
};

DirectedWeightedGraph.prototype.removeEdgeTo=function(m,n){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.nodes.indexOf(m)===-1||this.nodes.indexOf(n)===-1){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	m.severTo(n);
};

DirectedWeightedGraph.prototype.removeEdgeFrom=function(m,n){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.nodes.indexOf(m)===-1||this.nodes.indexOf(n)===-1){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	n.severTo(m);
};

DirectedWeightedGraph.prototype.size=function(){
	return this.nodes.length;
};

function Node(val){
	this.val=val;
	this.inEdges=[];
	this.outEdges=[];
}

Node.prototype.connectTo=function(node,weight){
	if(!(node instanceof Node)){
		node=new Node(node);
	}
	if(node===this){
		throw Error('A node cannot be connected to itself.');
	}
	if(this.outEdges.indexOf(node)!==-1||node.inEdges.indexOf(this)!==-1){
		throw Error('This node is already connected TO that node.');
	}
	node.inEdges.push([this,weight]);
	this.outEdges.push([node,weight]);
};

Node.prototype.severTo=function(node){
	if(!(node instanceof Node)){
		throw Error('The entry is not a node.');
	}
	if(node===this){
		throw Error('A node cannot be severed from itself.');
	}
	var connected=false;
	var m;
	var n;
	for(var i=0;i<this.outEdges.length;i++){
		if(this.outEdges[i].indexOf(node)!==-1){
			connected=true;
			m=i;
			break;
		}
	}
	if(!connected){
		throw Error('This node is not connected TO that node.');
	}
	for(var j=0;j<node.inEdges.length;j++){
		if(node.inEdges[j].indexOf(this)!==-1){
			n=j;
			break;
		}	
	}
	node.inEdges.splice(n,1);
	this.outEdges.splice(m,1);
};

module.exports=DirectedWeightedGraph;
