//given an integer in the 14-bit range [-8192,8191] return an encoded 4 character string as follows:
//1. add 8192 to change range to [0,16383]
//2. pack that value into two bytes such that the most significant bit of each is cleared (just split down middle since 14 bits and 8 bits is one byte)
//3. convert both bytes to hex and concat together to return a 4-character hex string
function encode(n){
    n+=8192; //this is to change your range from [-8192,8191] to [0,16383]
    
    var x=(n>>>0).toString(2); //coerces to binary
    
    while(x.length<14){ //add leading zeroes to make it 14 bits
        x='0'+x;
    }

    var r=x.slice(0,7); //right half
    var l=x.slice(7); //left half
        
    r=parseInt(r,2); //converts numerical string in base 2 back to decimal
    l=parseInt(l,2); //same for left half
    
    function numToHex(n){ //converts decimal to hex
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
        var h="";
        while(n>0||p>=0){
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
    
    if(r!==0){
        r=numToHex(r);
        while(r.length<2){ //add leading zero if necessary
            r='0'+r;
        }
    }else{
        r='00';
    }
    if(l!==0){
        l=numToHex(l);
        while(l.length<2){ //add leading zero if necessary
            l='0'+l;
        }
    }else{
        l='00';
    }
    
    return r+l;
}

//ex.
encode(2048);
