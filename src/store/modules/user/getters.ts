import { GetterTree } from 'vuex'
import { UserRootState, UserState } from '@/store/modules/user/interface'

export const getters: GetterTree<UserState, UserRootState> = {
  getSessionId: (state) => state.sessionId,
  getInformation: (state) => state.information,
  checkExistSessionId: (state) => !!state.sessionId,
  getIsAuthenticated: (state) => state.isAuthenticated
}
