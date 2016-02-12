var Queue=require('./queue');

function PriorityQueue(){
	Queue.call(this);
}

PriorityQueue.prototype=Object.create(Queue.prototype);

PriorityQueue.prototype.constructor=PriorityQueue;

PriorityQueue.prototype.enqueue=function(val,priority){
	if(priority===undefined){
		priority=0;
	}
	this.inbox.push([val,priority]);
	while(this.outbox.length>0){
		this.inbox.push(this.outbox.pop());
	}
    this.inbox.sort(function(x,y){
        return y[1]-x[1];    
    });
};

PriorityQueue.prototype.inheritedDequeue=Queue.prototype.dequeue;

PriorityQueue.prototype.dequeue=function(){
    var val=this.inheritedDequeue();
    return val[0];
};

PriorityQueue.prototype.peek=function(){
	if(this.outbox.length){
		return this.outbox[this.outbox.length-1][0];
	}
	return this.inbox[0][0];
};

PriorityQueue.prototype.size=Queue.prototype.size;

module.exports=PriorityQueue;
