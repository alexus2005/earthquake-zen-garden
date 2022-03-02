import { formatTime } from "./time.service";

describe("time.service test suite", () => {
  test("should format time correctly", () => {
    const time = new Date(2022, 2, 1, 0, 0, 0, 0).getTime();
    const expectedResultingString = "Mar 1, 2022, 12:00 AM";

    const result = formatTime(time);

    expect(result).toEqual(expectedResultingString);
  });
});
