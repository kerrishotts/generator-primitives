/**
 * Maps over an iterable, passing the yielded value of the iterable to the mapping function
 *
 * @export
 * @param {IterableIterator<any> | any[] | string} iter       the iterator over which to map
 * @param {function(any, number?):any} fn    mapping function; called with the item and index
 * @returns {IterableIterator<any>}
 * @yields {any}
 */
export default function mapOver(iter: IterableIterator<any> | any[] | string, fn: (item?: any, index?: number) => any): IterableIterator<any>;
