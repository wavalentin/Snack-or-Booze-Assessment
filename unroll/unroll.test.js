const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  test("Unroll square array with 4x4 elements", () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];

    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    const result = unroll(square);

    expect(result).toEqual(expected);
  });

  test("Unroll square array with 2x2 elements", () => {
    const square = [
      ["a", "b"],
      ["c", "d"],
    ];

    const expected = ["a", "b", "d", "c"];
    const result = unroll(square);

    expect(result).toEqual(expected);
  });

  test("Unroll square array with 3x3 elements", () => {
    const square = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    const result = unroll(square);

    expect(result).toEqual(expected);
  });
});
