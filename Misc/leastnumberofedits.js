// with recursion
function leastNumberEdits(s1,s2){
    var le=Infinity;
    function recurse(x,y,e){
        if(x===s1.length||y===s2.length){
            if(e<le){
                le=e;
            }
            return;
        }
        if(s1.length===s2.length){
            if(s1[x]===s2[y]){
                recurse(x+1,y+1,e-1);
            }else{
                recurse(x+1,y+1,e);
            }
        }else{
            for(var i=x;i<s1.length;i++){
                for(var j=y;j<s2.length;j++){
                    if(s1[i]===s2[j]){
                        recurse(i+1,j+1,e-1);
                    }else{
                        recurse(i+1,j+1,e);
                        recurse(i+1,j,e);
                        recurse(i,j+1,e);
                    }
                }
            }
        }
    }
    recurse(0,0,Math.max(s1.length,s2.length));
    return le;
}