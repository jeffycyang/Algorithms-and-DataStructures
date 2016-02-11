var WeightedGraph=require('../../DataStructures/Graph/weightedgraph');

WeightedGraph.prototype.djikstra=function(root,target){
	var vertices=[];
	for(var i=0;i<this.nodes.length;i++){
		this.nodes[i].distance=Infinity;
		this.nodes[i].prev=null;
		vertices.push(this.nodes[i]);
	}
	root.distance=0;
	while(vertices.length>0){
		var node=Infinity;
		var ind;
		for(var j=0;j<vertices.length;j++){
			if(vertices[j].distance<=node){
				node=vertices[j];
				ind=j;
			}
		}
		if(node===target){
			return node.distance;
		}
		vertices.splice(ind,1);
		for(var k=0;k<node.edges.length;k++){
			var alt=node.distance+node.edges[k][1];
			if(alt<node.edges[k][0].distance){
				node.edges[k][0].distance=alt;
				node.edges[k][0].prev=node;
			}
		}
	}
	return 'Not reacheable';	
};

WeightedGraph.prototype.djikstraAll=function(root){
	var vertices=[];
	for(var i=0;i<this.nodes.length;i++){
		this.nodes[i].distance=Infinity;
		this.nodes[i].prev=null;
		vertices.push(this.nodes[i]);
	}
	root.distance=0;
	while(vertices.length>0){
		var node=Infinity;
		var ind;
		for(var j=0;j<vertices.length;j++){
			if(vertices[j].distance<=node){
				node=vertices[j];
				ind=j;
			}
		}
		vertices.splice(ind,1);
		for(var k=0;k<node.edges.length;k++){
			var alt=node.distance+node.edges[k][1];
			if(alt<node.edges[k][0].distance){
				node.edges[k][0].distance=alt;
				node.edges[k][0].prev=node;
			}
		}
	}
	return this;
};

module.exports=WeightedGraph;
