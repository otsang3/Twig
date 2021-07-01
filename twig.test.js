const groupArrayElements = require("./twig");

describe("groupArrayElements.test", () => {
    describe("If the first argument", () => {
        describe("is not an array", () => {
            it("should return undefined", () => {
                expect(groupArrayElements(1, 1)).toEqual(undefined);
            });
        });
        describe("is an empty array", () => {
            it("should return undefined", () => {
                expect(groupArrayElements([], 1)).toEqual(undefined);
            });
        });
    });

    describe("If the second argument", () => {
        describe("is not an int", () => {
            it("should return undefined", () => {
                expect(groupArrayElements([1, 2], [])).toEqual(undefined);
            });
        });
        describe("is equal to 0", () => {
            it("should return undefined", () => {
                expect(groupArrayElements([1, 2], 0)).toEqual(undefined);
            });
        });
    });

    describe("If the size of the original array can be divided equally by 3", () => {
        let result;

        beforeAll(() => {
            result = groupArrayElements([1, 2, 3, 4, 5, 6], 3);
        });

        it("should return the same number elements (3) in the return array", () => {
            expect(result.length).toEqual(3);
        });

        it("should return arrays that contain all the original elements in the argument", () => {
            expect(result).toEqual([
                [1, 2],
                [3, 4],
                [5, 6]
            ]);
        });
    });

    describe("If the size of the original array divided by N is 1.25", () => {
        describe("is 1.25", () => {
            let result;

            beforeAll(() => {
                result = groupArrayElements([1, 2, 3, 4, 5], 4);
            });

            it("should return the 3 elements in the return array", () => {
                expect(result.length).toEqual(3);
            });

            it("should return arrays that contain all the original elements in the argument", () => {
                expect(result).toEqual([[1, 2], [3, 4], [5]]);
            });
        });

        describe("is 1.50", () => {
            let result;

            beforeAll(() => {
                result = groupArrayElements([1, 2, 3, 4, 5, 6], 4);
            });

            it("should return the 3 elements in the return array", () => {
                expect(result.length).toEqual(3);
            });

            it("should return arrays that contain all the original elements in the argument", () => {
                expect(result).toEqual([
                    [1, 2],
                    [3, 4],
                    [5, 6]
                ]);
            });
        });

        describe("is 1.75", () => {
            let result;

            beforeAll(() => {
                result = groupArrayElements([1, 2, 3, 4, 5, 6, 7], 4);
            });

            it("should return the 3 elements in the return array", () => {
                expect(result.length).toEqual(4);
            });

            it("should return arrays that contain all the original elements in the argument", () => {
                expect(result).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
            });
        });
    });
});
