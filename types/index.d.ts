declare const _default: {
    filterOver: (iter: string | any[] | IterableIterator<any>, fn: (item?: any, index?: number) => boolean) => IterableIterator<any>;
    forOver: (iter: string | any[] | IterableIterator<any>, {if: when, then: map}?: {
        if?: (item?: any, index?: number) => boolean;
        then?: (item?: any, index?: number) => any;
    }) => IterableIterator<any>;
    mapOver: (iter: string | any[] | IterableIterator<any>, fn: (item?: any, index?: number) => any) => IterableIterator<any>;
    series: () => IterableIterator<number>;
    take: (n: number, iter: ArrayLike<any>) => IterableIterator<any>;
};
export default _default;
