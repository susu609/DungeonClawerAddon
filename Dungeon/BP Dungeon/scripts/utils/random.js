let seed = 1;

export function setRandomSeed(value) {
    seed = value;
}

export function random() {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
}
