function islandCount(b){
    var c=0;
    for(var i=0;i<b.length;i++){
        for(var j=0;j<b[0].length;j++){
            if(b[i][j]==='0'){
                c++;
                sink(i,j);
            }
        }
    }
    function sink(x,y){
        if(b[x][y]==='.'){
            return;
        }
        b[x][y]='.';
        if(x+1<b.length){
            sink(x+1,y);
        }
        if(x-1>=0){
            sink(x-1,y);
        }
        if(y+1<b[0].length){
            sink(x,y+1);
        }
        if(y-1>=0){
            sink(x,y-1);
        }
    }
    return c;
}