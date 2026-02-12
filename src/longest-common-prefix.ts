type TrieNode = {
    children: {
        [k: string]: TrieNode
    },
    isEnd: boolean;
}

class Trie {
    root: TrieNode
    constructor() {
        this.root = {
            children: {},
            isEnd: false
        }
    }

    insert(word: string): void {
        let node: TrieNode = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = {
                    children: {},
                    isEnd: false
                } 
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    longest_common_prefix(): string {
       let longestCommonPrefix: string = "";
       let node: TrieNode = this.root;
       while (!node.isEnd) {
        if (Object.keys(node.children).length === 1) {
            longestCommonPrefix += Object.keys(node.children)[0];
            node = node.children[Object.keys(node.children)[0]!]!;
        }
        else if (Object.keys(node.children).length > 1) {
            break;
        }
       }
       return longestCommonPrefix;                                                                      
    }
}

let words: string[] = ["flower", "flow", "floght"]
const trie = new Trie();
for (let word of words) {
    trie.insert(word);
}
console.log(trie.root);
console.log(trie.longest_common_prefix());