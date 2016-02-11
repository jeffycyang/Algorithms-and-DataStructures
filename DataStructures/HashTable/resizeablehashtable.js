var HashTable=require('./hashtable');

function ResizeableHashTable(){
	HashTable.call(this);
	this.limit=4;
	this.resizing=false;
}

ResizeableHashTable.prototype=Object.create(HashTable.prototype);

ResizeableHashTable.prototype.constructor=ResizeableHashTable;

ResizeableHashTable.prototype.resize=function(limit){
	var prevStorage=this.storage.slice();
	this.limit=limit;
	this.storage=[];
	this.size=0;
	for(var i=0;i<prevStorage.length;i++){
		if(prevStorage[i]){
			for(var j=0;j<prevStorage[i].length;j++){
				this.insert(prevStorage[i][j][0],prevStorage[i][j][1]);
			}
		}
	}
}

ResizeableHashTable.prototype.inheritedInsert=HashTable.prototype.insert;

ResizeableHashTable.prototype.inheritedRemove=HashTable.prototype.remove;

ResizeableHashTable.prototype.insert=function(key,val){
	this.inheritedInsert(key,val);
	if(this.size>=0.75*this.limit){
		this.resize(this.limit*2);
	}
};

ResizeableHashTable.prototype.retrieve=HashTable.prototype.retrieve;

ResizeableHashTable.prototype.remove=function(key){
	var val=this.inheritedRemove(key);
	if(this.size<=0.25*this.limit){
		this.resize(this.limit/2);
	}
	return val;
};

function hash(str,max){
	var h=0;
	for(var i=0;i<str.length;i++) {
		h=(h<<5)+h+str.charCodeAt(i);
		h=h&h;
		h=Math.abs(h);
	}
	return h%max;
}

module.exports=ResizeableHashTable;
