<script setup lang="ts">
import { Movie } from '@/core'
import { computed, defineProps } from 'vue'

interface Props {
  id: number;
  name: string;
  title: string;
  poster: string;
  subtitle: string;
  created?: Date | string;
}

const props = defineProps<Props>()
const link = computed(() => `/movie/${props.id}`)
const image = computed(() => `https://image.tmdb.org/t/p/original${props.poster}`)
</script>

<template>
  <article class="movie-item">
    <img :alt="title" :src="image" class="movie-item__image"/>
    <div class="movie-item__body">
      <div class="movie-item__tags"></div>
      <router-link :to="link" class="movie-item__title movie-item--text">{{ title }}</router-link>
      <p class="movie-item__subtitle movie-item--text">
        {{ subtitle }}
      </p>
      <div class="movie-item__info">
        <img :alt="name" :src="image" class="movie-item__avatar"/>
        <div class="movie-item__info-body">
          <p class="movie-item__info-name movie-item--text">{{ name }}</p>
          <p class="movie-item__info-created">{{ created }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.movie-item {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  border-radius: $dim-xsmall;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  @include flex(column, flex-start, flex-start);

  &__image {
    width: 100%;
    height: 13rem;
    object-fit: cover;
    border-radius: $dim-xsmall $dim-xsmall 0 0;
  }

  &__body {
    width: 100%;
    gap: $dim-xsmall;
    padding: $spacing-normal;
    @include flex(column, flex-start, center);
  }

  &__tags {
    flex-wrap: wrap;
    gap: $dim-xxsmall;
    @include flex(row, center, flex-start);
  }

  &__title {
    color: black;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1.5px;
    height: $dim-xlarge;
    font-size: $dim-large;
    transition: all 0.2s ease-in;

    &:hover {
      color: #11b980;
    }
  }

  &__subtitle {
    color: #9e9e9e;
    height: $dim-xxlarge;
    font-size: $dim-normal;
  }

  &--text {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__info {
    width: 100%;
    gap: $dim-xsmall;
    @include flex(row, center, flex-start);

    &-body {
      width: 100%;
      gap: $dim-xxsmall;
      @include flex(column, flex-start, center);
    }

    &-name {
      width: 100%;
      font-size: $dim-normal;
    }

    &-created {
      font-size: $dim-normal;
      color: #a8a8a8;
    }
  }

  &__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
}
</style>
