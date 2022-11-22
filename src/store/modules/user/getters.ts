import { GetterTree } from 'vuex'
import { UserRootState, UserState } from '@/store/modules/user/interface'

export const getters: GetterTree<UserState, UserRootState> = {
  checkExistSessionId: (state) => !!state.sessionId
}
