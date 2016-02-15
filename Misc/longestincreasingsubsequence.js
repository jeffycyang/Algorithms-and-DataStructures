function longestIncreasingSubsequence(a){
    var s=0;
    var e=0;
    var l=[0,0];
    var r=[];
    while(e<a.length){
        if(a[e-1]>a[e]){
            s=e;
        }
        e++;
        if(e-s+1>l[1]-l[0]){
            l[0]=s;
            l[1]=e
        }
    }
    for(var i=l[0];i<l[1];i++){
        r.push(a[i]);
    }
    return r;
}

longestIncreasingSubsequence([3,1,4,7,2,1,3,5,6,7,8,2,3,4]);