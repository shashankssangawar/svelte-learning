import { writable } from "svelte/store";

function createAuthStore() {
  const { subscribe, set, update } = writable({
    user: {
      name: "Shashank",
      email: "shashank@domain.com",
      avatar: "/avatars/pfp.jpg",
    }
  });

  function setUser(newData) {
    update(state => ({
      ...state,
      user: newData
    }));
  }

  return {
    subscribe,
    setUser,
  };
}

export const authStore = createAuthStore();
