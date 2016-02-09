function LinkedList(){
    this.head=null;
    this.tail=null;
}

LinkedList.prototype.addHead=function(node){
    if(!(node instanceof Node)){
        node=new Node(node);
    }
    if(!this.head){
        this.head=node;
        this.tail=node;
    }else{
        var nxt=this.head;
        this.head=node;
        this.head.next=nxt;
    }
};

LinkedList.prototype.addToTail=function(node){
    if(!(node instanceof Node)){
        node=new Node(node);
    }
    if(!this.tail){
        this.head=node;
        this.tail=node;
    }else{
        this.tail.next=node;
        this.tail=node;
    }
};

LinkedList.prototype._length=function(){
    if(!this.head){
        return 0;
    }
    if(this.head===this.tail){
        return 1;
    }
    var nxt=this.head.next;
    var i=1;
    while(nxt){
        i++;
        nxt=nxt.next;
    }
    return i;
};

LinkedList.prototype.returnNodeAt=function(index){
    if(index<1||index>this._length()){
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

LinkedList.prototype.removeNodeAt=function(index){
    if(index<1||index>this._length()){
        throw Error('Out of bounds, a node does not exist at that position.');
    }
    var node=this.head;
    var prev=null;
    var i=1;
    while(i!==index){
        i++;
        prev=node;
        node=node.next;
    }
    if(this._length()===1){
        this.head=null;
        this.tail=null;
        return node;
    }
    if(this._length()===index){
        this.tail=prev;    
    }
    prev.next=node.next;
    return node;
};

function Node(val){
    this.val=val;
    this.next=null;
}
