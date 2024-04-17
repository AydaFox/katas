const { fillSquare } = require("../../01/fillSquare");

describe("fillSquare", () => {
  test("input an array of arrays, output an array of arrays", () => {
    const input = [[]];
    const output = fillSquare(input);
    expect(Array.isArray(output)).toBe(true);
    output.forEach((subArray) => {
      expect(Array.isArray(subArray)).toBe(true);
    });
  });
  test("input an array with a single empty sub array, output the same nested array", () => {
    const input = [[]];
    const output = [[]];
    expect(fillSquare(input)).toEqual(output);
  });
  test("input an array with a single sub array with a single element, output the same nested array", () => {
    const input = [[5]];
    const output = [[5]];
    expect(fillSquare(input)).toEqual(output);
  });
  test("input an array with a single sub array with 2 elements, output appropriate square with additional sub array", () => {
    const input = [[1, 2]];
    const output = [
      [1, 2],
      [null, null],
    ];
    expect(fillSquare(input)).toEqual(output);
  });
  test("input an array with a single sub array with >2 elements, output appropriate square with additional sub arrays", () => {
    const input1 = [[1, 2, 3]];
    const input2 = [[1, 2, 3, 4, 5, 6, 7]];

    const output1 = [
      [1, 2, 3],
      [null, null, null],
      [null, null, null],
    ];
    const output2 = [
      [1, 2, 3, 4, 5, 6, 7],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];

    expect(fillSquare(input1)).toEqual(output1);
    expect(fillSquare(input2)).toEqual(output2);
  });
  test("input an array of arrays, output appropriate square of sub arrays", () => {
    const input1 = [[1, 2, 3], [1, 2], [1]];
    const input2 = [[1, 2, 3], [1, 2, 3, 4, 5, 6], [1]];

    const output1 = [
      [1, 2, 3],
      [1, 2, null],
      [1, null, null],
    ];
    const output2 = [
      [1, 2, 3, null, null, null],
      [1, 2, 3, 4, 5, 6],
      [1, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ];

    expect(fillSquare(input1)).toEqual(output1);
    expect(fillSquare(input2)).toEqual(output2);
  });
  test("input array must be unmutated", () => {
    const input = [[1, 2, 3], [1, 2], [1]];
    const expected = [[1, 2, 3], [1, 2], [1]];

    fillSquare(input);

    expect(input).toEqual(expected);
  });
});
