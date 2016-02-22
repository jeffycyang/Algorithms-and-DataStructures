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

//another implementation
function le(s1,s2){
    var p=[];
    var e=Infinity;
    for(var i=0;i<s1.length;i++){
        p.push([]);
        for(var j=0;j<s2.length;j++){
            p[i][j]=0;
        }
    }
    for(var i=0;i<s1.length;i++){
        for(var j=0;j<s2.length;j++){
            if(s1[i]!==s2[j]){
                if(i===0||j===0){
                    p[i][j]=1
                }else{
                    p[i][j]=p[i-1][j-1]+1;
                }
            }else{
                if(i>0&&j>0){
                    p[i][j]=p[i-1][j-1];
                }
            }
            if(i===s1.length-1&&j<s2.length-1){
                p[i][j]=p[i][j]+s2.length-1-j+Math.abs(s1.length-1-j);
            }
            if(i<s1.length-1&&j===s2.length-1){
                p[i][j]=p[i][j]+s1.length-1-i+Math.abs(s2.length-1-i);
            }
            if(i===s1.length-1&&j===s2.length-1){
                p[i][j]=p[i][j]+Math.abs(s1.length-s2.length);
            }
        }
    }
    for(var i=0;i<s1.length;i++){
        if(p[i][s2.length-1]<e){
            e=p[i][s2.length-1];
        }
    }
    for(var i=0;i<s2.length;i++){
        if(p[s1.length-1][j]<e){
            e=p[s1.length-1][j];
        }
    }
    return e;
}
