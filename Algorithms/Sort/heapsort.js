function heapSort(a){
	heapify(a,a.length);
	var end=a.length-1;
	while(end>0){
		swap(a,0,end);
		end--;
		siftDown(a,0,end);
	}
	return a;
}

function heapify(a,count){
	var start=parent(count-1);
	while(start>=0){
		siftDown(a,start,count-1);
		start--;
	}
}

function siftDown(a,start,end){
	var r=start;
	var child;
	var t;
	while(leftChild(r)<=end){
		child=leftChild(r);
		t=r;
		if(a[t]<a[child]){
			t=child;
		}
		if(child+1<=end&&a[t]<a[child+1]){
			t=child+1;
		}
		if(t===r){
			return;
		}else{
			swap(a,r,t);
			r=t;
		}
	}
}

function parent(i){
	return Math.floor((i-1)/2);
}

function leftChild(i){
	return 2*i+1;
}

function rightChild(i){
	return 2*i+2;
}

function swap(a,i,j){
	var t=a[i];
	a[i]=a[j];
	a[j]=t;
}
