import { ActionTree } from 'vuex'
import { UserRootState, UserState } from '@/store/modules/user/interface'

export const actions: ActionTree<UserState, UserRootState> = {
  addSessionId: ({ commit }, payload) => {
    commit('ADD_USER', payload)
  }
}
