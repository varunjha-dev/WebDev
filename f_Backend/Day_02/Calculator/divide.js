//* ┌─────────────────────────────────────────────────────────────────────────────────┐
//* │ 📄 **Calculator/divide.js** - Division Module                                 │
//* └─────────────────────────────────────────────────────────────────────────────────┘

    /**
     * ➗ Division Function - Breaking Down Numbers
     * @param {number} a - Dividend (number being divided)
     * @param {number} b - Divisor (number dividing by)
     * @returns {number} Quotient of a divided by b
     * @throws {Error} Division by zero protection
     */
    const divide = (a, b) => {
        //! Safety check for division by zero
        if (b === 0) {
            throw new Error("🚨 Division by zero is not allowed!");
        }
        return a / b;
    };

    //TODO Export the enhanced divide function
    module.exports = divide;