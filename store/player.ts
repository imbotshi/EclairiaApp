export const state = () => ({
  playing: false,
  paused: false,
  pourcentage: 35,
  showMiniature: false,
  currentSong: {
    title: "Afro Militant 3.0",
    id: "",
    username: "Esli Mushida",
    url: "/photo-1531256456869-ce942a665e80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
  },
});

export const mutations = {
  PLAY(state: any) {
    state.playing = true;
  },
  TOGGLE_PLAY(state: any) {
    state.paused = !state.paused;
  },
  SET_POURCENTAGE(state: any, payload: number) {
    state.pourcentage = payload;
  },
  SET_SONG(state: any, payload: any) {
    state.currentSong = payload;
  },
  SET_MINIATURE(state: any, payload: boolean) {
    state.showMiniature = payload;
    state.playing = payload;
  },
  SET_STATUT(state: any) {
    state.paused = !state.paused;
  },
};

export const getters = {
  playerPourcentage: (state: any) => {
    return state.pourcentage;
  },
  currentPlaying: (state: any) => {
    return state.currentSong;
  },
  isMiniatureActive: (state: any) => {
    return state.showMiniature;
  },
  currentStatut: (state: any) => {
    return state.paused;
  },
  isLoading: (state: any) => {
    return state.playing;
  },
};
