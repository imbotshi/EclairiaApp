export const state = () => ({
  menu: "home",
});

export const mutations = {
  SET_MENU(state: any, payload: string) {
    state.menu = payload;
  },
};

export const getters = {
  selectedMenu: (state: any) => {
    return state.menu;
  },
};
