function MinBinaryHeap(a){
	for(var i=Math.floor(a.length/2);i>=0;i--){
		minHeapify(a,i);
	}
	return a;
}

function minHeapify(a,i){
	var l=2*i+1;
	var r=2*i+2;
	var small=i;
	if(l<a.length&&a[l]<a[small]){
		small=l;
	}
	if(r<a.length&&a[r]<a[small]){
		small=r;
	}
	if(small!==i){
		swap(a,i,small);
		maxHeapify(a,small);
	}
}

function swap(a,i,j){
	var t=a[i];
	a[i]=a[j];
	a[j]=t;
}
