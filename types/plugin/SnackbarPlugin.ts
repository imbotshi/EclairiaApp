import SnackbarPayload from "../store/payload/SnackbarPayload";

export default interface SnackbarPlugin {
  show(payload: SnackbarPayload): void
}