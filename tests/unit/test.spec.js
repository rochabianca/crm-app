function add(a, b) {
  return Number(a) + Number(b);
}

describe("number function", () => {
  test("add", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("add parses strings", () => {
    expect(add(1, "2")).toBe(3);
  });
});
