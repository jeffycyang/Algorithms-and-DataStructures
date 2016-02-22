//dp - can be made better...
function longestIncreasingSubsequence(a){
    var p=[];
    var l=[];
    for(var i=0;i<a.length;i++){
        p.push([]);
        for(var j=0;j<a.length;j++){
            p[i][j]=[a[i]];
        }
    }
    for(var i=0;i<a.length;i++){
        for(var j=i+1;j<a.length;j++){
            if(a[j]>a[i]){
                var k=j-1;
                while(a[j]<a[k]){
                    k--;
                }
                p[i][j]=p[i][k].concat(a[j]);
            }
            if(l.length<p[i][j].length){
                l=p[i][j];
            }
        }
        if(l.length>a.length-i){
          break;
        }
    }
    return l;
}

//recursive
function longestIncreasingSubsequence(a){
    var l=[];
    function recurse(c,j){
        if(c.length>l.length){
            l=c;
        }
        for(var i=j;i<a.length;i++){
            if(c.length===0){
                recurse(c.concat(a[i]),i+1);
            }else if(a[i]>c[c.length-1]){
                recurse(c.concat(a[i]),i+1);
            }
        }
    }
    recurse([],0);
    return l;
}

longestIncreasingSubsequence([5,1,2,7,3,4]);
