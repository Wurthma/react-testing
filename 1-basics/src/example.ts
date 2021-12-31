export const sumPositiveNumbers = (number1: number, number2: number) => {
    if (number1 < 0 || number2 < 0) {
        throw new Error("One of the numbers is negative");
    }
    return number1 + number2;
}