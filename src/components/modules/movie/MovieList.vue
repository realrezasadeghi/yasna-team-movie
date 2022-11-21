<script setup lang="ts">
import { Movie } from '@/core'
import { defineProps } from 'vue'
import MovieItem from '@/components/modules/movie/MovieItem.vue'

defineProps<{ movies: Array<Movie> }>()
</script>

<template>
  <div class="movie-list">
    <template v-for="item in movies" :key="item.name">
      <movie-item v-bind="item"/>
    </template>
  </div>
</template>

<style scoped lang="scss">
.movie-list {
  display: grid;
  gap: $dim-normal;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
}
</style>
