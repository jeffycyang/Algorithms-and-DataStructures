function maxRainWater(a){
    var b;
    var cs=0;
    var ce=0;
    var w=0;
    while(ce<a.length){
        if(b===undefined){
            b=a[cs];
        }
        if(a[ce]>b){
            for(var i=cs;i<ce;i++){
                w+=b-a[i];
            }
            cs=ce;
            b=a[cs];
        }
        if(ce===a.length-1&&a[ce]<b){
            b=a[ce];
            for(var j=cs+1;j<ce;j++){
                w+=b-a[j];
            }
        }
        ce++;
    }
    return w;
}

maxRainWater([2,1,4,0,3,0,5,0,2]);
