function LinkedList(){
	this.head=null;
	this.tail=null;
}

LinkedList.prototype.addToTail=function(val){
	var n=new Node(val);
	if(this.head===null){
		this.head=n;
		this.tail=n;
	}else{
		var tail=this.tail;
		this.tail=n;
		this.tail.next=tail;
	}
};

LinkedList.prototype.remove=function(val){
	var cn=this.tail;
	var prev=null;
	if(cn.val===val){
		this.tail=cn.next;
		return cn;
	}
	while(cn){
		if(cn.val===val){
			prev.next=cn.next;
			return cn;
		}
		prev=cn;
		cn=cn.next;
	}
	throw Error('That value does not belong to a node in this list.');
};

LinkedList.prototype.contains=function(val){
	var cn=this.tail;
	while(cn){
		if(cn.val===val){
			return true;
		}
		cn=cn.next;
	}
	return false;
};

function Node(val){
	this.val=val;
	this.next=null;
}
