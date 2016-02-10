function hasCycle(linkedlist){
	var slow=linkedlist.head;
	var fast=linkedlist.head;
	while(fast.next&&fast.next.next){
		fast=fast.next.next;
		if(slow===fast){
			return true;
		}
		slow=slow.next;
	}
	return false;
}
