function mergeSort(a){
	if(a.length===1){
		return a;
	}
	var m=Math.floor(a.length/2);
	return merge(mergeSort(a.slice(0,m)),mergeSort(a.slice(m)));
}

function merge(l,r){
	var i=0;
	var j=0;
	var ma=[];
	while(i<l.length&&j<r.length){
		if(l[i]<r[j]){
			ma.push(l[i++]);
		}else{
			ma.push(r[j++]);
		}
	}
	return ma.concat(l.slice(i)).concat(r.slice(j));
}

function swap(a,i,j){
	var t=a[i];
	a[i]=a[j];
	a[j]=t;
}
