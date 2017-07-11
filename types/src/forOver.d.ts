/**
 * Filters the iterator provided using the function provided via "if",
 * and maps the result using the function provided via "then".
 *
 * @export
 * @param {(IterableIterator<any> | any[] | string)} iter         iterator to map and filter
 * @param {{
 *         if?: (item?: any, index?: number) => boolean;
 *         then?: (item?: any, index?: number) => any;
 *     }} [{
 *         if: when = () => true,
 *         then: map = i => i,
 *     }={}]                                                      filter and map functions
 * @returns {IterableIterator<any>}
 */
export default function forOver(iter: IterableIterator<any> | any[] | string, {if: when, then: map}?: {
    if?: (item?: any, index?: number) => boolean;
    then?: (item?: any, index?: number) => any;
}): IterableIterator<any>;
