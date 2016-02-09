function permutation(str){
	var p=[];
	function recurse(s,l){
		if(s.length===str.length){
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
