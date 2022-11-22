import { MutationTree } from 'vuex'
import { UserState } from '@/store/modules/user/interface'

export const mutations: MutationTree<UserState> = {
  ADD_USER: (state, payload: UserState) => {
    state.sessionId = payload.sessionId
  }
}
