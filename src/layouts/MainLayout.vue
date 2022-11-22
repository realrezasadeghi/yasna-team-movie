<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
</script>

<template>
  <div class="main-layout">
    <the-header/>
    <main class="main-layout__main">
      <router-view v-slot="{ Component, route }">
        <transition name="scale" mode="out-in">
          <component :is="Component" :key="route.path"/>
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style lang="scss">
.main-layout {
  width: 100%;
  height: 100%;

  &__main {
    width: 100%;
    height: 100%;
    padding: $spacing-xxlarge;

    @media screen and (max-width: 600px) {
      padding: $dim-normal;
    }
  }
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
