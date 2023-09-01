<script lang="ts" setup>
import IconArrow from '../icons/IconArrow.vue'

type Props = {
  text: string
  withArrow?: boolean
  withoutFill?: boolean
}

defineProps<Props>()
const emit = defineEmits(['clicked'])
</script>

<template>
  <button
    class="button"
    :class="{
      'button--with-arrow': withArrow,
      'button--without-fill': withoutFill
    }"
    @click="emit('clicked')"
  >
    {{ text }}
    <IconArrow v-if="withArrow" />
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';

.button {
  display: flex;
  align-items: center;
  gap: rem(16);
  padding: rem(14) rem(32);
  border: none;
  border-radius: $controlsBorderRadius;
  background: $secondaryColor;
  cursor: pointer;

  @include font-roboto;

  color: $white;

  &--with-arrow {
    padding: rem(14) rem(24) rem(14) rem(32);
  }

  &--without-fill {
    background: $white;
    border: 2px solid $secondaryColor;
    color: $secondaryColor;
  }
}
</style>
