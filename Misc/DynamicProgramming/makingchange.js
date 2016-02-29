function makingChange(c){
    var coins=[[1,-1],[5,-1],[10,-1],[25,-1]];
    var p=[];
    for(var i=0;i<coins.length;i++){
        p.push([]);
        for(var j=0;j<=c;j++){
            p[i][j]=0;
            if(i===0){
                if(coins[i][0]<=j){
                    if(p[i][j-coins[i][0]]+coins[i][1]<p[i][j]){
                        p[i][j]=p[i][j-coins[i][0]]+coins[i][1];
                    }else{
                        p[i][j]=p[i][j];
                    }
                }else{
                    p[i][j]=p[i][j]
                }
            }else{
                if(coins[i][0]<=j){
                    if(p[i][j-coins[i][0]]+coins[i][1]>p[i-1][j]){
                        p[i][j]=p[i][j-coins[i][0]]+coins[i][1];
                    }else{
                        p[i][j]=p[i-1][j];
                    }
                }else{
                    p[i][j]=p[i-1][j]
                }
            }
        }
    }
    console.log(p);
    return p[coins.length-1][c]*-1;
}

makingChange(24);