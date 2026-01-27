function checkAlphaNumeric(s) {
    return (s >= 'a' && s <= 'z')
        || (s >= 'A' && s <= 'Z')
        || (s >= '0' && s <= '9');
}

var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (!checkAlphaNumeric(s[i])) {
            i++;
            continue;
        }

        if (!checkAlphaNumeric(s[j])) {
            j--;
            continue;
        }

        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};