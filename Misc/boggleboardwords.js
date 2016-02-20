function findAllWords(b,n){
    var words={};
    var wordsa=[];
    for(var i=0;i<b.length;i++){
        for(var j=0;j<b[0].length;j++){
            recurse(i,j,"",[]);
        }
    }
    function recurse(x,y,s,a){
        for(var i=0;i<a.length;i++){
            if(x===a[i][0]&&y===a[i][1]){
                return;
            }
        }
        if(s.length>n){
            return;
        }
        if(dict[s]){
            words[s]=true;
        }
        if(x+1<b.length){
            recurse(x+1,y,s.concat(b[x][y]),a.concat([x,y]));
        }
        if(x-1>=0){
            recurse(x-1,y,s.concat(b[x][y]),a.concat([x,y]));
        }
        if(y+1<b[0].length){
            recurse(x,y+1,s.concat(b[x][y]),a.concat([x,y]));
        }
        if(y-1>=0){
            recurse(x,y-1,s.concat(b[x][y]),a.concat([x,y]));
        }
    }
    for(var word in words){
        wordsa.push(word);
    }
    return wordsa;
}

var dict={
    "bad":true,
    "dab":true,
    "sore":true,
    "sad":true,
    "ear":true
};

var bb=[["s","a","d"],["e","b","e"],["c","d","e"]];

findAllWords(bb,4);