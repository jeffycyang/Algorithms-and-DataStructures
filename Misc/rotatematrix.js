// rotate square matrix clockwise
function rotateMatrixCW(mat){
    var rmat=[];
    var m=mat.length;
    var n=mat[0].length
    for(var i=0;i<m;i++){
        rmat.push([]);
        for(var j=0;j<n;j++){
            rmat[i][j]=mat[m-j-1][i];
        }
    }
    return rmat;
}
// rotate square matrix counterclockwise
function rotateMatrixCCW(mat){
    var rmat=[];
    var m=mat.length;
    var n=mat[0].length
    for(var i=0;i<m;i++){
        rmat.push([]);
        for(var j=0;j<n;j++){
            rmat[i][j]=mat[j][n-i-1];
        }
    }
    return rmat;
}
// rotate matrix clockwise (doens't have to be square)
function rotateNSqMatrixCW(mat){
    var rmat=[];
    var m=mat.length;
    var n=mat[0].length
    for(var i=0;i<n;i++){
        rmat.push([]);
        for(var j=0;j<m;j++){
            rmat[i][j]=mat[m-j-1][i];
        }
    }
    return rmat;
}
// rotate matrix counterclockwise (doens't have to be square)
function rotateNSqMatrixCCW(mat){
    var rmat=[];
    var m=mat.length;
    var n=mat[0].length
    for(var i=0;i<n;i++){
        rmat.push([]);
        for(var j=0;j<m;j++){
            rmat[i][j]=mat[j][n-i-1];
        }
    }
    return rmat;
}
