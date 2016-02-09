function combination(str,k){
	var c=[];
	if(k>str.length){
		k=str.length;
	}
	function recurse(cur,j){
		if(cur.length===k){
			c.push(cur);
			return;
		}
		for(var i=j;i<str.length;i++){
			recurse(cur.concat(str[i]),i+1);
		}
	}
	recurse("",0);
	return c;	
}
