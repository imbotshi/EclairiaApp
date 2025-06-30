import AuthMiddlewareType from "~/utils/types/middleware/AuthMiddlewareType"

export default ({ $session, redirect, route, $cookies }: AuthMiddlewareType) => {
  if (!$session.loggedIn) {

    $cookies.set('__FROM_REDIRECT__', route.path)
    $cookies.set('__UNAUTHORIZED__', 1)

    redirect('/login')
  }
}