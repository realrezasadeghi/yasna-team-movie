<script setup lang="ts">
import { NavbarType } from '@/core'

const menus: NavbarType[] = [
  {
    label: 'Login',
    link: '/login',
    hidden: false,
    key: 'login'
  }
]
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
  background-color: #11b980;
  padding: $spacing-small $spacing-xxlarge;

  &__nav {
    width: inherit;
    @include flex(row, center, space-between);

    &-link {
      color: white;
      text-decoration: none;
    }

    &--brand {
      color: white;
      font-weight: bold;
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
