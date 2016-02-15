function Tree(v){
    this.v=v;
    this.l=null;
    this.r=null;
}

function reverseTree(root){
    if(root===null){
        return null;
    }
    if(root.l){
        reverseTree(root.l);
        root.l.r=root;
    }
    if(root.r){
        reverseTree(root.r);
        root.r.l=root;
    }
    root.l=null;
    root.r=null;
}

var t=new Tree(1);
t.l=new Tree(2);
t.r=new Tree(3);
t.l.l=new Tree(4);
t.l.r=new Tree(5);
t.r.l=new Tree(6);

var a=t.l.l;
var b=t.l.r;
var c=t.r.l;

// console.log(t);

reverseTree(t);

console.log(a);
console.log(b);
console.log(c);
