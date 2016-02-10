// var HashFunction=require();

function HashTable(){
	this.storage=[];
}

HashTable.prototype.insert=function(key,val){
	var i=hash(key);
	this.storage[i]=this.storage[i]||[];
	this.storage[i]=val;
};

HashTable.prototype.retrieve=function(key){
	
};

HashTable.prototype.remove=function(key){

};

function hash(){

}
