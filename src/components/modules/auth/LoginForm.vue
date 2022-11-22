<script setup lang="ts">
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { storage } from '@/utils'
import { useRouter } from 'vue-router'
import { LoginInterfaceDto } from '@/api'
import BaseTextField from '@/components/base/BaseTextField.vue'
import { useCreateSessionIdAPI, useGetRequestTokenAPI, useLoginAPI } from '@/composables'

const user = reactive<LoginInterfaceDto>({
  username: 'rezasadeghi',
  password: 'reza1234',
  request_token: ''
})
const store = useStore()
const router = useRouter()

const { mutate: createSessionId } = useCreateSessionIdAPI({
  onSuccess: (data) => {
    router.push({
      path: '/account',
      replace: true
    })
    store.dispatch('addSessionId', { sessionId: data.session_id })
  }
})
const { mutate: loginUser } = useLoginAPI({
  onSuccess: (data) => {
    createSessionId({ request_token: data.request_token })
    const payload = {
      request_token: data.request_token,
      expires_at: data.expires_at
    }
    storage.add('user', JSON.stringify(payload))
  }
})
const { data: dataRequestToken } = useGetRequestTokenAPI()

const onSubmitLogin = () => {
  user.request_token = dataRequestToken?.value?.request_token as string
  loginUser({ ...user })
}
</script>

<template>
  <div class="login-form">
    <h1 class="login-form__title">
      Login
    </h1>
    <form class="login-form__body" @submit.prevent="onSubmitLogin">
      <base-text-field v-model="user.username" label="Username"/>
      <base-text-field v-model="user.password" label="Password"/>
      <button type="submit" class="login-form__submit">Submit</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.login-form {
  width: 100%;
  height: 100%;
  gap: $dim-normal;
  @include flex(column, center, center);

  &__title {
    letter-spacing: 2px;
  }

  &__body {
    width: 500px;
    max-width: 100%;
    gap: $dim-normal;
    @include flex(column, center, center);
  }

  &__submit {
    border: none;
    font-size: $dim-small;
    cursor: pointer;
    letter-spacing: 2px;
    color: $color-white;
    border-radius: $dim-large;
    text-transform: uppercase;
    transition: all 0.2s ease-in;
    background-color: $color-success;
    padding: $spacing-xsmall $spacing-xlarge;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
