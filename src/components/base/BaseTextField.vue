<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue'

interface Props {
  label: string,
  modelValue: string,
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()

const value = computed({
  get: () => props.modelValue,
  set: (value: string) => {
    emit('update:modelValue', value)
  }
})
const active = ref<boolean>(false)
const inputRef = ref<HTMLInputElement | null>()

const onFocus = () => {
  active.value = true
}

const onBlur = () => {
  active.value = false
}

const onClick = () => {
  inputRef.value?.focus()
}
</script>

<template>
  <div class="base-text-field" @click="onClick">
    <label
      :class="['base-text-field__label',{
        'base-text-field--label-active': active,
      'base-text-field--label-value':modelValue && !active}]">
      {{ label }}
    </label>
    <input v-model="value" ref="inputRef" :class="['base-text-field__input', {'base-text-field--input-active': active}]"
           @focus="onFocus" @blur="onBlur"/>
  </div>
</template>

<style scoped lang="scss">
.base-text-field {
  width: 100%;
  cursor: text;
  position: relative;
  box-sizing: border-box;
  padding: $spacing-xsmall;
  border-radius: $dim-xxsmall;
  transition: all 0.2s ease-in;
  border: 1px solid $color-secondary;

  &:hover {
    border-color: $color-primary;
  }

  &__label {
    top: $dim-normal;
    position: absolute;
    font-size: $dim-xsmall;
    color: $color-secondary;
    transition: all 0.2s ease-in;
    background-color: transparent;
    padding-inline: $spacing-xsmall;
  }

  &__input {
    width: 100%;
    height: 100%;
    border: none;
    box-sizing: border-box;
    margin-top: $dim-small;
    padding-inline: $dim-xsmall;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }

  &--label-active {
    color: $color-primary;
    top: calc(-1 * $dim-xsmall);
    background-color: $color-white;
  }

  &--label-value {
    top: calc(-1 * $dim-xsmall);
    background-color: $color-white;
  }
}
</style>
