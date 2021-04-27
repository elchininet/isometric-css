/*eslint no-fallthrough: ["error", { "commentPattern": "break[\\s\\w]*omitted" }]*/

export const kebab = (prop: string): string => prop.replace(/[A-Z]/g, '-$&').toLowerCase();

// Taken from @emotion/hash package
// https://github.com/emotion-js/emotion/blob/f08dfda3fb62738836c1933e87e72abe7cf8e392/next-packages/hash/src/index.js
// Which is inspired in murmurhash (https://github.com/garycourt/murmurhash-js)
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
export const hash = (str: string): string => {

    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.

    // const m = 0x5bd1e995;
    // const r = 24;

    // Initialize the hash

    let h = 0;

    // Mix 4 bytes at a time into the hash

    let k;
    let i = 0;
    let len = str.length;

    for (; len >= 4; ++i, len -= 4) {
        k =
            (str.charCodeAt(i) & 0xff) |
            ((str.charCodeAt(++i) & 0xff) << 8) |
            ((str.charCodeAt(++i) & 0xff) << 16) |
            ((str.charCodeAt(++i) & 0xff) << 24);

        /* Math.imul(k, m): */
        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0xe995) << 16);

        k ^= /* k >>> r: */ k >>> 24;

        h =
            /* Math.imul(k, m): */
            ((k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0xe995) << 16)) ^
            /* Math.imul(h, m): */
            ((h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16));
    }

    // Handle the last few bytes of the input array
    switch (len) {
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
            // break omitted
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
            // break omitted
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            /* Math.imul(h, m): */
            h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16);
    }

    // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.

    h ^= h >>> 13;

    /* Math.imul(h, m): */
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0xe995) << 16);

    return ((h ^ (h >>> 15)) >>> 0).toString(36);

};