function powerSet(str){
	var ps=[];
	function recurse(s,j){
		ps.push(s);
		for(var i=j;i<str.length;i++){
			recurse(s.concat(str[i]),i+1);
		}
	}
	recurse("",0);
	return ps;
}
