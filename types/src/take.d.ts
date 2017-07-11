/**
 * Take n items from the passed iterable
 *
 * @export
 * @param {number} n                    number of items to take
 * @param {IterableIterator<any> | any[]} iter  iterable to take from
 * @returns {IterableIterator<any>}
 * @yields {any}
 */
export default function take(n: number, iter: ArrayLike<any>): IterableIterator<any>;
