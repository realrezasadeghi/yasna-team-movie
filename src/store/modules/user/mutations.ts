import { MutationTree } from 'vuex'
import { UserState } from '@/store/modules/user/interface'

export const mutations: MutationTree<UserState> = {
  ADD_SESSION_ID: (state, payload: UserState) => {
    state.sessionId = payload.sessionId
    state.isAuthenticated = true
  },
  CLEAR: (state) => {
    state.sessionId = null
    state.information = null
    state.isAuthenticated = false
  },
  ADD_USER: (state, payload) => {
    state.information = payload
  }
}
