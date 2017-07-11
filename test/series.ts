/*global describe, it*/
import { expect } from "chai";
import "mocha";

import series from "../src/series";

describe("series", function() {
    it("should be a Function", function() {
        expect(series).to.be.an.instanceof(Function);
    });
    it("should return a Generator", function() {
        const generator = series();
        expect(generator).to.exist;
        expect(generator).to.have.property("next").and.be.instanceof(Function);
    });
    it("the first few values should be an increasing integer series starting at zero", function() {
        const generator = series(),
            arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(generator.next().value);
        }
        expect(arr).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
