/**
 * Generates an infinite series
 * @export
 * @yields {number}
 * @returns IterableIterator<number>
 */

export default function* series(): IterableIterator<number> {
    for (let i = 0; ; i++) {
        yield i;
    }
}
