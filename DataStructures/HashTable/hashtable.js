function HashTable(){
	this.storage=[];
	this.limit=1000;
	this.size=0;
}

HashTable.prototype.insert=function(key,val){
	var ind=hash(key,this.limit);
	var exist=false;
	this.storage[ind]=this.storage[ind]||[];
	for(var i=0;i<this.storage[ind].length;i++){
		if(this.storage[ind][i][0]===key){
			exist=true;
			this.storage[ind][i][1]=val;
			return;
		}
	}
	if(!exist){
		this.storage[ind].push([key,val]);
		this.size++;
	}
};

HashTable.prototype.retrieve=function(key){
	var ind=hash(key,this.limit);
	if(!this.storage[ind]){
		return null;
	}
	for(var i=0;i<this.storage[ind].length;i++){
		if(this.storage[ind][i][0]===key){
			return this.storage[ind][i][1];
		}
	}
	return null;
};

HashTable.prototype.remove=function(key){
	var ind=hash(key,this.limit);
	if(!this.storage[ind]){
		return null;
	}
	for(var i=0;i<this.storage[ind].length;i++){
		if(this.storage[ind][i][0]===key){
			var val=this.storage[ind][i][1];
			this.storage[ind].splice(i,1);
			this.size--;
			return val;
		}
	}
	return null;
};

function hash(str,max){
	var h=0;
	for(var i=0;i<str.length;i++) {
		h=(h<<5)+h+str.charCodeAt(i);
		h=h&h; // Convert to 32bit integer
		h=Math.abs(h);
	}
	return h%max;
}

module.exports=HashTable;
