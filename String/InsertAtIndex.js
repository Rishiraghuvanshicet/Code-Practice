const s = "Geeks";
const c = "A";
const pos = 3;
function IndexIdx(str, ch, p) {
    return str.slice(0,p) + ch + str.slice(p)
}

console.log(IndexIdx(s, c, pos));
