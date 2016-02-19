// items = [[w0,v0],[w1,v1],[w2,v2]...]
// find maximum v such that sum of w is less than limit
function knapSack(items,limit){
    var v=0;
    var m=[];
    items.sort(function(x,y){return x[0]-y[0];});
    for(var i=0;i<items.length;i++){
        p.push([]);
        for(var j=0;j<limit;j++){
            p[i][j]=0;
        }
    }
    for(var i=0;i<items.length;i++){
        for(var j=0;j<limit;j++){
            
        }
    }
    return v;
}