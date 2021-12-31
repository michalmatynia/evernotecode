// Colt Steele Implementation
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];

        lookup[letter] ? lookup[letter] += 1 : lookup = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i]

        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

}

// My Implementation
function validAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false
    }

    let freqCounter1 = {}
    let freqCounter2 = {}

    for (i = 0; i < str1.length; i++) {

        freqCounter1[str1[i]] = (freqCounter1[str1[i]] || 0) + 1
    }
    for (j = 0; j < str2.length; j++) {

        freqCounter2[str2[j]] = (freqCounter2[str2[j]] || 0) + 1
    }

    for (const [key,value] of Object.entries(freqCounter1)) {

        console.log(key)
        console.log(value)

        if (!(key in freqCounter2)) {
            return false
        }

        if (freqCounter1[key] !== freqCounter2[key])
            return false

    }

    return true

}

validAnagram('lol', 'oll')
