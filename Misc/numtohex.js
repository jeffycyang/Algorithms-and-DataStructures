function numToHex(n){
    if(n===0){
        return '0';
    }
    var c={
        10:'A',
        11:'B',
        12:'C',
        13:'D',
        14:'E',
        15:'F'
    };
    var p=Math.floor(Math.log(n)/Math.log(16));
    var d;
    var h='';
    while(p>=0){
        d=Math.floor(n/Math.pow(16,p));
        if(d<10){
            h=h+d.toString();
        }else{
            h=h+c[d];
        }
        n-=d*Math.pow(16,p);
        p--;
    }
    return h;
}