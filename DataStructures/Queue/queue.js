function Queue(){
	this.inbox=[];
	this.outbox=[];
}

Queue.prototype.enqueue=function(val){
	this.inbox.push(val);
};

Queue.prototype.dequeue=function(){
	if(this.outbox.length===0){
		while(this.inbox.length>0){
			this.outbox.push(this.inbox.pop());
		}
	}
	return this.outbox.pop();
};

Queue.prototype.size=function(){
	return this.inbox.length+this.outbox.length;
};

module.exports=Queue;
