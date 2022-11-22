export const storage = {
  add: (key: string, value: string) => {
    localStorage.setItem(key, value)
  },
  remove: (key: string) => {
    localStorage.removeItem(key)
  },
  get: (key: string) => {
    return localStorage.getItem(key)
  }
}
