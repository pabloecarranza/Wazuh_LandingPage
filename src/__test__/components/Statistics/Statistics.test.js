import { it, expect, describe, test } from "vitest";
import { statisticsInfo } from "./../../../components/Statistics/Statistics";

describe("Statistics most has properties", () => {
  const info = statisticsInfo;
  test("most have id", () => {
    expect(info[0]).haveOwnProperty("id");
  });
  test("most have image", () => {
    expect(info[0]).haveOwnProperty("image");
  });
  test("most have title", () => {
    expect(info[0]).haveOwnProperty("title");
  });
  test("most have subtitle", () => {
    expect(info[0]).haveOwnProperty("subtitle");
  });
});
