/**
 * Take n items from the passed iterable
 *
 * @export
 * @param {number} n                    number of items to take
 * @param {IterableIterator<any> | any[]} iter  iterable to take from
 * @returns {IterableIterator<any>}
 * @yields {any}
 */
export default function* take(
    n: number,
    iter: IterableIterator<any> | any[] | string
): IterableIterator<any> {
    let c = 0;
    if (n <= 0) return;
    for (const i of iter) {
        yield i;
        if (++c >= n) break;
    }
}
