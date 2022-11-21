<script setup lang="ts">
import { computed } from 'vue'
import { Movie } from '@/core'
import { useGetListMovieAPI } from '@/composables/movie'
import MovieList from '@/components/modules/movie/MovieList.vue'

const { data } = useGetListMovieAPI()

const movies = computed(() => {
  const results: Array<Movie> = data?.value?.results?.map((item) => ({
    id: item.id,
    name: item.title,
    title: item.title,
    subtitle: item.overview,
    poster: item.poster_path,
    created: item.release_date
  })) as Movie[]
  return results
})
</script>

<template>
  <movie-list :movies="movies"/>
</template>

<style scoped lang="scss"></style>
