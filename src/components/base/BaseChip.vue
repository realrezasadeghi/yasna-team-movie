<script setup lang="ts">
import { withDefaults, defineProps, computed } from 'vue'

interface Props {
  label?: boolean,
  outlined?: boolean,
  color?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger' | 'info' | 'white' | 'default'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'default'
})

const classes = computed(() => {
  const base = 'base-chip'
  return {
    [base + '--label']: props.label,
    [base + '--outlined']: props.outlined
  }
})
</script>

<template>
 <span :class="['base-chip', `base-chip--${color}`,classes]" v-bind="$attrs">
    <span class="base-chip__content">
      <slot/>
    </span>
  </span>
</template>

<style scoped lang="scss">
.base-chip {
  outline: none;
  cursor: pointer;
  color: $color-white;
  font-size: $dim-small;
  line-height: $dim-large;
  border-radius: $dim-large;
  display: inline-flex !important;
  transition: opacity 0.2s ease-in;
  padding: $dim-xxsmall $dim-xsmall;
  @include flex(row, center, center);

  &__content {
    max-width: 100%;
    gap: $dim-xxsmall;
    @include flex(row, center, center);
  }

  &:hover {
    opacity: 0.8;
  }

  &--primary {
    border-color: $color-primary;
    background-color: $color-primary;
  }

  &--warning {
    border-color: $color-warning;
    background-color: $color-warning;
  }

  &--secondary {
    border-color: $color-secondary;
    background-color: $color-secondary;
  }

  &--default {
    border-color: $color-default;
    background-color: $color-default;
  }

  &--info {
    border-color: $color-info;
    background-color: $color-info;
  }

  &--success {
    border-color: $color-success;
    background-color: $color-success;
  }

  &--danger {
    border-color: $color-danger;
    background-color: $color-danger;
  }

  &--white {
    border-color: $color-white;
    background-color: $color-white;
  }

  &--label {
    border-radius: $dim-xxsmall;
  }

  &--outlined {
    background-color: transparent;
  }
}
</style>
