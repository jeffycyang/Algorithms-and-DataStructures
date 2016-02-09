function quickSort(a){
	qS(a,0,a.length-1);
	return a;	
}

function qS(a,l,h){
	if(l<h){
		var p=partition(a,l,h);
		qS(a,l,p-1);
		qS(a,p+1,h);
	}
	return a;
}

function partition(a,l,h){
	var p=a[h];
	var j=l;
	for(var i=l;i<h;i++){
		if(a[i]<=p){
			swap(a,i,j);
			j++;
		}
	}
	swap(a,j,h);
	return j;
}

function swap(a,i,j){
	var t=a[i];
	a[i]=a[j];
	a[j]=t;
}
