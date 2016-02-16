function longestPalindrome(str){
    var p="";
    function valid(s,e){
        for(var i=0;i<Math.floor((e-s)/2);i++){
            if(str[s+i]!==str[e-i]){
                return false;
            }
        }
        return true;
    }
    for(var i=0;i<str.length;i++){
        for(var j=str.length-1;j>=0;j--){
            if(i<j){
                if(valid(i,j)&&j-i>p.length){
                    p=str.slice(i,j+1);
                }
            }
        }
    }
    return p;
}