export default interface SessionInterface {
  loggedIn: boolean,
  setStateSession(state: 'yes' | 'no') : void
}