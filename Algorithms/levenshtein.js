function levenshtein(s1,s1_len,s2,s2_len){
    var cost;
    if(s1_len===0){
        return s2_len;
    }
    if(s2_len===0){
        return s1_len;
    }
    if(s1[s1_len-1]===s2[s2_len-1]){
        cost=0;
    }else{
        cost=1;
    }
    return Math.min(levenshtein(s1,s1_len-1,s2,s2_len)+1,levenshtein(s1,s1_len,s2,s2_len-1)+1,levenshtein(s1,s1_len-1,s2,s2_len-1)+cost);
}

levenshtein("kitten",6,"sitting",7);
