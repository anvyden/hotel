<script lang="ts" setup>
type Props = {
  title?: string
  type?: string
  placeholder?: string
  modelValue?: string
  hasPhoneMask?: boolean
}

defineProps<Props>()

const getValue = ({ target }: Event) => {
  if (!(target instanceof HTMLInputElement)) return
  return target.value
}
</script>

<template>
  <div class="input">
    <p v-if="title" class="input__title">{{ title }}</p>
    <input
      v-if="!hasPhoneMask"
      class="input__input"
      :type="type || 'text'"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', getValue($event))"
    />
    <input
      v-else
      class="input__input"
      :type="type || 'text'"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', getValue($event))"
      v-mask="'+7 (###) ##-##-##'"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';
.input {
  &__title {
    margin-bottom: 5px;
    font-family: Roboto, Arial, sans-serif;
    font-size: 12px;
    line-height: 15px;
    color: $lightGray;
  }

  &__input {
    width: 100%;
    padding: 16px;
    font-family: Roboto, Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #27282a;
    border: none;
    border-radius: $controlsBorderRadius;
    background: $platinum;

    &:focus-visible {
      outline: 1px solid $primaryColor;
    }
  }
}
</style>
