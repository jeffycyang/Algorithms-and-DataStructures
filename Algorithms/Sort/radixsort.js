// radix sort for base 10, k is the number of places to consider
function radixSort(a,k){
    // b is buckets for digits
    var b=[];
    for(var j=0;j<10;j++){
        b.push([]);
    }
    var p=1;
    while(p<=k){
        while(a.length>0){
            if(p>1){
                b[Math.floor(a[0]%Math.pow(10,p)/Math.pow(10,p-1))].push(a.shift());
            }else{
                b[a[0]%Math.pow(10,p)].push(a.shift());
            }
        }
        for(var i=0;i<b.length;i++){
            while(b[i].length>0){
                a.push(b[i].shift());
            }
        }
        p++;
    }
    return a;
}

radixSort([3,213,5,74,9],3);
