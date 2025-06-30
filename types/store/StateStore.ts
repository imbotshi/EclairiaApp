import EpisodeState from "./state/EpisodeState";
import SnackbarState from "./state/SnackbarState";

export default interface StateStore {
  episode: EpisodeState,
  snackbar: SnackbarState,
}