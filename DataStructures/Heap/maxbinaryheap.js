function MaxBinaryHeap(a){
	for(var i=Math.floor(a.length/2);i>=0;i--){
		maxHeapify(a,i);
	}
	return a;
}

function maxHeapify(a,i){
	var l=2*i+1;
	var r=2*i+2;
	var large=i;
	if(l<a.length&&a[l]>a[large]){
		large=l;
	}
	if(r<a.length&&a[r]>a[large]){
		large=r;
	}
	if(large!==i){
		swap(a,i,large);
		maxHeapify(a,large);
	}
}

function swap(a,i,j){
	var t=a[i];
	a[i]=a[j];
	a[j]=t;
}
