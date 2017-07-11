/*global describe, it*/
import { expect } from "chai";
import "mocha";

import series from "../src/series";
import take from "../src/take";

describe("take", function() {
    const firstTenInts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    it("should be able to take 0 items from a series", function() {
        const arr = [...take(0, series())];
        expect(arr).to.deep.equal([]);
    });
    it("should be able to take 10 items from a series", function() {
        const arr = [...take(10, series())];
        expect(arr).to.deep.equal(firstTenInts);
    });
    it("should be able to take 10 items from an array", function() {
        const arr = [...take(10, firstTenInts)];
        expect(arr).to.deep.equal(firstTenInts);
    });
    it("should be able to take 10 items from a string", function() {
        const arr = [...take(10, "Hello, world, how")];
        expect(arr).to.deep.equal(Array.from("Hello, wor"));
    });
});
