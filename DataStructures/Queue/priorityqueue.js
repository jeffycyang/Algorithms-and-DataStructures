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
    this.inbox.sort(function(x,y){
        return y[1]-x[1];    
    });
};

PriorityQueue.prototype.inheritedDequeue=Queue.prototype.dequeue;

PriorityQueue.prototype.dequeue=function(){
    var val=this.inheritedDequeue();
    return val[0];
};

PriorityQueue.prototype.size=Queue.prototype.size;

module.exports=PriorityQueue;
