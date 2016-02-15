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