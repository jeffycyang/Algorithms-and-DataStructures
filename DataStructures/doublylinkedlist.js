function DoublyLinkedlist(){
	this.head=null;
	this.tail=null;
}

DoublyLinkedlist.prototype.addToHead=function(node){
	if(!(node instanceof Node)){
		node=new Node(node);
	}
	if(!this.head){
		this.head=node;
		this.tail=node;
	}else{
		var nxt=this.head;
		nxt.prev=node;
		node.next=nxt;
		this.head=node;
	}
};

DoublyLinkedlist.prototype.addToTail=function(node){
	if(!(node instanceof Node)){
		node=new Node(node);
	}
	if(!this.head){
		this.head=node;
		this.tail=node;
	}else{
		var prev=this.tail;
		prev.next=node;
		node.prev=prev;
		this.tail=node;
	}
};

DoublyLinkedlist.prototype._length=function(node){
	if(!this.head){
		return 0;
	}
	if(this.head===this.tail){
		return 1;
	}
	var i=1;
	var nxt=this.head.next;
	while(nxt){
		i++;
		nxt=nxt.next;
	}
	return i;
};

DoublyLinkedlist.prototype.addNodeAt=function(node,index){
	if(index<0||index>this._length()){
        throw Error('Out of bounds, cannot add a node at that position.');
    }
    //if tail or head
	if(!(node instanceof Node)){
		node=new Node(node);
	}    
    var curn=this.head;
    var i=1;
    while(i!==index){
    	i++;
    	curn=curn.next;
    }
    var nxt=curn.next;
    curn.next=node;
    nxt.prev=node;
    node.next=nxt;
    node.prev=curn;
};

DoublyLinkedlist.prototype.returnNodeAt=function(index){
	if(index<0||index>this._length()){
        throw Error('Out of bounds, a node does not exist at that position.');
    }
    var node=this.head;
    var i=1;
    while(i!==index){
    	i++;
    	node=node.next;
    }
    return node;
};

DoublyLinkedlist.prototype.removeNodeAt=function(node){

};

function Node(val){
	this.val=val;
	this.prev=null;
	this.next=null;
}
