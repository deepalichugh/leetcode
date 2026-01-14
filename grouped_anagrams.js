var groupAnagrams = function(strs) {
    let grouped_anagrams = {};
    
    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split('').sort().join();
        if (!(sortedStr in grouped_anagrams)) {
            grouped_anagrams[sortedStr] = [];
        }
        grouped_anagrams[sortedStr].push(strs[i]);
    }

    return Object.values(grouped_anagrams);
};