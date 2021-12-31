// For veryfing if an element exists, use set. instead of array
// Array has O(n2), Set Has O(n)

import { set } from "lodash";

for (const item of items) {
    if(set.has(valueyouresearching)) {
        return valueyouresearching
    }
}