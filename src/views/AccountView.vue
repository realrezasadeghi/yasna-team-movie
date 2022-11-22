<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useGetDetailsAccountAPI } from '@/composables'
import { InformationStore } from '@/store/modules/user/interface'

const store = useStore()
const router = useRouter()

const sessionId = computed(() => store.getters.getSessionId)
const { data: account } = useGetDetailsAccountAPI({ session_id: sessionId.value }, {
  onSuccess: (data) => {
    const payload: InformationStore = {
      id: data.id,
      username: data.username,
      avatar: data.avatar.tmdb.avatar_path
    }
    store.dispatch('addUser', payload)
  }
})
const avatar = computed(() => `https://image.tmdb.org/t/p/w500${account?.value?.avatar.tmdb.avatar_path}`)

const onClickLogout = () => {
  store.dispatch('clear')
  router.push({
    path: '/login',
    replace: true
  })
}
</script>

<template>
  <div class="account-view">
    <template v-if="account">
      <div class="account-view__body">
        <img class="account-view__avatar" :src="avatar" :alt="account.username">
        <h1 v-if="account.name" class="account-view__title">
          {{ account.name }}
        </h1>
        <span class="account-view__subtitle">{{ account.username }}</span>
        <button class="account-view__logout" @click="onClickLogout">logout</button>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.account-view {
  width: 100%;
  height: 100%;
  @include flex(row, center, center);

  &__body {
    width: auto;
    gap: $dim-normal;
    position: relative;
    background: $color-white;
    padding: $spacing-normal;
    border-radius: $dim-small;
    box-shadow: 0 0 10px -8px rgb(13 28 39 / 60%);
    @include flex(column, normal, center);
  }

  &__avatar {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }

  &__title {
    color: $color-success;
    text-align: center;
  }

  &__subtitle {
    color: #9e9e9e;
    text-align: center;
    letter-spacing: 1px;
  }

  &__logout {
    border: none;
    color: $color-white;
    opacity: 0.8;
    cursor: pointer;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: $color-danger;
    border-radius: $dim-xxsmall;
    padding: $dim-small $dim-xlarge;
    transition: opacity 0.2s ease-in;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
