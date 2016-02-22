function longestCommonSubstring(s1,s2){
    var p=[];
    var ls='';
    for(var i=0;i<s1.length;i++){
        p.push([]);
        for(var j=0;j<s2.length;j++){
            p[i][j]='';
        }
    }
    for(var i=0;i<s1.length;i++){
        for(var j=0;j<s2.length;j++){
            if(s1[i]===s2[j]){
                if(i>0&&j>0){
                    p[i][j]=p[i-1][j-1]+s1[i];
                    if(p[i][j].length>ls.length){
                        ls=p[i][j];
                    }
                }else{
                    p[i][j]+=s1[i];
                }
            }
        }
    }
    return ls;
}   

longestCommonSubstring('aaabceftwd','dabcefsxy');