function leastNumberOfEdits(s1,s2){
    var p=[];
    var le=Math.max(s1.length,s2.length);
    for(var i=0;i<s1.length;i++){
        p.push([]);
        for(var j=0;j<s2.length;j++){
            p[i][j]=Math.max(s1.length,s2.length);
        }
    }
    for(var i=0;i<s1.length;i++){
        for(var j=0;j<s2.length;j++){
            if(s1[i]===s2[j]){
                if(i===0&&j===0){
                    p[i][j]=p[i][j]-1;
                }else if(i===0){
                    p[i][j]=p[i][j-1];    
                }else if(j===0){
                    p[i][j]=p[i-1][j];
                }else if(j===i){
                    p[i][j]=p[i-1][j-1]-1;
                }
                if(p[i][j]<le){
                    le=p[i][j]
                }
            }else{
                if(i>0&&j>0){
                    if(p[i-1][j]<=p[i][j-1]){
                        p[i][j]=p[i-1][j]
                    }
                    if(p[i][j-1]<p[i-1][j]){
                        p[i][j]=p[i][j-1]
                    }
                }else if(i===0&&j>0){
                    if(p[i][j-1]<=p[i][j]){
                        p[i][j]=p[i][j-1]
                    }
                }else if(i>0&&j===0){
                    if(p[i-1][j]<=p[i][j]){
                        p[i][j]=p[i-1][j];
                    }
                }
            }
        }
    }
    return le;
}

leastNumberOfEdits("aaaccde","aaab");