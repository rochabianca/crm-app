import { structure } from "@/store";
import { cloneDeep } from "lodash";
import Vuex from "vuex";

import { collections } from "@/lib/firebase";
jest.mock("@/lib/firebase");
collections.contacts.get.mockResolvedValue([]);

function factory() {
  const clone = cloneDeep(structure);
  return new Vuex.Store(clone);
}
describe("mutations", () => {
  test("#addContact", () => {
    const store = factory();
    store.commit("addContact", { name: "phil" });
    expect(store.state.contacts.all()).toEqual([{ name: "phil" }]);
  });
});

describe("state", () => {
  test("contacts in a empty collection", () => {
    const store = factory();
    expect(store.state.contacts.all()).toEqual([]);
  });
});
