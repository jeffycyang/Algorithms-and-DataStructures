function longestCommonSubsequence(s1,s2){
    var m=s1.length;
    var n=s2.length;
    var c=[];
    for(var k=0;k<m;k++){
        c.push([]);
        for(var l=0;l<n;l++){
            c[k].push("");
        }
    }
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(s1[i]===s2[j]){
                if(i===0&&j===0){
                    c[i][j]+=s1[i];
                }else{
                    c[i][j]=c[i-1][j-1]+s1[i];
                }
            }else{
                if(i>0&&j===0&&c[i-1][j].length>c[i][0].length){
                    c[i][j]=c[i-1][j];
                }else if(i===0&&j>0&&c[i][j-1].length>c[0][j].length){
                    c[i][j]=c[i][j-1];
                }else if(i>0&&j>0&&c[i-1][j].length>c[i][j-1].length){
                    c[i][j]=c[i-1][j];
                }else if(i>0&&j>0&&c[i][j-1].length>c[i-1][j].length){
                    c[i][j]=c[i][j-1];
                }
            }
        }
    }
    return c[m-1][n-1];
}

longestCommonSubsequence("ABCDFGH","ACEGH");

// cleaner
function lCS(s1,s2){
    var p=[];
    for(var i=0;i<s1.length;i++){
        p.push([]);
        for(var j=0;j<s2.length;j++){
            p[i][j]='';
        }
    }
    for(var i=0;i<s1.length;i++){
        if(s1[i]===s2[0]){
            p[i][0]=s1[i];
        }else{
            if(i>0&&p[i][0].length<p[i-1][0].length){
                p[i][0]=p[i-1][0];
            }
        }
    }
    for(var i=0;i<s2.length;i++){
        if(s1[0]===s2[i]){
            p[0][i]=s2[i];
        }else{
            if(i>0&&p[0][i].length<p[0][i-1].length){
                p[0][i]=p[0][i-1];
            }
        }
    }
    for(var i=1;i<s1.length;i++){
        for(var j=1;j<s2.length;j++){    
            if(s1[i]===s2[j]){
                p[i][j]=p[i-1][j-1]+s1[i];
            }else{
                if(p[i][j-1].length<=p[i-1][j].length){
                    p[i][j]=p[i-1][j];
                }
                if(p[i-1][j].length<=p[i][j-1].length){
                    p[i][j]=p[i][j-1];
                }
            }
        }
    }
    return p[s1.length-1][s2.length-1];
}

lCS('DABCEFGH','ACEGH');
