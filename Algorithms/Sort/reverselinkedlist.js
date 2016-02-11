var LinkedList=require('../../DataStructures/LinkedList/linkedlist');

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
