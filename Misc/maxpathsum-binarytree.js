var maxPathSum = function(root) {
    var max=Number.NEGATIVE_INFINITY;
    function recurse(n){
        if(n===null){
            return 0;
        }
        var l=recurse(n.left);
        var r=recurse(n.right);
        var subMax=Math.max(n.val,n.val+l,n.val+r);
        max=Math.max(max,subMax,l+r+n.val);
        return subMax;
    }
    recurse(root);
    return max;
};