import AuthMiddlewareType from "~/utils/types/middleware/AuthMiddlewareType"

export default ({ $session, redirect }: AuthMiddlewareType) => {
  if ($session.loggedIn) {
    redirect('/app')
  }
}