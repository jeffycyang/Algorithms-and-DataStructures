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