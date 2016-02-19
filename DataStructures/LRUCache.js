function LRUCache(cap){
    this.cap=cap;
    this.stor={};
    this.q=new DoublyLinkedList();
    this.len=0;
}

LRUCache.prototype.get=function(key){
    if(this.stor[key]===undefined){
        return -1;
    }
    this.q.reset(key);
    return this.stor[key];
};

LRUCache.prototype.set=function(key,val){
    if(this.stor[key]===undefined){
        if(this.len===this.cap){
            delete this.stor[this.q.removeFromTail()];
            this.len--;
        }
        this.len++;
        this.q.addToHead(key);
        this.stor[key]=val;
        return;
    }
    this.q.reset(key);
    this.stor[key]=val;
};

function DoublyLinkedList(){
    this.head=null;
    this.tail=null;
}

DoublyLinkedList.prototype.addToHead=function(node){
  if(!(node instanceof Node)){
      node=new Node(node);
  }
  if(this.head===null){
      this.head=node;
      this.tail=node;
      return;
  }
  node.next=this.head;
  this.head.prev=node;
  this.head=node;
};

DoublyLinkedList.prototype.removeFromTail=function(){
    if(this.head===null){
        return;
    }
    var node;
    if(this.head===this.tail){
        node=this.tail;
        this.head=null;
        this.tail=null;
        return node.data;
    }
    node=this.tail;
    this.tail=this.tail.prev;
    this.tail.next=null;
    node.prev=null;
    node.next=null;
    return node.data;
};

DoublyLinkedList.prototype.reset=function(data){
    var node=this.head;
    var prev;
    var nxt;
    while(node.data!==data){
        node=node.next;
    }
    if(node===this.head){
        return;
    }
    if(node===this.tail){
        this.tail=this.tail.prev;
        this.tail.next=null;
        node.prev=null;
        this.addToHead(node);
        return;
    }
    node.prev.next=node.next;
    node.next.prev=node.prev;
    node.next=null;
    node.prev=null;
    this.addToHead(node);
};

function Node(data){
    this.data=data;
    this.prev=null;
    this.next=null;
}
