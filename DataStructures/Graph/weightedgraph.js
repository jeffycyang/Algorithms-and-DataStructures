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
	
};

WeightedGraph.prototype.addEdge=function(m,n,weight){
	if(!(m instanceof Node)||!(n instanceof Node)){
		throw Error('At least one of the entries is not a node.');
	}
	if(this.edges.indexOf(m)===-1||this.edges.indexOf(n)===-1||){
		throw Error('At least one of the nodes does not reside in this graph.');
	}
	m.connect(n,weight);
};

WeightedGraph.prototype.removeEdge=function(node){
	
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
		}
	}
	if(connected){
		throw Error('This node is already connected.');
	}
	this.edges.push([node,weight]);
	node.edges.push([this,weight]);
};

Node.prototype.sever=function(node){
	if(!(node instanceof Node)){
		throw Error('The entry is not a node.');
	}
	var connected=false;
	var m;
	var n;
	for(var i=0;i<this.edges.length;i++){
		if(this.edges[i].indexOf(node)!==-1){
			connected=true;
			m=i;
		}
	}
	if(!connected){
		throw Error('These two nodes are not connected.');
	}
	for(var j=0;j<node.edges.length;j++){
		if(node.edges[i].indexOf(this)!==-1){
			n=j;
		}	
	}
	this.edges.splice(m,1);
	node.edges.splice(n,1);
};

module.exports=WeightedGraph;
