import { it, expect, describe, test } from "vitest";
import { cardsInfo } from "../../../components/EndpointCloud/EndpointCloud";

describe("Cards information Endpoints & Cloud", () => {
  const info = cardsInfo;
  test("most have id", () => {
    expect(info[0]).haveOwnProperty("id");
  });
  test("most have image", () => {
    expect(info[0]).haveOwnProperty("image");
  });
  test("most have title", () => {
    expect(info[0]).haveOwnProperty("title");
  });
  test("most have subtitle1", () => {
    expect(info[0]).haveOwnProperty("subtitle1");
  });
  test("most have subtitle2", () => {
    expect(info[0]).haveOwnProperty("subtitle2");
  });
  test("most have subtitle3", () => {
    expect(info[0]).haveOwnProperty("subtitle3");
  });
});
