// recursive - VERY SLOW need to use dp
var wordBreak = function(s, wordDict) {
    sent=[];
    function recurse(cw,cs,ind,ns){
        if(ind===s.length&&cs[cs.length-1]===s[s.length-1]&&cs.length-ns===s.length){
            sent.push(cs);
            return;
        }
        for(var i=ind;i<s.length;i++){
            if(wordDict.has(cw+s[i])){
                if(i!==s.length-1){
                    recurse("",cs+cw+s[i]+" ",i+1,ns+1);
                }else{
                    recurse("",cs+cw+s[i],i+1,ns);
                }
            }
            recurse(cw+s[i],cs,i+1,ns);
        }
    }
    recurse("","",0,0);
    return sent;
};
var s=new Set(["cat","cats","and","sand","dog"]);
wordBreak("catsanddog",s);
