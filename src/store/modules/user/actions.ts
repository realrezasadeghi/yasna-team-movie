import { ActionTree } from 'vuex'
import { UserRootState, UserState } from '@/store/modules/user/interface'

export const actions: ActionTree<UserState, UserRootState> = {
  addSessionId: ({ commit }, payload) => {
    commit('ADD_SESSION_ID', payload)
  },
  clear: ({ commit }) => {
    commit('CLEAR')
  },
  addUser: ({ commit }, payload) => {
    commit('ADD_USER', payload)
  }
}
