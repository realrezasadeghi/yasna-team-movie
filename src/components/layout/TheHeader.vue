<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { NavbarType } from '@/core'
import { InformationStore } from '@/store/modules/user/interface'

const store = useStore()
const user = computed<InformationStore>(() => store.getters.getInformation)
const isAuthenticated = computed<boolean>(() => store.getters.getIsAuthenticated)

const menus = computed<NavbarType[]>(() => {
  const username = user?.value?.username
  return [
    {
      label: 'Login',
      link: '/login',
      hidden: isAuthenticated.value
    },
    {
      link: '/account',
      label: username ?? '',
      hidden: !isAuthenticated.value
    }
  ]
})

</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <router-link to="/" class="header__nav-link header__nav--brand">
        Movies
      </router-link>
      <ul class="header__nav-list">
        <template v-for="item in menus" :key="item.key">
          <li v-if="!item.hidden" class="header__nav-item">
            <router-link :to="item.link" class="header__nav-link header__nav--link-style">
              {{ item.label }}
            </router-link>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: $color-success;
  padding: $spacing-small $spacing-xxlarge;

  &__nav {
    width: inherit;
    @include flex(row, center, space-between);

    &-link {
      color: $color-white;
      text-decoration: none;
    }

    &--brand {
      font-weight: bold;
      color: $color-white;
      letter-spacing: 1px;
      font-size: $dim-large;
    }

    &--link-style {
      letter-spacing: 1px;
      border-radius: $dim-xxsmall;
      transition: all 0.17s ease-in;
      padding: $spacing-small $spacing-normal;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }

    &-list {
      gap: $dim-normal;
      list-style-type: none;
      @include flex(row, center, center);
    }
  }
}
</style>
