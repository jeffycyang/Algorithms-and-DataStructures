function permutation(str,k){
	var p=[];
	if(k>str.length){
		k=str.length;
	}
	function recurse(s,l){
		if(s.length===k){
			p.push(s);
			return;
		}
		for(var i=0;i<l.length;i++){
			recurse(s.concat(l[i]),l.slice(0,i).concat(l.slice(i+1)));
		}
	}
	recurse("",str);
	return p;
}
