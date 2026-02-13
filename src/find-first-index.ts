function strStr(haystack: string, needle: string): number {
    if (haystack.length < 1 || needle.length < 1 || haystack.length > 10000 || needle.length > 10000) {
        throw new Error("Boundary conditions not met");
    }

    /*if (needle.length > haystack.length) {
        throw new Error("Boundary conditions not met");
    }*/

    let i = 0;
    let k = 0;
    let index = 0;

    while ( i < haystack.length && k < needle.length ) {
        if (haystack[i] === needle[k]) {
            i = i + 1;
            k = k + 1;
        }
        else {
            index = index + 1;
            i = index;
            k = 0;
        }
    }
    if (k === needle.length) {
        return index;
    }
    else {
        return -1;
    }    
};