<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseChip from '@/components/base/BaseChip.vue'
import { useGetMovieDetailByIdAPI } from '@/composables'

const route = useRoute()
const {
  data: movieDetails
} = useGetMovieDetailByIdAPI({
  movieId: route.params.id
})
const image = computed(() => `https://image.tmdb.org/t/p/original${movieDetails?.value?.backdrop_path}`)
</script>

<template>
  <div class="movie-details-view">
    <template v-if="movieDetails">
      <img class="movie-details-view__image" :src="image" :alt="movieDetails.title"/>
      <main class="movie-details-view__body">
        <h1 class="movie-details-view__title" v-text="movieDetails.title"/>
        <div class="movie-details-view__tags">
          <template v-for="item in movieDetails.genres" :key="item.id">
            <base-chip color="primary" label>{{ item.name }}</base-chip>
          </template>
        </div>
        <div class="movie-details-view__tags">
          <template v-for="item in movieDetails.production_companies" :key="item.id">
            <base-chip color="warning" label>{{ item.name }}</base-chip>
          </template>
        </div>
        <p class="movie-details-view__description" v-text="movieDetails.overview"/>
      </main>
    </template>
  </div>
</template>

<style scoped lang="scss">
.movie-details-view {
  width: 100%;
  height: 100%;
  gap: $dim-normal;
  @include flex(column, center, center);

  &__image {
    width: 100%;
    height: 35rem;
    border-radius: $dim-xsmall;
    object-fit: cover;
  }

  &__body {
    width: 100%;
    gap: $dim-small;
    @include flex(column, flex-start, center);
  }

  &__title {
    letter-spacing: 2px;
  }

  &__tags {
    flex-wrap: wrap;
    gap: $dim-small;
    @include flex(row, center, flex-start);
  }

  &__description {
    text-align: justify;
    line-height: $dim-large;
    color: $color-secondary;
    font-family: 'Arial', serif;
  }
}
</style>
