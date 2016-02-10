function targetSum(a,t){
	var ta=[];
	var s=a[0];
	var start=0;
	var end=0;
	while(end<a.length){
		if(s<t){
			end++;
			s+=a[end];
		}
		if(s>t){
			s-=a[start];
			start++;
		}
		if(s===t){
			break;
		}
	}
	for(var i=start;i<=end;i++){
		ta.push(a[i]);
	}
	return ta;
}