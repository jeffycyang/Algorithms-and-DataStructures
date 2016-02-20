function numToBinary(n){
    if(n===0){
        return '0';
    }
    var b='';
    var p=Math.floor(Math.log(n)/Math.log(2));
    var d;
    while(p>=0){
        d=Math.floor(n/Math.pow(2,p));
        b=b+d.toString();
        n-=d*Math.pow(2,p);
        p--;
    }
    return b;
}
