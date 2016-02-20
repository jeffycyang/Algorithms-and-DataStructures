//items = [[w0,v0],[w1,v1],[w2,v2]...]
//find maximum v such that sum of w is less than limit
function knapSack(items,limit){
    items.sort(function(x,y){return x[0]-y[0];});
    var maxvalatweight=[];
    for(var i=0;i<=limit;i++){
        maxvalatweight[i]=0;
    }
    var currmax=0;
    var maxvalwithitem=0;
    for(var i=0;i<=limit;i++){
        currmax=0;
        for(var j=0;j<items.length;j++){
            if(items[j][0]<=i){
                maxvalwithitem=items[j][1]+maxvalatweight[i-items[j][0]];
            }
            currmax=Math.max(maxvalwithitem,currmax);
        }
        maxvalatweight[i]=currmax;
    }
    return maxvalatweight[limit];
}

knapSack([[1,5],[2,3],[4,3],[3,5]],20);

//2-D path DP
//items=[[w0,v0],[w1,v1],...]
function knapSack(items,limit){
    var p=[];
    for(var i=0;i<items.length;i++){
        p.push([]);
        for(var j=0;j<=limit;j++){
            p[i][j]=0;
        }
    }
    for(var i=0;i<items.length;i++){
        for(var j=0;j<=limit;j++){
            if(i===0){
                if(j>=items[i][0]){
                    if(items[i][1]+p[i][j-items[i][0]]>p[i][j]){
                        p[i][j]=items[i][1]+p[i][j-items[i][0]];
                    }
                }
            }
            if(i>0){
                if(j>=items[i][0]){
                    if(items[i][1]+p[i-1][j-items[i][0]]>p[i-1][j]){
                        p[i][j]=items[i][1]+p[i-1][j-items[i][0]];
                    }else{
                        p[i][j]=p[i-1][j];
                    }
                }else{
                    p[i][j]=p[i-1][j];
                }
            }
        }
    }
    return p[items.length-1][limit];
}