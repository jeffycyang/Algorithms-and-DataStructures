var LinkedList=require('../../DataStructures/LinkedList/linkedlist');

LinkedList.prototype.reverse=function(){
	var prev=null;
	var curr=null;
	var nxt=this.head;
	while(nxt){
		curr=nxt;
		nxt=nxt.next;
		curr.next=prev;
		prev=curr;
	}
	this.tail=this.head;
	this.head=curr;
	return this;
};

function reverseLinkedList(list){
	var prev=null;
	var curr=null;
	var nxt=list.head;
	while(nxt){
		curr=nxt;
		nxt=nxt.next;
		curr.next=prev;
		prev=curr;
	}
	list.tail=list.head;
	list.head=curr;
	return list;
}

module.exports=LinkedList;
