function WeightedGraph(){
	this.nodes=[];
}

WeightedGraph.prototype.addNode=function(node){
	if(!(node instanceof Node)){
		node=new Node(node);
	}
	this.nodes.push(node);
};

WeightedGraph.prototype.removeNode=function(node){
	var i=this.nodes.indexOf(node);
	if(i!==-1){
	    this.nodes.splice(i,1);
		while(node.edges.length>0){
			node.sever(node.edges[0][0]);
		}
		return node;
	}
	throw Error('The node cannot be removed because it does not belong in this graph.');
};

WeightedGraph.prototype.addEdge=function(m,n,weight){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.nodes.indexOf(m)===-1||this.nodes.indexOf(n)===-1){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	m.connect(n,weight);
};

WeightedGraph.prototype.removeEdge=function(m,n){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.nodes.indexOf(m)===-1||this.nodes.indexOf(n)===-1){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	m.sever(n);
};

WeightedGraph.prototype.size=function(){
	return this.nodes.length;
};

function Node(val){
	this.val=val;
	this.edges=[];
}

Node.prototype.connect=function(node,weight){
	if(!(node instanceof Node)){
		node=new Node(node);
	}
	var connected=false;
	for(var i=0;i<this.edges.length;i++){
		if(this.edges[i].indexOf(node)!==-1){
			connected=true;
			break;
		}
	}
	if(connected){
		throw Error('This node is already connected.');
	}
	node.edges.push([this,weight]);
	this.edges.push([node,weight]);
};

Node.prototype.sever=function(node){
	if(!(node instanceof Node)){
		throw Error('The entry is not a node.');
	}
	if(node===this){
		throw Error('A node cannot be severed from itself.');
	}
	var connected=false;
	var m;
	var n;
	for(var i=0;i<this.edges.length;i++){
		if(this.edges[i].indexOf(node)!==-1){
			connected=true;
			m=i;
			break;
		}
	}
	if(!connected){
		throw Error('These two nodes are not connected.');
	}
	for(var j=0;j<node.edges.length;j++){
		if(node.edges[j].indexOf(this)!==-1){
			n=j;
			break;
		}	
	}
	node.edges.splice(n,1);
	this.edges.splice(m,1);
};

module.exports=WeightedGraph;
