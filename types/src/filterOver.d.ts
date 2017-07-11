/**
 * Filters out unwanted items from an iterable
 *
 * @export
 * @param {IterableIterator<any> | any | string}  iter            iterable to filter
 * @param {function(any, number?):boolean} fn     filtering function; return false to filter out
 * @returns {IterableIterator<any>}
 * @yields {any}
 */
export default function filterOver(iter: IterableIterator<any> | any[] | string, fn: (item?: any, index?: number) => boolean): IterableIterator<any>;
