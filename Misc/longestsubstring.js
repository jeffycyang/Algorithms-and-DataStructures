// given a string (of all lower case letters), find the longest substring such that it contains
// 1) any number of the most frequent character
// 2) at most 2 of the second most frequent character
// 3) none of any other character

function longestSubString(str){
    var t;
    var s="";
    var start=0;
    var end=0;
    var dict={};
    var alph="abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<alph.length;i++){
        dict[alph[i]]=0;
    }
    function valid(){
        t=[];
        for(var l in dict){
            if(dict[l]!==0){
                t.push(dict[l]);
            }
        }
        if(t.length>2){
            return false;
        }
        if(t.length===2){
            return Math.min(t[0],t[1])<=2;
        }
        return true;
    }
    while(end<str.length){
        if(valid()){
            dict[str[end]]++;
            end++;
        }
        if(valid()&&end-start>s.length){
            s=str.slice(start,end);
        }
        if(!valid()){
            dict[str[start]]--;
            start++;
        }
    }
    return s;
}
