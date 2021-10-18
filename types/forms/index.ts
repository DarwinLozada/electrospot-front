export interface RegisterForm {
  email: string
  password: string
  name: string
}

export interface LoginForm {
  email: string
  password: string
}

export interface SendChangePasswordEmailForm {
  email: string
}

export interface ConfirmChangePasswordForm {
  password: string
}
