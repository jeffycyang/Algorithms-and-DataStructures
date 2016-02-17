// top down
var memo=[];
function fact(n){
    if(n===0||n===1){
        memo[n]=1;
    }
    if(memo[n]===undefined){
        memo[n]=n*fact(n-1);
    }
    return memo[n];
}
// bottom up
var fact=[];
for(var i=0;i<n;i++){
    if(i===0&&fact[i]===undefined){
        fact[i]=1;
    }else if(i===1&&fact[i]===undefined){
        fact[i]=1;
    }else{
        if(fact[i]===undefined){
            fact[i]=i*fact[i-1]
        }
    }
}
