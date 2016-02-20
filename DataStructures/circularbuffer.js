//with array
function CircularBuffer(len){
    this.stor=new Array(len);
    //pointers
    this.writep=0;
    this.readp;
}

CircularBuffer.prototype.write=function(data){
    if(this.writep===this.stor.length){
        this.writep=0;
        this.readp=this.readp||0;
    }
    if(this.writep===this.readp){
        return;
    }
    this.stor[this.writep++]=data;
};

CircularBuffer.prototype.remove=function(){
    if(this.writep===this.stor.length){
        this.writep=0;
        this.readp=this.readp||0;
    }
    if(this.writep===this.readp){
        return;
    }
    delete this.stor[this.writep++];
};

CircularBuffer.prototype.read=function(){
    this.readp=this.readp||0;
    if(this.readp===this.stor.length){
        this.readp=0;
    }
    return this.stor[this.readp++];
};

//with linked list structure
function CircularBuffer(cap){
    this.cap=cap||1;
    this.i=0;
    //pointers
    this.head=null;
    this.writep;
    this.readp;
}

CircularBuffer.prototype.write=function(data){
    if(!(data instanceof Node)){
        data=new Node(data);
    }
    if(this.writep){
        if(this.i===this.cap){
            if(this.readp===this.head){
                return;
            }
            data.next=this.head.next
            this.head=data;
            this.i=0;
        }
        if(this.writep.next===this.readp){
            return;
        }
        if(this.writep.next){
            data.next=this.writep.next.next;
        }
        this.writep.next=data;
        this.writep=this.writep.next;
    }
    if(!this.head){
        this.head=data;
        this.writep=data;
        this.readp=data;
    }
    this.i++;
};

CircularBuffer.prototype.remove=function(){
    
};

CircularBuffer.prototype.read=function(){
    this.readp=this.readp||this.head;
    if(this.readp){
        var data=this.readp.data;
        this.readp=this.readp.next;
        return data;
    }
};

function Node(data){
    this.data=data;
    this.next=null;
}
