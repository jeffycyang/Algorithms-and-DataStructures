//Top-Down (recursive) - O(n) time comlexity - n non-memoized calls, each of which is O(1)
var memo=[];

function fib(n){
	if(memo[n]!==undefined){
		return memo[n];
	}
	var f;
	if(n===0){
		f=0;
	}else if(n===1||n===2){
		f=1;
	}else{
		f=fib(n-1)+fib(n-2);
	}
	memo[n]=f;
	return f;
}

//Bottom-Up
var fib=[];
var f;

for(var i=0;i<=n;i++){
	if(i===0){
		f=0;
	}else if(i===1||i===2){
		f=1;
	}else{
		f=fib[i-1]+fib[i-2];
	}
	fib[i]=f;
}
fib[n];

//E.G. DP = recursion + memoization