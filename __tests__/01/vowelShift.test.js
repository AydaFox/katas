const { vowelShift } = require("../../01/vowelShift");

describe("vowelShift", () => {
  test("input string, output string", () => {
    const input = "hello";
    expect(typeof vowelShift(input, 1)).toBe("string");
  });
  test("input string with no vowels, one vowel, or all vowels same, output string with the same letters", () => {
    const input1 = "rhythm";
    const input2 = "gold";
    const input3 = "hellee";
    expect(vowelShift(input1, 1)).toBe("rhythm");
    expect(vowelShift(input2, 1)).toBe("gold");
    expect(vowelShift(input3, 1)).toBe("hellee");
  });
  test("input string when n = 0, output same string", () => {
    const input1 = "star nosed mole";
    expect(vowelShift(input1, 0)).toBe("star nosed mole");
  });
  test("input string with 2 different vowels and n = 1, output string has vowels swapped", () => {
    const input1 = "heal";
    const input2 = "golden";
    expect(vowelShift(input1, 1)).toBe("hael");
    expect(vowelShift(input2, 1)).toBe("geldon");
  });
  test("input string with >2 different vowels and n = 1, output string has vowels shifted once right", () => {
    const input1 = "healed";
    const input2 = "hello child";
    expect(vowelShift(input1, 1)).toBe("heelad");
    expect(vowelShift(input2, 1)).toBe("hille chold");
  });
  test("input string with >2 different vowels and n > 1, output string has vowels shifted right correctly", () => {
    const input1 = "star nosed mole";
    const input2 = "funnily enough";
    expect(vowelShift(input1, 2)).toBe("stor nesad mole");
    expect(vowelShift(input2, 4)).toBe("finnely onuugh");
  });
});
