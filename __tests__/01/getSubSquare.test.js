const { getSubSquare } = require("../../01/getSubSquare");

describe("getSubSquare", () => {
  test("input matrix should output a 3*3 matrix", () => {
    const matrix = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];

    const output = getSubSquare(matrix, 0, 0);

    expect(Array.isArray(output)).toBe(true);
    expect(output).toHaveLength(3);
    output.forEach((subArray) => {
      expect(subArray).toHaveLength(3);
    });
  });
  test("input 3*3 matrix and (0,0) should output a new matrix with the same values", () => {
    const matrix = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];

    const output = getSubSquare(matrix, 0, 0);

    expect(output).toEqual(matrix);
    expect(output).not.toBe(matrix);
    output.forEach((subArray, i) => {
        expect(subArray).not.toBe(matrix[i]);
    });
  });
  test("input a larger matrix and (0,0) should output the correct 3*3 matrix", () => {
    const matrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];
    const expected = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];

    expect(getSubSquare(matrix, 0, 0)).toEqual(expected);
  });
  test("input 3*3 matrix and different coordinates should output a new matrix with null values making up the empty array coordinates", () => {
    const matrix = [
      [5, 3, 4],
      [6, 7, 2],
      [1, 9, 8],
    ];
    const expected1 = [
      [3, 4, null],
      [7, 2, null],
      [9, 8, null],
    ];
    const expected2 = [
      [6, 7, 2],
      [1, 9, 8],
      [null, null, null],
    ];
    const expected3 = [
      [8, null, null],
      [null, null, null],
      [null, null, null],
    ];

    const output1 = getSubSquare(matrix, 1, 0);
    const output2 = getSubSquare(matrix, 0, 1);
    const output3 = getSubSquare(matrix, 2, 2);

    expect(output1).toEqual(expected1);
    expect(output2).toEqual(expected2);
    expect(output3).toEqual(expected3);
  });
  test("input a larger matrix and coordinates should output the correct 3*3 matrix", () => {
    const matrix = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 4, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];
    const expected1 = [
      [3, 9, 2],
      [1, 5, 3],
      [7, 4, 1],
    ];
    const expected2 = [
      [4, 2, 5],
      [4, 1, 4],
      [5, 3, 7],
    ];

    expect(getSubSquare(matrix, 2, 5)).toEqual(expected1);
    expect(getSubSquare(matrix, 4, 2)).toEqual(expected2);
  });
});
