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

//n^2 dp solution
function longestIncreasingSubsequence(a){
    var p=[];
    for(var i=0;i<a.length;i++){
        p.push([]);
        for(var j=a.length-1;j>=i;j--){
            if(i===0){
                p[0][j]=[a[j]];
            }else{
                if(a[j]>a[i]){
                    p[i][j]=p[i-1][i].concat(a[j]);
                }else{
                    p[i][j]=p[i-1][j];
                }
            }
        }
    }
    console.log(p);
    return p[a.length-1][a.length-1];
}
longestIncreasingSubsequence([7,1,6,2,3,9]);

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
