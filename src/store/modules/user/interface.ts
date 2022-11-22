import { AccountResultInterfaceModel } from '@/api'

export interface UserRootState {
  version: string
}

export type InformationStore = Pick<AccountResultInterfaceModel, 'username' | 'id'> & { avatar?: string }

export interface UserState {
  sessionId: string | null,
  isAuthenticated?: boolean
  information: InformationStore | null,
}
