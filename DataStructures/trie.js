/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
    this.words=0; //can make boolean, or increase everytime it's found to add weight;
    this.pref=0; //can make boolean, or increase eveyrtime it's found to add weight;
    this.children={};
};

var Trie = function() {
    this.root=new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    if(word.length===0){
        return;
    }
    var i=0;
    var node=this.root
    while(i<word.length){
        if(node.children[word[i]]){
            node=node.children[word[i]];
            i++;
        }else{
            break;
        }
    }
    while(i<word.length){
        node.children[word[i]]=new TrieNode();
        node=node.children[word[i]];
        node.pref++;
        i++;
    }
    node.words++;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    var i=0;
    var node=this.root;
    while(i<word.length){
        if(!node.children[word[i]]){
            return false;
        }
        node=node.children[word[i]];
        i++;
    }
    if(node.words>0){
        return true;
    }
    return false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    var i=0;
    var node=this.root;
    while(i<prefix.length){
        if(!node.children[prefix[i]]){
            return false;
        }
        node=node.children[prefix[i]];
        i++;
    }
    if(node.pref>0){
        return true;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */