function spiralTraversal(mat){
  var a=[];
  function recurse(m){
    if(m.length===0){
      return;
    }
    a=a.concat(m.shift());
    if(m.length===0){
      return;
    }    
    for(var i=0;i<m.length-1;i++){
      if(m[i].length>0){
        a.push(m[i].pop());
      }
    }
    if(m.length===0){
      return;
    }
    a=a.concat(m.pop().reverse());
    if(m.length===0){
      return;
    }
    for(var i=m.length-1;i>0;i--){
      if(m[i].length>0){
        a.push(m[i].shift());
      }
    }
    recurse(m);
  }
  recurse(mat);
  return a;
}

spiralTraverse([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);
