export interface UserRegister {
  email: string,
  password: string,
  password_confirm: string,
  default_language: string | number,
  user_location: string | number,
  email_source: string | number,
  screen_name: string,
  accept_tos: string | number
}

export interface LoginCredentials {
  username_or_email: string,
  password: string
}