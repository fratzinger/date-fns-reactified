import assert from "assert";
import * as reactified from "../src";
import * as dateFns from "date-fns";

describe("index", function() {
  it("exports same members", function() {
    const reactifiedMembers = Object.keys(reactified).sort();
    const nativeMembers = Object.keys(dateFns).sort()

    assert.deepStrictEqual(
      reactifiedMembers,
      nativeMembers
    )
  })
});