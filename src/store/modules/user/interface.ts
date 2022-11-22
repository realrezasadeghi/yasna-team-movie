export interface UserRootState {
  version: string
}

export interface UserState {
  sessionId: string,
  isAuthenticated?: boolean
}
