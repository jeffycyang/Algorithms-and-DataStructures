function BinaryHeap(priority){
	this.storage=[];
	this.priority=priority;
	// MaxBinaryHeap: priority=function(x){return x;}
	// MinBinaryHeap: priority=function(x){return -1*x;}
}

BinaryHeap.prototype.siftUp=function(ind){
	var i=ind;
	var p;
	while(i>0){
		p=Math.floor((i-1)/2);
		if(this.priority(this.storage[p])<this.priority(this.storage[i])){
			swap(this.storage,p,i);
			i=p;
		}else{
			return;
		}
	}
};

BinaryHeap.prototype.siftDown=function(ind){
	var i=ind;
	var l;
	var r;
	var t;
	while(2*i+1<this.storage.length){
		l=2*i+1;
		r=2*i+2
		t=i;
		if(this.priority(this.storage[t])<this.priority(this.storage[l])){
			t=l;
		}
		if(r<this.storage.length&&this.priority(this.storage[t])<this.priority(this.storage[r])){
			t=r;
		}
		if(t===i){
			return;
		}else{
			swap(this.storage,i,t);
			i=t;
		}
	}	
};

BinaryHeap.prototype.peek=function(){
	return this.storage[0];
};

BinaryHeap.prototype.push=function(val){
	this.storage.push(val);
	this.siftUp(this.storage.length-1);
};

BinaryHeap.prototype.pop=function(){
	var high=this.storage[0];
	var low=this.storage.pop();
	if(this.storage.length>0){
		this.storage[0]=low;
		this.siftDown(0);
	}
	return high;
};

BinaryHeap.prototype.replace=function(val){
	this.storage[0]=val;
	this.siftDown(0);
};

BinaryHeap.prototype.size=function(){
	return this.storage.length;
};

function swap(a,i,j){
	var t=a[i];
	a[i]=a[j];
	a[j]=t;
}
