function largestContiguousSum(a){
    var p=[];
    var l=Number.NEGATIVE_INFINITY;
    for(var i=0;i<a.length;i++){
        p.push([]);
        for(var j=0;j<a.length;j++){
            p[i][j]=Number.NEGATIVE_INFINITY;
        }
    }
    for(var i=0;i<a.length;i++){
        if(i>0&&a[i]+p[i-1][0]>a[i]){
            p[i][0]=a[i]+p[i-1][0];
        }
        if(i>0&&a[i]+p[i-1][0]<a[i]){
            p[i][0]=a[i];
        }
        if(i===0&&a[i]>p[i][0]){
            p[i][0]=a[i];
        }
    }
    for(var i=0;i<a.length;i++){
        if(i>0&&a[i]+p[0][i-1]>a[i]){
            p[0][i]=a[i]+p[0][i-1];
        }
        if(i>0&&a[i]+p[0][i-1]<a[i]){
            p[0][i]=a[i];
        }
        if(i===0&&a[i]>p[0][i]){
            p[0][i]=a[i];
        }
    }
    for(var i=1;i<a.length;i++){
        for(var j=1;j<a.length;j++){
            if(a[i]>a[j]&&a[i]>p[i-1][j-1]){
                if(p[i-1][j-1]+a[i]>p[i-1][j-1]){
                    p[i][j]=p[i-1][j-1]+a[i];
                }else{
                    p[i][j]=a[i];
                }
            }else if(a[j]>a[i]&&a[j]>p[i-1][j-1]){
                if(p[i-1][j-1]+a[j]>p[i-1][j-1]){
                    p[i][j]=p[i-1][j-1]+a[j];
                }else{
                    p[i][j]=a[j];
                }
            }else{
                if(p[i-1][j]>p[j-1][i]){
                    p[i][j]=p[i-1][j];
                }
                if(p[i][j-1]>p[i-1][j]){
                    p[i][j]=p[i][j-1];
                }
            }
            if(l<p[i][j]){
                l=p[i][j];
            }
        }
    }
    console.log(p);
    return l;
}

largestContiguousSum([-2,5,-1,7,-3]);
