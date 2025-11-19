import { writable } from "svelte/store";

function createSidebarStore() {
  const { subscribe, set, update } = writable({
    header: ""
  });

  function setHeader(name) {
    update(state => ({
      ...state,
      header: name
    }));
  }

  return {
    subscribe,
    setHeader,
  };
}

export const sidebarStore = createSidebarStore();
