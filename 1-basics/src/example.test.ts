import { sumPositiveNumbers } from "./example"

describe("when the arguments passed are positive numbers", () => {
    test("should return the right answer", () => {
        // Assert
        expect(sumPositiveNumbers(4, 5)).toBe(9);
    });
});

describe("when one of the arguments is a negative number", () => {
    test("should throw an error", () => {
        let error: any;
        try {
            sumPositiveNumbers(-1, 5);
        } catch (err) {
            error = err;
        }
        expect(error).toBeDefined();
        expect(error.message).toBe("One of the numbers is negative");
    });
});