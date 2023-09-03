<script lang="ts" setup>
import IconArrow from '../icons/IconArrow.vue'

type Props = {
  text: string
  withArrow?: boolean
  withoutFill?: boolean
  size?: 'large'
}

defineProps<Props>()
const emit = defineEmits(['clicked'])
</script>

<template>
  <button
    class="button"
    :class="{
      'button--with-arrow': withArrow,
      'button--without-fill': withoutFill,
      'button--size-large': size === 'large'
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
  justify-content: center;
  gap: 16px;
  padding: rem(14) rem(32);
  border: none;
  border-radius: $controlsBorderRadius;
  background: $secondaryColor;
  cursor: pointer;

  @include font-roboto;

  color: $white;

  @include tablet {
    padding: 8px 16px;
  }

  &--with-arrow {
    padding: rem(14) rem(24) rem(14) rem(32);

    @include tablet {
      padding: 14px 24px 14px 32px;
    }
  }

  &--without-fill {
    background: $white;
    border: 2px solid $secondaryColor;
    color: $secondaryColor;
  }

  &--size-large {
    @include small-desktop {
      font-size: rem(15);
      line-height: rem(20);
    }

    @include tablet {
      font-size: 15px;
      line-height: 20px;
      padding: 15px 0;
    }
  }
}
</style>
