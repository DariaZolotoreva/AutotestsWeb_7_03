const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  test("Without params throws exception", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });
});

describe("Books names test suit negative", () => {
  it("Naming a workbook without sorting", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Волшебник изумрудного города",
        "Гарри Поттер",
      ])
    ).toEqual(["Волшебник изумрудного города", "Гарри Поттер", "Гарри Поттер"]);
  });
});
