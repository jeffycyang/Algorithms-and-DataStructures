function Stack(){
	this.storage=[];
}

Stack.prototype.push=function(val){
	this.storage.push(val);
};

Stack.prototype.pop=function(){
	return this.storage.pop();
};

Stack.prototype.size=function(){
	return this.storage.length;
};

module.exports=Stack;
