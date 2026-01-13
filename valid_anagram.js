var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sMap = {};
    let tMap = {};

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] || 0) + 1;
        tMap[t[i]] = (tMap[t[i]] || 0) + 1
    }

    for (let i = 0; i < s.length; i++) {
        if (sMap[s[i]] !== tMap[s[i]]) {
            return false;
        }
    }

    return true;
};