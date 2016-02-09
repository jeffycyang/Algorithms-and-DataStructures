function insertionSort(a){
	var j;
	for(var i=0;i<a.length;i++){
		j=i;
		while(j>0&&a[j-1]>a[j]){
			swap(a,j-1,j);
			j--;
		}
	}
	return a;
}

function swap(a,i,j){
	var t=a[i];
	a[i]=a[j];
	a[j]=t;
}
