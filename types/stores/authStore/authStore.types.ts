export interface AuthStore {
  name: string
  setName: (name: string) => void
  email: string
  setEmail: (email: string) => void
}
