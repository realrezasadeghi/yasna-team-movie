import { InjectionKey } from 'vue'

import { Module, Store } from 'vuex'
import { UserRootState, UserState } from '@/store/modules/user/interface'

import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state: UserState = {
  sessionId: '',
  isAuthenticated: false
}
export const KEY_USER_STORE: InjectionKey<Store<UserState>> = Symbol('')

export const user: Module<UserState, UserRootState> = {
  state,
  actions,
  getters,
  mutations
}
