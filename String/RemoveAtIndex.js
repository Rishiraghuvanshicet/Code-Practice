const s = "Geeks";
const pos = 3;

function removeIdx(str,  p) {
    return str.slice(0,p) + str.slice(p+1)
}

console.log(removeIdx(s, pos));